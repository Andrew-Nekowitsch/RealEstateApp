from django.shortcuts import render
from rest_framework import generics, response
from .models import Tenant
from .serializers import TenantSerializer


class TenantListAPIView(generics.ListAPIView):
    serializer_class = TenantSerializer

    def get_queryset(self):
        return Tenant.objects.all()


class TenantDetailAPIView(generics.GenericAPIView):
    serializer_class = TenantSerializer

    def get(self, request, id):
        query_set = Tenant.objects.filter(id=id).first()

        if query_set:
            return response.Response(self.serializer_class(query_set).data)

        return response.Response('Not Found', status=status.HTTP_404_NOT_FOUND)
