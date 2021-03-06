from django.contrib.auth import (
    get_user_model,
)
from rest_framework import (
    serializers,
)

from api.validators import (
    validate_password
)

User = get_user_model()


class UserSerializer(serializers.ModelSerializer):

    username = serializers.CharField()
    password = serializers.CharField(
        write_only=True,
        validators=[
            validate_password,
        ],
    )

    class Meta:
        model = User
        fields = [
            'username',
            'password',
        ]
        extra_kwargs = {
            'password': {
                'write_only': True,
            },
        }

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        new_user = self.Meta.model(**validated_data)
        if password is not None:
            new_user.set_password(password)
        new_user.save()
        return new_user
