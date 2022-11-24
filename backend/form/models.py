from django.db import models


class Username(models.Model):
    name = models.CharField(verbose_name='Имя', max_length=64)
    surname = models.CharField(verbose_name='Отчество', max_length=64)
    lastname = models.CharField(verbose_name='Фамилия', max_length=64)
    phone_number = models.CharField(verbose_name='Номер телефона', max_length=64)
    email = models.EmailField(verbose_name='Email адрес', max_length=64)

    class Meta:
        verbose_name = 'Пользователь'
        verbose_name_plural = 'Пользователи'


class PersonalData(models.Model):
    GENDERS = [('Муж', 'Мужской'),
               ('Жен', 'Женский')]
    serial = models.CharField(verbose_name='Серия', max_length=32)
    number_passport = models.CharField(verbose_name='Номер паспорта', max_length=6)
    birthday = models.DateField(verbose_name='Дата рождения')
    issue_passport = models.DateField(verbose_name='Дата выдачи паспорта', max_length=4)
    code = models.CharField(verbose_name='Код подразделения', max_length=64)
    birthday_place = models.CharField(verbose_name='Место рождения',  max_length=256)
    issued_by = models.CharField(verbose_name='Паспорт выдан', max_length=256)
    snils = models.CharField(verbose_name='СНИЛС', max_length=64)
    address_registration = models.CharField(verbose_name='Адрес регистрации (Город / Населённый пункт / Улица)', max_length=256)
    home_registration = models.CharField(verbose_name='Номер дома', max_length=8)
    flat_registration = models.CharField(verbose_name='Квартира', max_length=8)
    gender = models.CharField(max_length=3, choices=GENDERS)
    checkbox_agreement = models.BooleanField(verbose_name='Заполняя сведения о СНИЛС, выражаю свое согласие '
                                              'на направление в электронном виде сведений обо мне в кредитную организацию '
                                              'для прохождения упрощенной идентификации')
    address_residential = models.CharField(verbose_name='Адрес проживания (Город / Населённый пункт / Улица)', max_length=64)
    address_match = models.BooleanField(verbose_name='Адрес проживания совпадает с адресом регистрации')
    home_residential = models.CharField(verbose_name='Номер дома', max_length=8)
    flat_residential = models.CharField(verbose_name='Квартира', max_length=8)

    class Meta:
        verbose_name = 'Персональные данные пользователя'
        verbose_name_plural = 'Персональные данные пользователей'


class IncomeEmployment(models.Model):
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
    marital_status = models.CharField(choices=MARITAL_CHOICES)
    education = models.CharField(choices=EDUCATION_CHOICES)
    employment = models.CharField(choices=EMPLOYMENT_CHOICES)
    amount_expenses = models.IntegerField()
    income_month = models.IntegerField()
    car = models.BooleanField()
    ownership = models.BooleanField()
    activity = models.CharField(choices=ACTIVITY_CHOICES)

    class Meta:
        verbose_name = 'Занятость и доходы'
        verbose_name_plural = 'Занятость и доходы'


class LoanTerms(models.Model):
    sum = models.IntegerField()
    term = models.IntegerField()
    insurance = models.BooleanField()
    financial_products = models.BooleanField()
    manager = models.BooleanField()
    service = models.BooleanField()

    class Meta:
        verbose_name = 'Условия займа'
        verbose_name_plural = 'Условия займа'
