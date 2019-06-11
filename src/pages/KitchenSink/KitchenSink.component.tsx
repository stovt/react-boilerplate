import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { Counter, Processing, KitchenSinkAction } from 'shared/types/kitchenSink';

interface KitchenSinkProps {
  counter: Counter;
  processing: Processing;
  increment: () => KitchenSinkAction;
  decrement: () => KitchenSinkAction;
}

const KitchenSink: React.FC<KitchenSinkProps> = ({ counter, processing, increment, decrement }) => {
  const handleIncrement = React.useCallback(() => increment(), [increment]);
  const handleDecrement = React.useCallback(() => decrement(), [decrement]);

  return (
    <div>
      <h2>
        <FormattedMessage id='pages.kitchen-sink.title' />
      </h2>
      <h3>{counter}</h3>
      <button onClick={handleIncrement} disabled={processing} type='button'>
        <FormattedMessage id='actions.increment' />
      </button>
      <button onClick={handleDecrement} disabled={processing} type='button'>
        <FormattedMessage id='actions.decrement' />
      </button>
    </div>
  );
};

export default KitchenSink;
