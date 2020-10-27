from api.serializers import (
    TaskSerializer,
    # UserSerializer,
)
from django.contrib.auth import (
    get_user_model,
)
from rest_framework.generics import (
    ListCreateAPIView,
    RetrieveUpdateDestroyAPIView,
)

from rest_framework.authentication import (
    BasicAuthentication,
    SessionAuthentication,
)

from rest_framework.permissions import (
    IsAuthenticated,
)

from tasks.models import (
    Task
)

User = get_user_model()


class TaskRetrieveUpdateDestroyAPIView(RetrieveUpdateDestroyAPIView):

    permission_classes = [
        IsAuthenticated,
    ]
    queryset = Task.objects.all()
    serializer_class = TaskSerializer


class TasksAPIListView(ListCreateAPIView):

    # authentication_classes = (
    #     IsAuthenticated,
    # )
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
