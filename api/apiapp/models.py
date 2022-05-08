from django.db import models


class Address(models.Model):
    street = models.CharField(max_length=200)
    city = models.CharField(max_length=200)
    state = models.CharField(max_length=200)
    zip = models.CharField(max_length=200)

    class Meta:
        ordering = ['-state']

    def __str__(self):
        return self.street


class Vehicle(models.Model):
    make = models.CharField(max_length=20)
    model = models.CharField(max_length=20)
    license_plate = models.CharField(max_length=20)
    color = models.CharField(max_length=20)

    class Meta:
        ordering = ['-license_plate']


class VehicleLookUp(models.Model):
    owner_id = models.IntegerField()
    vehicle = models.ForeignKey(Vehicle, on_delete=models.CASCADE)

    class Meta:
        ordering = ['-owner_id']


class Animal(models.Model):
    type = models.CharField(max_length=20)
    name = models.CharField(max_length=100)
    color = models.CharField(max_length=20)
    size = models.CharField(max_length=20)

    class Meta:
        ordering = ['-name']


class AnimalLookUp(models.Model):
    owner_id = models.IntegerField()
    animal = models.ForeignKey(Animal, on_delete=models.CASCADE)

    class Meta:
        ordering = ['-owner_id']


class Tenant(models.Model):
    first_name = models.CharField(max_length=100)
    middle_name = models.CharField(max_length=100, null=True, blank=True)
    last_name = models.CharField(max_length=100)
    date_of_birth = models.DateField()
    ssn = models.IntegerField(null=True, blank=True)

    phone = models.CharField(max_length=15, null=True, blank=True)
    drivers_license = models.CharField(max_length=100, null=True, blank=True)
    email = models.CharField(max_length=100)

    has_vehicle = models.BooleanField()
    vehicles = models.ForeignKey(
        VehicleLookUp, on_delete=models.CASCADE, null=True, blank=True)
    has_pets = models.BooleanField()
    pets = models.ForeignKey(
        AnimalLookUp, on_delete=models.CASCADE, null=True, blank=True)

    rent_per_month = models.DecimalField(max_digits=6, decimal_places=2)
    address = models.ForeignKey(
        Address, on_delete=models.CASCADE, null=True, blank=True)
    active = models.BooleanField(False)
    tenancy_start_date = models.DateField(null=True, blank=True)
    tenancy_end_date = models.DateField(null=True, blank=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return self.address.__str__() + ': ' + self.first_name + ' ' + self.middle_name[0] + '. ' + self.last_name
