import os
import sys
import logging.config
logging.config.fileConfig(
    os.environ.get('LOGGING_CONFIG', '/usr/share/mysite/mysite.logging.rest.conf'))


from mysite.server.wsgi import application
