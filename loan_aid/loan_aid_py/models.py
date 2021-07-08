from django.db import models

class RateModel(models.Model):
    rate = models.DecimalField(max_digits=5, decimal_places=2)