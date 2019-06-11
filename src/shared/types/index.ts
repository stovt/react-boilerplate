import { Store as ReduxStore, Dispatch as ReduxDispatch } from 'redux';
import { RouterRootState, RouterAction } from 'connected-react-router';
import { BreakpointsState, BreakpointsAction } from './breakpoints';
import { KitchenSinkState, KitchenSinkAction } from './kitchenSink';

export interface ReduxInitAction {
  type: '@@INIT';
}

export type State = RouterRootState & BreakpointsState & KitchenSinkState;
export type Action = ReduxInitAction | RouterAction | BreakpointsAction | KitchenSinkAction;
export type Store = ReduxStore<State, Action>;
export type Dispatch = ReduxDispatch<Action>;
