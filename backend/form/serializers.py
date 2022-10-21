import re

from rest_framework import serializers
from rest_framework.serializers import ValidationError
from validate_email import validate_email

from .models import PersonalData, Username


class FormSerializerStep1(serializers.ModelSerializer):
    name = serializers.CharField(label='Имя', required=True)
    surname = serializers.CharField(label='Отчество', allow_blank=True)
    lastname = serializers.CharField(label='Фамилия', required=True)
    phone_number = serializers.CharField(label='Номер телефона', required=True)
    email = serializers.EmailField(label='Email адрес', required=True)

    def validate_name(self, value):
        return self.validate_symbols(value)

    def validate_surname(self, value):
        return self.validate_symbols(value)

    def validate_lastname(self, value):
        return self.validate_symbols(value)

    def validate_phone_number(self, value):
        val = re.sub("[^0-9]", "", value)
        if val.startswith('7') or val.startswith('8'):
            val = val[1:]
        if len(val) != 10:
            raise ValidationError(f'Некорректный номер телефона: {val}')
        return '7' + val

    def validate_email(self, value):
        if not validate_email(value):
            raise ValidationError(f'Некорретный почтовый адрес: {value}')
        return value

    @staticmethod
    def validate_symbols(value):
        val = re.compile("[а_яА-ЯёЁ\-]")
        if val.search(value) is None or len(value) < 2:
            raise ValidationError('Принимаются только русские символы')
        return value

    class Meta:
        model = Username
        fields = '__all__'


class FormSerializerStep2(serializers.ModelSerializer):
    GENDERS = [('Муж', 'Мужской'),
               ('Жен', 'Женский')]
    serial = serializers.CharField(label='Серия')
    number_passport = serializers.CharField(label='Номер паспорта')
    birthday = serializers.DateField(label='Дата рождения')
    issue_passport = serializers.DateField(label='Дата выдачи паспорта')
    code = serializers.CharField(label='Код подразделения')
    birthday_place = serializers.CharField(label='Место рождения')
    issued_by = serializers.CharField(label='Паспорт выдан', required=True)
    snils = serializers.CharField(label='СНИЛС')
    address_registration = serializers.CharField(label='Адрес регистрации (Город / Населённый пункт / Улица)')
    home_registration = serializers.CharField(label='Номер дома')
    flat_registration = serializers.CharField(label='Квартира')
    gender = serializers.ChoiceField(choices=GENDERS)
    checkbox = serializers.BooleanField(label='Заполняя сведения о СНИЛС, выражаю свое согласие '
                                        'на направление в электронном виде сведений обо мне в кредитную организацию '
                                        'для прохождения упрощенной идентификации', required=True)
    address_residential = serializers.CharField(label='Адрес проживания (Город / Населённый пункт / Улица)')
    address_match = serializers.BooleanField(label='Адрес проживания совпадает с адресом регистрации')
    home_residential = serializers.CharField(label='Номер дома')
    flat_residential = serializers.CharField(label='Квартира')

    class Meta:
        model = PersonalData


# Недоделанная модель с шага формы 3
class FormSerializerStep3(serializers.ModelSerializer):
    MARITAL_CHOICES = [
        ('Not married', 'Не женат / Не замужем'),
        ('Married', 'Женат / Замужем'),
        ('Widow', 'Вдовец / Вдова'),
        ('Divorced', 'Разведен / Разведена'),
        ('Civil marriage', 'Гражданский брак')
    ]
    marital_status = serializers.MultipleChoiceField(choices=MARITAL_CHOICES)
    extra_phone = serializers.CharField(label='Дополнительный телефон')
    # activity = serializers.MultipleChoiceField(choices=)

    class Meta:
        model = ''
