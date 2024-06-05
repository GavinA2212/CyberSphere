
from rest_framework import serializers
from .models import Product, ProductCategory, ProductFeatured

class ProductSerializer(serializers.ModelSerializer):
  class Meta:
    model = Product
    fields = '__all__'

class ProductCategorySerializer(serializers.ModelSerializer):
  class Meta:
    model = ProductCategory
    fields = '__all__'
    
class ProductFeaturedSerializer(serializers.ModelSerializer):
  class Meta:
    model = ProductFeatured
    fields = '__all__'