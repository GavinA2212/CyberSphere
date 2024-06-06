from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.

class TimestampModel(models.Model):
  created = models.DateTimeField(auto_now_add=True)
  updated = models.DateTimeField(auto_now=True)
  
  class Meta:
    abstract = True


class CustomUser(AbstractUser):
  preferences = models.CharField(max_length=255, blank=True, null=True)
   
   
class ProductCategory(TimestampModel):
  category_name = models.CharField(max_length=180)
  def __str__(self):
    return self.category_name

class ProductFeatured(TimestampModel):
  category_name = models.CharField(max_length=180, null=True)
  def __str__(self):
    return self.category_name

class Product(TimestampModel):
  name = models.CharField(max_length=255)
  price = models.FloatField()
  stock = models.IntegerField(default=0)
  description = models.TextField(null=True, blank=True,)
  discountprice = models.IntegerField(default=price, null=True, blank = True)
  coverphoto = models.ImageField(upload_to='product_images/')
  featuredphoto = models.ImageField(upload_to='product_images/featured', null=True, blank=True)
  
  category = models.ForeignKey(ProductCategory, on_delete=models.CASCADE)
  featured = models.ForeignKey(ProductFeatured, on_delete=models.CASCADE)
  def __str__(self):
    return self.name


  