from django.urls import path

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

from auth_ex.views import (
    UserCreateAPIView,
    UserRetrieveAPIView,
)

app_name = 'auth_ex'
urlpatterns = [
    path('token/obtain/', TokenObtainPairView.as_view(), name='token-obtain'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token-refresh'),
    path('user/create/', UserCreateAPIView.as_view(), name='create-user'),
    path('user/detail/', UserRetrieveAPIView.as_view(), name='user-detail'),
]
