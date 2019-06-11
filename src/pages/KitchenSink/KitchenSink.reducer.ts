import { combineReducers } from 'redux';
import { Counter, Processing } from 'shared/types/kitchenSink';
import { Action } from 'shared/types';
import { INCREMENTED, DECREMENTED, DECREMENT, INCREMENT } from './KitchenSink.actions';

const counter = (state: Counter = 0, action: Action): Counter => {
  switch (action.type) {
    case INCREMENTED:
      return state + 1;
    case DECREMENTED:
      return state - 1;
    default:
      return state;
  }
};

const processing = (state: Processing = false, action: Action): Processing => {
  switch (action.type) {
    case INCREMENTED:
    case DECREMENTED:
      return false;
    case INCREMENT:
    case DECREMENT:
      return true;
    default:
      return state;
  }
};

export default combineReducers({
  counter,
  processing
});
