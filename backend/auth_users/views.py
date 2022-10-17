from rest_framework import status
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from django.contrib.auth import login, logout

from .serializers import LoginSerializer


class LoginAPIView(APIView):
    """
    Logs in an existing user.
    """
    permission_classes = [AllowAny]
    serializer_class = LoginSerializer

    def post(self, request):
        """
        Checks is user exists.
        username and password are required.
        """
        serializer = self.serializer_class(data=request.data)
        user = serializer.is_valid(raise_exception=True)
        login(request, user)
        return Response(status=status.HTTP_200_OK)


class LogoutAPIView(APIView):
    """
    Logout users
    """
    permission_classes = [AllowAny]

    def post(self, request):
        logout(request)
        return Response(status=status.HTTP_200_OK)
