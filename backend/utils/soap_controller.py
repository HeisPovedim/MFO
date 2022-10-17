from zeep import Client
from decouple import config
import logging
from uuid import uuid4

logger = logging.getLogger(__name__)

OPERATOR_API = config("PATH_OPERATOR_API")
CUSTOMER_API = config("PATH_CUSTOMER_API")
CUSTOMER_API_KZ = config("PATH_CUSTOMER_API_KZ")
OPERATOR_API_KZ = config("PATH_OPERATOR_API_KZ")
OPERATOR_API_V2 = config("PATH_OPERATOR_API_V2")
CUSTOMER_API_V2 = config("PATH_CUSTOMER_API_V2")
CPA = config("PATH_CPA")
PASSWORD = config("SOAP_PASSWORD")
LOGIN = config("SOAP_LOGIN")
SESSION_EXPIRE_TIME = 60 * 20


class SoapController:
    """
    Модуль для работы с SOAP с использованием сессий.
    """
    def __init__(self, session):
        self.session = session
        self.token = None
        self.operator_api = None

    def create_session(self):
        self.session[self.session_name] = uuid4()
        self.session.set_expiry(SESSION_EXPIRE_TIME)

    def remove_session(self):
        if self.check_session():
            check_token = self.operator_api.service.CheckToken(self.token)
            if check_token.error_code != 0:
                del self.session[self.session_name]

    def check_session(self):
        return True if self.session.get(self.session_name, False) else False

    def connect(self, api_url):
        if self.check_session() and self.operator_api:
            return self.operator_api

        self.operator_api = Client(wsdl=api_url)

    def start(self, session_name, api_url):
        self.session_name = session_name

        self.connect(api_url)
        self.remove_session()

        if not self.check_session():
            self.token = self.operator_api.service.Auth(LOGIN, PASSWORD)

            if not self.token.errorCode:
                self.create_session()

        if self.check_session():
            return self.operator_api

    def create(self):
        session_name = 'operator_token'
        self.start(session_name, OPERATOR_API)

    def customer_api(self, guid):
        self.session_name = 'customer_token'
        api_url = CUSTOMER_API

        self.connect(api_url)
        self.remove_session()

        if not self.check_session():
            ip = self._get_client_ip()
            headers = self._apache_request_headers()
            self.token = self.operator_api.service.AuthByEIDSecured(LOGIN, PASSWORD, guid, ip, headers)

            if not self.token.errorCode:
                self.create_session()

        if self.check_session():
            return self.operator_api

        logger.error(ip + '\n' + headers)

    def operator_api_kz(self):
        session_name = 'operator_token_kz'
        self.start(session_name, OPERATOR_API_KZ)

    def operator_api_v2(self):
        session_name = 'operator_api_v2'
        self.start(session_name, OPERATOR_API_V2)

    def customer_api_v2(self, guid):
        self.session_name = 'customer_api_v2'
        api_url = CUSTOMER_API_V2

        self.connect(api_url)

        if self.check_session():
            check_token = self.operator_api.service.CheckToken(self.token)
            self.remove_session(check_token)

        if not self.check_session():
            ip = self._get_client_ip()
            headers = self._apache_request_headers()
            self.token = self.operator_api.service.AuthByEIDSecured(LOGIN, PASSWORD, guid, ip, headers)

            if not self.token.errorCode:
                self.create_session()

        if self.check_session():
            return self.operator_api

    def soap_cpa(self):
        self.session_name = 'cpa'
        try:
            self.operator_api = Client(wsdl=CPA)
        except Exception as e:
            logger.error('Error')
        return self.operator_api

    def customer_api_kz(self):
        self.operator_api = Client(wsdl=CUSTOMER_API_KZ)
        return self.operator_api

    @staticmethod
    def _get_client_ip():
        # МЕТОД НЕДОПИСАН, НЕОБХОДИМО УЗНАТЬ GETENV.
        ip_address = ''
        return ip_address

    @staticmethod
    def _apache_request_headers():
        # МЕТОД НЕДОПИСАН, НЕИЗВЕСТНО ЧТО В НЕМ ПРОИСХОДИТ
        return
