# Generated by Django 5.1.7 on 2025-07-18 09:28

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Flights',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('origin', models.CharField(max_length=65)),
                ('destination', models.CharField(max_length=65)),
                ('duration', models.IntegerField()),
            ],
        ),
    ]
