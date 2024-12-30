import Exchange from './abstract/dbenny.js';
import type { Balances, CancellationRequest, Currencies, Dict, FundingRate, Int, int, LedgerEntry, Market, Num, OHLCV, Order, OrderBook, OrderRequest, OrderSide, OrderType, Str, Strings, Ticker, Tickers, Trade, TradingFeeInterface, Transaction, TransferEntry } from './base/types.js';
/**
 * @class dbenny
 * @augments Exchange
 */
export default class dbenny extends Exchange {
    describe(): any;
    setSandboxMode(enabled: any): void;
    fetchCurrencies(params?: {}): Promise<Currencies>;
    fetchMarkets(params?: {}): Promise<Market[]>;
    /**
     * @method
     * @name calculatePricePrecision
     * @description Helper function to calculate the Hyperliquid DECIMAL_PLACES price precision
     * @param {float} price the price to use in the calculation
     * @param {int} amountPrecision the amountPrecision to use in the calculation
     * @param {int} maxDecimals the maxDecimals to use in the calculation
     * @returns {int} The calculated price precision
     */
    calculatePricePrecision(price: number, amountPrecision: number, maxDecimals: number): number;
    parseMarket(market: Dict): Market;
    fetchBalance(params?: {}): Promise<Balances>;
    fetchOrderBook(symbol: string, limit?: Int, params?: {}): Promise<OrderBook>;
    fetchTickers(symbols?: Strings, params?: {}): Promise<Tickers>;
    parseFundingRate(info: any, market?: Market): FundingRate;
    parseTicker(ticker: Dict, market?: Market): Ticker;
    fetchOHLCV(symbol: string, timeframe?: string, since?: Int, limit?: Int, params?: {}): Promise<OHLCV[]>;
    parseOHLCV(ohlcv: any, market?: Market): OHLCV;
    fetchTrades(symbol?: Str, since?: Int, limit?: Int, params?: {}): Promise<Trade[]>;
    amountToPrecision(symbol: any, amount: any): string;
    priceToPrecision(symbol: string, price: any): string;
    hashMessage(message: any): string;
    signHash(hash: any, privateKey: any): {
        r: string;
        s: string;
        v: any;
    };
    signMessage(message: any, privateKey: any): {
        r: string;
        s: string;
        v: any;
    };
    constructPhantomAgent(hash: any, isTestnet?: boolean): {
        source: string;
        connectionId: any;
    };
    actionHash(action: any, vaultAddress: any, nonce: any): any;
    signL1Action(action: any, nonce: any, vaultAdress?: any): object;
    signUserSignedAction(messageTypes: any, message: any): {
        r: string;
        s: string;
        v: any;
    };
    buildUsdSendSig(message: any): {
        r: string;
        s: string;
        v: any;
    };
    buildUsdClassSendSig(message: any): {
        r: string;
        s: string;
        v: any;
    };
    buildWithdrawSig(message: any): {
        r: string;
        s: string;
        v: any;
    };
    createOrder(symbol: string, type: OrderType, side: OrderSide, amount: number, price?: Num, params?: {}): Promise<Order>;
    createOrders(orders: OrderRequest[], params?: {}): Promise<Order[]>;
    cancelOrder(id: string, symbol?: Str, params?: {}): Promise<{}>;
    cancelOrders(ids: string[], symbol?: Str, params?: {}): Promise<any[]>;
    cancelOrdersForSymbols(orders: CancellationRequest[], params?: {}): Promise<{}>;
    cancelAllOrdersAfter(timeout: Int, params?: {}): Promise<{}>;
    editOrder(id: string, symbol: string, type: string, side: string, amount?: Num, price?: Num, params?: {}): Promise<Order>;
    fetchOpenOrders(symbol?: Str, since?: Int, limit?: Int, params?: {}): Promise<Order[]>;
    fetchClosedOrders(symbol?: Str, since?: Int, limit?: Int, params?: {}): Promise<Order[]>;
    fetchCanceledOrders(symbol?: Str, since?: Int, limit?: Int, params?: {}): Promise<Order[]>;
    fetchCanceledAndClosedOrders(symbol?: Str, since?: Int, limit?: Int, params?: {}): Promise<Order[]>;
    fetchOrders(symbol?: Str, since?: Int, limit?: Int, params?: {}): Promise<Order[]>;
    fetchOrder(id: string, symbol?: Str, params?: {}): Promise<Order>;
    parseOrder(order: Dict, market?: Market): Order;
    parseOrderStatus(status: Str): string;
    parseOrderType(status: any): string;
    fetchMyTrades(symbol?: Str, since?: Int, limit?: Int, params?: {}): Promise<Trade[]>;
    transfer(code: string, amount: number, fromAccount: string, toAccount: string, params?: {}): Promise<TransferEntry>;
    withdraw(code: string, amount: number, address: string, tag?: any, params?: {}): Promise<Transaction>;
    fetchTradingFee(symbol: string, params?: {}): Promise<TradingFeeInterface>;
    fetchLedger(code?: Str, since?: Int, limit?: Int, params?: {}): Promise<LedgerEntry[]>;
    fetchDeposits(code?: Str, since?: Int, limit?: Int, params?: {}): Promise<Transaction[]>;
    fetchWithdrawals(code?: Str, since?: Int, limit?: Int, params?: {}): Promise<Transaction[]>;
    parseOpenInterest(interest: any, market?: Market): import("./base/types.js").OpenInterest;
    extractTypeFromDelta(data?: any[]): any[];
    formatVaultAddress(address?: Str): string;
    handlePublicAddress(methodName: string, params: Dict): any[];
    coinToMarketId(coin: Str): string;
    handleErrors(code: int, reason: string, url: string, method: string, headers: Dict, body: string, response: any, requestHeaders: any, requestBody: any): any;
    sign(path: any, api?: string, method?: string, params?: {}, headers?: any, body?: any): {
        url: string;
        method: string;
        body: any;
        headers: any;
    };
    calculateRateLimiterCost(api: any, method: any, path: any, params: any, config?: {}): any;
    parseCreateOrderArgs(symbol: string, type: OrderType, side: OrderSide, amount: number, price?: Num, params?: {}): {}[];
}
