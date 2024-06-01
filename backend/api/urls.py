from django.urls import path
from . import views
from rest_framework_simplejwt.views import TokenRefreshView



urlpatterns = [
  path('products/', views.ProductList.as_view(), name='product-list'),
  path('products/<int:pk>/', views.ProductDetail.as_view(), name = 'product-detail'),
  path('productCategories/', views.ProductCategoryList.as_view(), name='product-category-list'),
  path('productCategory/<int:pk>/', views.ProductCategoryDetail.as_view(), name = 'product-category'),
  
  
]