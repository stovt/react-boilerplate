import {
  INCREMENT,
  INCREMENTED,
  DECREMENT,
  DECREMENTED
} from 'pages/KitchenSink/KitchenSink.actions';

export type Counter = number;
export type Processing = boolean;

export interface KitchenSink {
  counter: Counter;
  processing: Processing;
}

export interface KitchenSinkState {
  kitchenSink: KitchenSink;
}

export type KitchenSinkAction =
  | { type: typeof INCREMENT }
  | { type: typeof INCREMENTED }
  | { type: typeof DECREMENT }
  | { type: typeof DECREMENTED };
