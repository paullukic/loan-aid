import graphene
from graphene_django import DjangoObjectType

from loan_aid_py.models import RateModel

class RateType(DjangoObjectType):
    class Meta:
        model = RateModel
class Query(graphene.ObjectType):
    rates = graphene.List(RateType)

    def resolve_rates(self, info):
        return RateModel.objects.all()


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

class Mutation(graphene.ObjectType):
    create_rate = CreateRate.Field()

schema = graphene.Schema(
    query=Query,
    mutation=Mutation
)