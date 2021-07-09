import graphene
from graphene_django import DjangoObjectType

from loan_aid.loan_aid_py.rates.models import RateModel
from loan_aid.loan_aid_py.offers.models import OfferModel


class RateType(DjangoObjectType):
    class Meta:
        model = RateModel


class OfferType(DjangoObjectType):
    class Meta:
        model = OfferModel

class Query(graphene.ObjectType):
    rates = graphene.List(RateType)
    offers = graphene.List(OfferType)
    
    def resolve_rates(self, info):
        return RateModel.objects.all()

    def resolve_offers(self, info):
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