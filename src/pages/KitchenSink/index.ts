import reducerRegistry from 'store/reducerRegistry';
import KitchenSink from './KitchenSink.component';
import reducer from './KitchenSink.reducer';

reducerRegistry.register('kitchenSink', reducer);

export default KitchenSink;
