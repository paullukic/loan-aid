from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator

class RateModel(models.Model):
    rate = models.DecimalField(max_digits=5, decimal_places=2)