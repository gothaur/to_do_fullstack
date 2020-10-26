from auth_ex.serializers import (
    UserSerializer,
)
from django.contrib.auth import (
    get_user_model,
)
from rest_framework.generics import (
    CreateAPIView,
)

from rest_framework.permissions import (
    AllowAny,
)

User = get_user_model()


class UserCreateAPIView(CreateAPIView):

    authentication_classes = (

    )

    model = User
    permission_classes = (
        AllowAny,
    )
    serializer_class = UserSerializer
