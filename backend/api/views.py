from .models import Product, ProductCategory, ProductFeatured
from.serializers import ProductSerializer, ProductCategorySerializer, ProductFeaturedSerializer

#
#from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.permissions import AllowAny, IsAuthenticated
#from rest_framework.decorators import permission_classes

from django.contrib.auth.models import User
from rest_framework import generics




#from rest_framework.permissions import IsAuthenticated, AllowAny


# Create your views here.

class ProductList(generics.ListCreateAPIView):
  queryset = Product.objects.all().order_by('-updated')
  serializer_class = ProductSerializer
  permission_classes = [AllowAny]

class ProductDetail(generics.RetrieveUpdateDestroyAPIView):
  queryset = Product.objects.all()
  serializer_class = ProductSerializer
  permission_classes = [AllowAny]
  
class ProductCategoryList(generics.ListCreateAPIView):
  queryset = ProductCategory.objects.all()
  serializer_class = ProductCategorySerializer
  permission_classes = [AllowAny]
  
class ProductCategoryDetail(generics.RetrieveUpdateDestroyAPIView):
  queryset = ProductCategory.objects.all()
  serializer_class = ProductCategorySerializer
  permission_classes = [AllowAny]
  
class ProductFeaturedList(generics.ListCreateAPIView):
  queryset = ProductFeatured.objects.all()
  serializer_class = ProductFeaturedSerializer
  permission_classes = [AllowAny]

class ProductFeaturedDetail(generics.RetrieveUpdateDestroyAPIView):
  queryset = ProductFeatured.objects.all()
  serializer_class = ProductFeaturedSerializer
  permission_classes = [AllowAny]

  
  