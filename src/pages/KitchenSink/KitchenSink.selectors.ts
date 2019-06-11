import { State } from 'shared/types';

export const counterSelector = (state: State) => state.kitchenSink.counter;
export const processingSelector = (state: State) => state.kitchenSink.processing;
