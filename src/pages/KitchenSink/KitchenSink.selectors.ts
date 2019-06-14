import { useSelector } from 'react-redux';
import { State } from 'shared/types';

export const useCounterSelector = () => useSelector((state: State) => state.kitchenSink.counter);
export const useProcessingSelector = () =>
  useSelector((state: State) => state.kitchenSink.processing);
