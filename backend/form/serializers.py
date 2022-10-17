from rest_framework import serializers

from .models import PersonalData, Username


class FormSerializerStep1(serializers.ModelSerializer):
    name = serializers.CharField(label='Имя')
    surname = serializers.CharField(label='Отчество', allow_blank=True)
    lastname = serializers.CharField(label='Фамилия')
    phone_number = serializers.CharField(label='Номер телефона')
    email = serializers.EmailField(label='Email адрес')

    class Meta:
        model = Username


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
