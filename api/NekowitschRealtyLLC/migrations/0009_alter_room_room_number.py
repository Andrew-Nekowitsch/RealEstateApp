# Generated by Django 4.0.4 on 2022-05-08 20:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('NekowitschRealtyLLC', '0008_rename_rooms_room'),
    ]

    operations = [
        migrations.AlterField(
            model_name='room',
            name='room_number',
            field=models.CharField(max_length=2),
        ),
    ]