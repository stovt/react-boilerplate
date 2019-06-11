import * as React from 'react';
import { Row, Col } from 'react-styled-flexboxgrid';
import { FormattedMessage } from 'react-intl';
import { Counter, Processing, KitchenSinkAction } from 'shared/types/kitchenSink';
import StyledButton from './Button';

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
    <Row>
      <Col xs={12}>
        <h2>
          <FormattedMessage id='pages.kitchen-sink.title' />
        </h2>
        <h3>{counter}</h3>
        <StyledButton onClick={handleIncrement} disabled={processing} type='button'>
          <FormattedMessage id='actions.increment' />
        </StyledButton>
        <StyledButton onClick={handleDecrement} disabled={processing} type='button'>
          <FormattedMessage id='actions.decrement' />
        </StyledButton>
      </Col>
    </Row>
  );
};

export default KitchenSink;
