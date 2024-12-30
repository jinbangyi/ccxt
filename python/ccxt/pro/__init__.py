# -*- coding: utf-8 -*-

"""CCXT: CryptoCurrency eXchange Trading Library (Async)"""

# ----------------------------------------------------------------------------

__version__ = '4.4.43'

# ----------------------------------------------------------------------------

from ccxt.async_support.base.exchange import Exchange  # noqa: F401

# CCXT Pro exchanges (now this is mainly used for importing exchanges in WS tests)

from ccxt.pro.binance import binance                                      # noqa: F401
from ccxt.pro.dbenny import dbenny                                        # noqa: F401
from ccxt.pro.hyperliquid import hyperliquid                              # noqa: F401
from ccxt.pro.okcoin import okcoin                                        # noqa: F401
from ccxt.pro.okx import okx                                              # noqa: F401

exchanges = [
    'binance',
    'dbenny',
    'hyperliquid',
    'okcoin',
    'okx',
]
