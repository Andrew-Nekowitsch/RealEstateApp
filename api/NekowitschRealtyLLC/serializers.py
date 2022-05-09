from rest_framework import serializers
from .models import Tenant, Animal, Address, Vehicle, Room


class TenantSerializer(serializers.ModelSerializer):

    class Meta:
        model = Tenant
        fields = '__all__'


class AnimalSerializer(serializers.ModelSerializer):

    class Meta:
        model = Animal
        fields = '__all__'


class AddressSerializer(serializers.ModelSerializer):

    class Meta:
        model = Address
        fields = '__all__'


class VehicleSerializer(serializers.ModelSerializer):

    class Meta:
        model = Vehicle
        fields = '__all__'


class RoomsSerializer(serializers.ModelSerializer):

    class Meta:
        model = Room
        fields = '__all__'
