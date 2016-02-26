import atexit
import logging
import os

logger = logging.getLogger(__name__)
logger.debug('starting...')
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "rest.settings")

from django.core.wsgi import get_wsgi_application

DJANGO_CALLBACK = get_wsgi_application()
def application(*args, **kwargs):
    """
    Wrapper for Django WSGI callback which
    catches and logs all exceptions occured during
    HTTP request processing.
    """
    logger.debug('application(): args=%r, kwargs=%r', args, kwargs)
    try:
        return DJANGO_CALLBACK(*args, **kwargs)
    except Exception as exc:
        logger.exception(exc)
        logger.critical('crashed with input args: args=%r, kwargs=%r',
                        args, kwargs)
        raise


def at_exit_hook():
    """
    On-exit hook.
    Just report shutdown to the log.
    """
    logger.info('shutting down')


atexit.register(at_exit_hook)
logger.info('started')
