import { KitchenSinkAction } from 'shared/types/kitchenSink';

export const INCREMENT = `kitchenSink/INCREMENT`;
export const INCREMENTED = `kitchenSink/INCREMENTED`;

export const DECREMENT = `kitchenSink/DECREMENT`;
export const DECREMENTED = `kitchenSink/DECREMENTED`;

export const increment = (): KitchenSinkAction => ({ type: INCREMENT });
export const incremented = (): KitchenSinkAction => ({ type: INCREMENTED });

export const decrement = (): KitchenSinkAction => ({ type: DECREMENT });
export const decremented = (): KitchenSinkAction => ({ type: DECREMENTED });
