from django.urls import path

from api.views import (
    TasksAPIListView,
    TaskRetrieveUpdateDestroyAPIView,
)

app_name = 'api'
urlpatterns = [
    path('tasks/', TasksAPIListView.as_view(), name='task-list'),
    path('tasks/<int:pk>/', TaskRetrieveUpdateDestroyAPIView.as_view(), name='task-list'),
]
