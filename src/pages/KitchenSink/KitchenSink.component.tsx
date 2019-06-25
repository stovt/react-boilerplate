import * as React from 'react';
import { Row, Col } from 'react-styled-flexboxgrid';
import { FormattedMessage } from 'react-intl';
import useInjectSaga from 'shared/hooks/useInjectSaga';
import StyledButton from './Button';
import sagas from './KitchenSink.sagas';
import { useIncrementDispatch, useDecrementDispatch } from './KitchenSink.actions';
import { useCounterSelector, useProcessingSelector } from './KitchenSink.selectors';

const KitchenSink: React.FC = () => {
  useInjectSaga(sagas);

  const increment = useIncrementDispatch();
  const decrement = useDecrementDispatch();
  const counter = useCounterSelector();
  const processing = useProcessingSelector();

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
