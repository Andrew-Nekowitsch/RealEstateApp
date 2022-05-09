from django.contrib import admin
from .models import Tenant, Address, Room


class TenantModelAdmin(admin.ModelAdmin):
    list_display = ('full_name', 'room',
                    'phone', 'created_at', 'updated_at')


admin.site.register(Tenant, TenantModelAdmin)
admin.site.register(Address)
admin.site.register(Room)
