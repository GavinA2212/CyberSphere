# Generated by Django 5.0.6 on 2024-06-17 20:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_product_featuredphoto'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='created_by',
            field=models.TextField(blank=True, max_length=100, null=True),
        ),
    ]
