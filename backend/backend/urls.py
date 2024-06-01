from django.contrib import admin
from django.urls import path, include
#from api.views import CreateUserView, MyTokenObtainPairView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path('admin/', admin.site.urls),
    #path('api/', include('api.urls')),
    #path('api/token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    #path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),   
   # path('', include('api.urls')), 
]
