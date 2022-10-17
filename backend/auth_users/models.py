import jwt

from datetime import datetime
from datetime import timedelta

from django.conf import settings
from django.db import models
from django.core import validators
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, UserManager


class User(AbstractBaseUser, PermissionsMixin):
    """
    Определяет наш пользовательский класс User.
    Требуется имя пользователя, адрес электронной почты и пароль.
    """
    username = models.CharField(db_index=True, max_length=64, unique=True)
    password = models.CharField(max_length=64)
    email = models.EmailField(validators=[validators.validate_email], unique=True, blank=True, null=True)

    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)

    # Свойство `USERNAME_FIELD` сообщает нам, какое поле мы будем использовать для входа.
    USERNAME_FIELD = 'username'

    objects = UserManager()

    def __str__(self):
        return self.username

    @property
    def token(self):
        """
        Позволяет нам получить токен пользователя, вызвав `user.token`
        """
        return self._generate_jwt_token()

    def _generate_jwt_token(self):
        """
        Создает веб-токен JSON, в котором хранится идентификатор
        этого пользователя и срок его действия
        составляет 60 дней в будущем.
        """
        dt = datetime.now() + timedelta(days=60)

        token = jwt.encode({
            'id': self.pk,
            'exp': int(dt.strftime('%s'))
        }, settings.SECRET_KEY, algorithm='HS256')

        return token.decode('utf-8')
