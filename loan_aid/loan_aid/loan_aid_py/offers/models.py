from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator

class OfferModel(models.Model):
    loanAmount = models.IntegerField(validators=[MinValueValidator(10000), MaxValueValidator(999999)])
    downPayment = models.IntegerField(validators=[MinValueValidator(10000), MaxValueValidator(999999)])
    loanTerm = models.IntegerField(validators=[MinValueValidator(10), MaxValueValidator(240)])
