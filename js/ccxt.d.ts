import { Exchange } from './src/base/Exchange.js';
import { Precise } from './src/base/Precise.js';
import * as functions from './src/base/functions.js';
import * as errors from './src/base/errors.js';
import type { Int, int, Str, Strings, Num, Bool, IndexType, OrderSide, OrderType, MarketType, SubType, Dict, NullableDict, List, NullableList, Fee, OHLCV, OHLCVC, implicitReturnType, Market, Currency, Dictionary, MinMax, FeeInterface, TradingFeeInterface, MarketInterface, Trade, Order, OrderBook, Ticker, Transaction, Tickers, CurrencyInterface, Balance, BalanceAccount, Account, PartialBalances, Balances, DepositAddress, WithdrawalResponse, DepositAddressResponse, FundingRate, FundingRates, Position, BorrowInterest, LeverageTier, LedgerEntry, DepositWithdrawFeeNetwork, DepositWithdrawFee, TransferEntry, CrossBorrowRate, IsolatedBorrowRate, FundingRateHistory, OpenInterest, Liquidation, OrderRequest, CancellationRequest, FundingHistory, MarketMarginModes, MarginMode, Greeks, Conversion, Option, LastPrice, Leverage, MarginModification, Leverages, LastPrices, Currencies, TradingFees, MarginModes, OptionChain, IsolatedBorrowRates, CrossBorrowRates, LeverageTiers, LongShortRatio, OpenInterests } from './src/base/types.js';
import { BaseError, ExchangeError, AuthenticationError, PermissionDenied, AccountNotEnabled, AccountSuspended, ArgumentsRequired, BadRequest, BadSymbol, OperationRejected, NoChange, MarginModeAlreadySet, MarketClosed, ManualInteractionNeeded, InsufficientFunds, InvalidAddress, AddressPending, InvalidOrder, OrderNotFound, OrderNotCached, OrderImmediatelyFillable, OrderNotFillable, DuplicateOrderId, ContractUnavailable, NotSupported, InvalidProxySettings, ExchangeClosedByUser, OperationFailed, NetworkError, DDoSProtection, RateLimitExceeded, ExchangeNotAvailable, OnMaintenance, InvalidNonce, ChecksumError, RequestTimeout, BadResponse, NullResponse, CancelPending, UnsubscribeError } from './src/base/errors.js';
declare const version = "4.4.43";
import binance from './src/binance.js';
import dbenny from './src/dbenny.js';
import hyperliquid from './src/hyperliquid.js';
import okcoin from './src/okcoin.js';
import okx from './src/okx.js';
import binancePro from './src/pro/binance.js';
import dbennyPro from './src/pro/dbenny.js';
import hyperliquidPro from './src/pro/hyperliquid.js';
import okcoinPro from './src/pro/okcoin.js';
import okxPro from './src/pro/okx.js';
declare const exchanges: {
    binance: typeof binance;
    dbenny: typeof dbenny;
    hyperliquid: typeof hyperliquid;
    okcoin: typeof okcoin;
    okx: typeof okx;
};
declare const pro: {
    binance: typeof binancePro;
    dbenny: typeof dbennyPro;
    hyperliquid: typeof hyperliquidPro;
    okcoin: typeof okcoinPro;
    okx: typeof okxPro;
};
declare const ccxt: {
    version: string;
    Exchange: typeof Exchange;
    Precise: typeof Precise;
    exchanges: string[];
    pro: {
        binance: typeof binancePro;
        dbenny: typeof dbennyPro;
        hyperliquid: typeof hyperliquidPro;
        okcoin: typeof okcoinPro;
        okx: typeof okxPro;
    };
} & {
    binance: typeof binance;
    dbenny: typeof dbenny;
    hyperliquid: typeof hyperliquid;
    okcoin: typeof okcoin;
    okx: typeof okx;
} & typeof functions & typeof errors;
export { version, Exchange, exchanges, pro, Precise, functions, errors, BaseError, ExchangeError, AuthenticationError, PermissionDenied, AccountNotEnabled, AccountSuspended, ArgumentsRequired, BadRequest, BadSymbol, OperationRejected, NoChange, MarginModeAlreadySet, MarketClosed, ManualInteractionNeeded, InsufficientFunds, InvalidAddress, AddressPending, InvalidOrder, OrderNotFound, OrderNotCached, OrderImmediatelyFillable, OrderNotFillable, DuplicateOrderId, ContractUnavailable, NotSupported, InvalidProxySettings, ExchangeClosedByUser, OperationFailed, NetworkError, DDoSProtection, RateLimitExceeded, ExchangeNotAvailable, OnMaintenance, InvalidNonce, ChecksumError, RequestTimeout, BadResponse, NullResponse, CancelPending, UnsubscribeError, Int, int, Str, Strings, Num, Bool, IndexType, OrderSide, OrderType, MarketType, SubType, Dict, NullableDict, List, NullableList, Fee, OHLCV, OHLCVC, implicitReturnType, Market, Currency, Dictionary, MinMax, FeeInterface, TradingFeeInterface, MarketMarginModes, MarketInterface, Trade, Order, OrderBook, Ticker, Transaction, Tickers, CurrencyInterface, Balance, BalanceAccount, Account, PartialBalances, Balances, DepositAddress, WithdrawalResponse, DepositAddressResponse, FundingRate, FundingRates, Position, BorrowInterest, LeverageTier, LedgerEntry, DepositWithdrawFeeNetwork, DepositWithdrawFee, TransferEntry, CrossBorrowRate, IsolatedBorrowRate, FundingRateHistory, OpenInterest, OpenInterests, Liquidation, OrderRequest, CancellationRequest, FundingHistory, MarginMode, Greeks, Conversion, Option, LastPrice, Leverage, LongShortRatio, MarginModification, Leverages, LastPrices, Currencies, TradingFees, MarginModes, OptionChain, IsolatedBorrowRates, CrossBorrowRates, LeverageTiers, binance, dbenny, hyperliquid, okcoin, okx, };
export default ccxt;
