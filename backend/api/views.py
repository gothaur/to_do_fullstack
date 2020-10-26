from api.serializers import (
    TaskSerializer,
    # UserSerializer,
)
from django.contrib.auth import (
    get_user_model,
)
from rest_framework.generics import (
    # CreateAPIView,
    ListCreateAPIView,
    RetrieveUpdateDestroyAPIView,
)

from rest_framework.authentication import (
    BasicAuthentication,
    SessionAuthentication,
)

from rest_framework.permissions import (
    AllowAny,
    IsAuthenticated,
)

from tasks.models import (
    Task
)

User = get_user_model()


# class UserCreateAPIView(CreateAPIView):

#     model = User
#     permission_classes = (
#         AllowAny,
#     )
#     serializer_class = UserSerializer


class TaskRetrieveUpdateDestroyAPIView(RetrieveUpdateDestroyAPIView):

    permission_classes = [
        IsAuthenticated,
    ]
    queryset = Task.objects.all()
    serializer_class = TaskSerializer


class TasksAPIListView(ListCreateAPIView):

    filter_fields = (
        'completed',
        'name',
    )
    permission_classes = [
        IsAuthenticated,
    ]
    serializer_class = TaskSerializer

    def get_queryset(self):
        return Task.objects.filter(owner=self.request.user)

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
