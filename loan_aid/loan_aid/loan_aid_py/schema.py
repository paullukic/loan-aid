import graphene
from graphene import relay
from graphene_django import DjangoObjectType
from graphene_django.filter import DjangoFilterConnectionField

from django.db.models import Q
import django_filters

from loan_aid.loan_aid_py.rates.models import RateModel
from loan_aid.loan_aid_py.offers.models import OfferModel



class RateType(DjangoObjectType):
    class Meta:
        model = RateModel


class OfferType(DjangoObjectType):
    class Meta:
        model = OfferModel
        fields = ['loanAmount', 'downPayment', 'loanTerm']
        interfaces = (relay.Node, )
        use_connection = True

class Query(graphene.ObjectType):
    rates = graphene.List(RateType)
    offers = graphene.List(OfferType, loanAmount=graphene.Int(), downPayment=graphene.Int(), loanTerm=graphene.Int())
    
    def resolve_rates(self, info):
        return RateModel.objects.all()

    def resolve_offers(self, info, loanAmount=None, downPayment=None, loanTerm=None):
        if (loanAmount and downPayment and loanTerm):
            filter = (Q(loanAmount__lte=loanAmount) & Q(downPayment__lte=downPayment) & Q(loanTerm=loanTerm))
            return OfferModel.objects.filter(filter)

        return OfferModel.objects.all()        

class CreateRate(graphene.Mutation):
    id = graphene.Int()
    rate = graphene.Decimal()

    class Arguments:
        rate = graphene.Decimal()

    def mutate(self, info, rate):
        rate = RateModel(rate=rate)
        rate.save()

        return CreateRate(
            id=rate.id,
            rate=rate.rate,
        )

class CreateOffer(graphene.Mutation):
    id = graphene.Int()
    loanAmount = graphene.Int()
    downPayment = graphene.Int()
    loanTerm = graphene.Int()

    class Arguments:
        loanAmount = graphene.Int()
        downPayment = graphene.Int()
        loanTerm = graphene.Int()

    def mutate(self, info, loanAmount, downPayment, loanTerm):
        offer = OfferModel(loanAmount=loanAmount, downPayment=downPayment, loanTerm=loanTerm)
        offer.save()

        return CreateOffer(
            id=offer.id,
            loanAmount = offer.loanAmount,
            downPayment = offer.downPayment,
            loanTerm = offer.loanTerm
        )

class Mutation(graphene.ObjectType):
    create_rate = CreateRate.Field()
    create_offer = CreateOffer.Field()

schema = graphene.Schema(
    query=Query,
    mutation=Mutation
)