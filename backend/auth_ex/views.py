from django.contrib.auth import (
    get_user_model,
)

from rest_framework.generics import (
    CreateAPIView,
)
from rest_framework.permissions import (
    AllowAny,
)
from rest_framework.response import (
    Response,
)
from rest_framework.views import (
    APIView,
)


from auth_ex.serializers import (
    UserSerializer,
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


class UserRetrieveAPIView(APIView):

    permission_classes = (
        AllowAny,
    )

    def get(self, request):
        current_user = UserSerializer(request.user)
        return Response(current_user.data)
