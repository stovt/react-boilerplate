import reducerRegistry from 'store/reducerRegistry';
import withSaga from 'shared/HOC/withSaga';
import sagas from './KitchenSink.sagas';
import KitchenSink from './KitchenSink.component';
import reducer from './KitchenSink.reducer';

reducerRegistry.register('kitchenSink', reducer);

export default withSaga(sagas)(KitchenSink);
