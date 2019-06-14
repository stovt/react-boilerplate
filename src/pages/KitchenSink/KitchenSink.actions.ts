import { KitchenSinkAction } from 'shared/types/kitchenSink';
import { useDispatch } from 'react-redux';

export const INCREMENT = `kitchenSink/INCREMENT`;
export const INCREMENTED = `kitchenSink/INCREMENTED`;

export const DECREMENT = `kitchenSink/DECREMENT`;
export const DECREMENTED = `kitchenSink/DECREMENTED`;

export const increment = (): KitchenSinkAction => ({ type: INCREMENT });
export const incremented = (): KitchenSinkAction => ({ type: INCREMENTED });

export const decrement = (): KitchenSinkAction => ({ type: DECREMENT });
export const decremented = (): KitchenSinkAction => ({ type: DECREMENTED });

export const useIncrementDispatch = () => {
  const dispatch = useDispatch();
  return () => dispatch(increment());
};
export const useIncrementedDispatch = () => {
  const dispatch = useDispatch();
  return () => dispatch(incremented());
};

export const useDecrementDispatch = () => {
  const dispatch = useDispatch();
  return () => dispatch(decrement());
};
export const useDecrementedDispatch = () => {
  const dispatch = useDispatch();
  return () => dispatch(decremented());
};
