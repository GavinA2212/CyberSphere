# Generated by Django 5.0.6 on 2024-06-22 21:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_product_rating_product_ratingcount'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='rating',
            field=models.FloatField(default=4.7),
        ),
    ]
