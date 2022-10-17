from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from rest_framework.response import Response

from django.shortcuts import render

from .serializers import FormSerializerStep1, FormSerializerStep2, FormSerializerStep3


class BaseFormApi(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        functions = {
            '1': self.step_1,
            '2': self.step_2,
            '3': self.step_3,
            '4': self.step_4,
            '5': self.step_5
        }
        step_form = request.GET.get('step', None)
        if step_form:
            functions[step_form](request)

    def step_1(self, request):
        data = FormSerializerStep1(data=request.data)
        if data.is_valid():
            data.save()
        return Response(status=201)

    def step_2(self, request):
        data = FormSerializerStep2(data=request.data)
        if data.is_valid():
            data.save()
        return Response(status=201)

    def step_3(self, request):
        data = FormSerializerStep3(data=request.data)
        if data.is_valid():
            data.save()
        return Response(status=201)

    def step_4(self, request):
        pass

    def step_5(self, request):
        pass
