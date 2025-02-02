import os
from dotenv import load_dotenv

load_dotenv()

class Config:
    API_KEY = os.getenv('OPENWEATHER_API_KEY')