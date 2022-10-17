from rest_framework import serializers

from django.contrib.auth import authenticate



class LoginSerializer(serializers.Serializer):
    """
    Authenticates an existing user.
    login and password are required.
    """
    username = serializers.CharField(max_length=64, write_only=True)
    password = serializers.CharField(max_length=64, write_only=True)

    token = serializers.CharField(max_length=255, read_only=True)

    def validate(self, data):
        """
        Validates user data.
        """
        username = data.get('username', None)
        password = data.get('password', None)

        if username is None:
            raise serializers.ValidationError(
                'An email address is required to log in.'
            )

        if password is None:
            raise serializers.ValidationError(
                'A password is required to log in.'
            )

        user = authenticate(username=username, password=password)

        if user is None:
            raise serializers.ValidationError(
                'A user with this email and password was not found.'
            )

        if not user.is_active:
            raise serializers.ValidationError(
                'This user has been deactivated.'
            )
