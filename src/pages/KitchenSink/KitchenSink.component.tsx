import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { colors } from 'styles';
import useInjectSaga from 'shared/hooks/useInjectSaga';
import sagas from './KitchenSink.sagas';
import { useIncrementDispatch, useDecrementDispatch } from './KitchenSink.actions';
import { useCounterSelector, useProcessingSelector } from './KitchenSink.selectors';

const useStyles = makeStyles(theme => ({
  title: {
    marginTop: theme.spacing(1)
  },
  counter: {
    color: colors.secondary.whippet,
    margin: `${theme.spacing(1)} 0`
  },
  button: {
    '& + &': {
      marginLeft: theme.spacing(1)
    }
  }
}));

const KitchenSink: React.FC = () => {
  useInjectSaga(sagas);

  const increment = useIncrementDispatch();
  const decrement = useDecrementDispatch();
  const counter = useCounterSelector();
  const processing = useProcessingSelector();

  const handleIncrement = React.useCallback(() => increment(), [increment]);
  const handleDecrement = React.useCallback(() => decrement(), [decrement]);

  const classes = useStyles();

  return (
    <div>
      <Typography component='h2' variant='h4' className={classes.title}>
        <FormattedMessage id='pages.kitchen-sink.title' />
      </Typography>
      <Typography component='h3' variant='h5' className={classes.counter}>
        {counter}
      </Typography>
      <Button
        variant='contained'
        color='primary'
        onClick={handleIncrement}
        disabled={processing}
        className={classes.button}
      >
        <FormattedMessage id='actions.increment' />
      </Button>
      <Button
        variant='contained'
        color='primary'
        onClick={handleDecrement}
        disabled={processing}
        className={classes.button}
      >
        <FormattedMessage id='actions.decrement' />
      </Button>
    </div>
  );
};

export default KitchenSink;
