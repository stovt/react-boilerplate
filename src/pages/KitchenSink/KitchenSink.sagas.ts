import { all, delay, put, takeEvery } from 'redux-saga/effects';
import { decremented, INCREMENT, incremented, DECREMENT } from './KitchenSink.actions';

function* incrementor() {
  yield delay(300);
  yield put(incremented());
}

function* decrementor() {
  yield delay(300);
  yield put(decremented());
}

export default function*() {
  yield all([takeEvery(INCREMENT, incrementor), takeEvery(DECREMENT, decrementor)]);
}
