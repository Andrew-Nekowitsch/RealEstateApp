from django.urls import path
from .views import TenantListAPIView, TenantDetailAPIView

urlpatterns = [
    path('tenants', TenantListAPIView.as_view(), name='tenants'),
    path('tenants/<str:id>', TenantDetailAPIView.as_view(), name='tenant')
]
