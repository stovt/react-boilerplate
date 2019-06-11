import { connect } from 'react-redux';
import { State, Dispatch } from 'shared/types';
import { decrement, increment } from './KitchenSink.actions';
import { counterSelector, processingSelector } from './KitchenSink.selectors';
import KitchenSinkComponent from './KitchenSink.component';

const mapStateToProps = (state: State) => ({
  counter: counterSelector(state),
  processing: processingSelector(state)
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(KitchenSinkComponent);
