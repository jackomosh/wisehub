from django.db import models

# Create your models here.

class Flights(models.Model):
    origin = models.CharField(max_length=65)
    destination = models.CharField(max_length=65)
    duration = models.IntegerField()

    def __str__(self):
        return f"{self.id}: to {self.origin} to {self.destination}"