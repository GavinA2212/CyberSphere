from django.contrib import admin

from .models import ProductCategory, Product
# Register your models here.

'''
@admin.register(ProductCategory)
class ProductCategoryAdmin(admin.ModelAdmin):
  list_display = ['category_name', 'created_at', 'updated_at' ]
  
@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
  list_display = ['name','price', 'stock', 'description', 'discountprice', 'coverphoto','category']
  
'''