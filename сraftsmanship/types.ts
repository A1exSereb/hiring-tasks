export interface OrderBookI {
  exchange: string;
  symbol: string;
  timestamp: string;
  is_snapshot: string;
  side: string;
  price: string;
  amount: string;
}

export interface OrderBookMapI {
  bid: OrderBookI[];
  ask: OrderBookI[];
}

export interface MapI {
  books: OrderBookI[];
  indexes: Map<string, string>;
}

export enum Sides {
  ASK = "ask",
  BID = "bid",
}

// exchange, symbol, timestamp, local_timestamp, is_snapshot, side, price, amount;
