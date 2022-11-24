import re
from datetime import datetime
import petrovna

from rest_framework import serializers
from rest_framework.serializers import ValidationError
from validate_email import validate_email

from .models import PersonalData, Username, IncomeEmployment


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

    def validate_serial(self, value):
        return self.validate_passport(value, 4)

    def validate_number_passport(self, value):
        return self.validate_passport(value, 6)

    def validate_birthday(self, value):
        return datetime.strptime(value, '%d.%m.%Y')

    def validate_issue_passport(self, value):
        return datetime.strptime(value, '%d.%m.%Y')

    def validate_code(self, value):
        if len(value) != 6:
            raise ValidationError('Код подразделения принимает только 6 цифр')
        return value[:3] + '-' + value[3:]

    def validate_home_registration(self, value):
        return self.validate_address(value, 3)

    def validate_home_residential(self, value):
        return self.validate_address(value, 3)

    def validate_flat_registration(self, value):
        return self.validate_address(value, 4)

    def validate_flat_residential(self, value):
        return self.validate_address(value, 4)

    def validate_snils(self, value):
        valid, error = petrovna.validate_snils(value)
        if error:
            raise ValidationError('Неверный формат СНИЛС.')
        return valid

    @staticmethod
    def validate_address(value, amount_symbols):
        val = re.compile("[0-9]")
        if val.search(value) is None or len(value) > amount_symbols:
            raise ValidationError('Принимается только численные значения')
        return value

    @staticmethod
    def validate_passport(value, amount_symbols):
        val = re.compile("[0-9]")
        if val.search(value) is None or len(value) != amount_symbols:
            raise ValidationError('Не верно заполнен номер или серия паспорта')
        return value

    class Meta:
        model = PersonalData
        fields = '__all__'


class FormSerializerStep3(serializers.ModelSerializer):
    MARITAL_CHOICES = [
        ('Not married', 'Не женат / Не замужем'),
        ('Married', 'Женат / Замужем'),
        ('Widow', 'Вдовец / Вдова'),
        ('Divorced', 'Разведен / Разведена'),
        ('Civil marriage', 'Гражданский брак')
    ]
    EDUCATION_CHOICES = [
        ('Higher professional', 'Высшее профессиональное'),
        ('Specialized secondary', 'Среднее специальное'),
        ('Incomplete Higher', 'Незаконченное высшее'),
        ('Average', 'Среднее'),
        ('Other', 'Другое')
    ]
    EMPLOYMENT_CHOICES = [
        ('Higher professional', 'Декретный отпуск'),
        ('Own business', 'Свое дело (предприниматель, фрилансер)'),
        ('Pensioner', 'Пенсионер'),
        ('Employment', 'Работа по найму'),
        ('Student', 'Студент'),
        ('Unemployed', 'Безработный'),
        ('Security', 'Военнослужащий/силовые структуры/охрана'),
        ('Civil servant', 'Госслужащий'),
        ('Dependent', 'Иждивенец'),
        ('Salaried office worker', 'Наемный рабочий офисный'),
        ('Hired manual worker', 'Наемный рабочий физического труда'),
        ('Individual entrepreneur', 'ИП'),
        ('Other', 'Прочее'),
    ]
    ACTIVITY_CHOICES = [
        ('Finance', 'Бухгалтерия, финансы, банки'),
        ('Government services', 'Государственные службы, НКО'),
        ('IT', 'ИТ и Интернет, Телекоммуникации и связь'),
        ('Medicine', 'Медицина и фармация'),
        ('Science', 'Образование, наука, языки'),
        ('Security', 'Охрана, безопасность'),
        ('Marketing', 'Полиграфия, издательства, СМИ, Маркетинг, реклама, PR'),
        ('Industry', 'Промышленность'),
        ('Restaurants', 'Рестораны, кафе, общепит'),
        ('Construction', 'Строительство, недвижимость'),
        ('Service', 'Сфера услуг'),
        ('Retail', 'Торговля розничная'),
        ('Tourism', 'Туризм, гостиничное дело'),
        ('Other', 'Другое'),
        ('Agriculture', 'Сельское хозяйство')
    ]
    marital_status = serializers.MultipleChoiceField(choices=MARITAL_CHOICES)
    education = serializers.MultipleChoiceField(choices=EDUCATION_CHOICES)
    employment = serializers.MultipleChoiceField(choices=EMPLOYMENT_CHOICES)
    amount_expenses = serializers.IntegerField()
    income_month = serializers.IntegerField()
    car = serializers.BooleanField()
    ownership = serializers.BooleanField()
    activity = serializers.MultipleChoiceField(choices=ACTIVITY_CHOICES)

    class Meta:
        model = 'IncomeEmployment'
        fields = '__all__'


class FormSerializerStep4(serializers.ModelSerializer):
    sum = serializers.IntegerField()
    term = serializers.IntegerField()
    insurance = serializers.BooleanField()
    financial_products = serializers.BooleanField()
    manager = serializers.BooleanField()
    service = serializers.BooleanField()

    class Meta:
        model = 'LoanTerms'
        fields = '__all__'
