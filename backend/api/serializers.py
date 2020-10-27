from django.utils import (
    timezone
)
from django.contrib.auth import (
    get_user_model,
)
from rest_framework import (
    serializers,
)

# from api.validators import (
#     validate_password
# )
from tasks.models import (
    Task,
)

User = get_user_model()


class TaskSerializer(serializers.ModelSerializer):

    created_date = serializers.DateTimeField(
        default=serializers.CreateOnlyDefault(
            timezone.now,
        )
    )

    owner = serializers.SerializerMethodField()

    class Meta:
        model = Task
        fields = '__all__'

    @staticmethod
    def get_owner(obj):
        return obj.owner.username

    def validate_deadline(self, value):
        if value < timezone.localdate():
            raise serializers.ValidationError(
                "Data utworzenia nie może być z przeszłości")
        return value
