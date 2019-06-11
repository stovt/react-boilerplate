import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { ROUTES } from 'shared/constants';
import Loading from 'shared/components/Loading';

const HomePage = React.lazy(() => import(/* webpackChunkName: 'home' */ './pages/Home'));
const KitchenSinkPage = React.lazy(() =>
  import(/* webpackChunkName: 'kitchenSink' */ './pages/KitchenSink')
);

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1
  },
  content: {
    display: 'block',
    flexGrow: 1,
    width: 'auto',
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    [theme.breakpoints.up(theme.breakpoints.values.lg + 48)]: {
      width: theme.breakpoints.values.lg,
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    padding: `${theme.spacing(3)} 0`
  }
}));

const App: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <header>
          <h1>
            <FormattedMessage id='app.title' />
          </h1>
        </header>
        <div>
          <Link to={ROUTES.HOME}>
            <FormattedMessage id='app.nav.home' />
          </Link>{' '}
          <Link to={ROUTES.KITCHEN_SINK}>
            <FormattedMessage id='app.nav.kitchen-sink' />
          </Link>
        </div>
        <React.Suspense fallback={<Loading />}>
          <Switch>
            <Route exact path={ROUTES.HOME} component={HomePage} />
            <Route path={ROUTES.KITCHEN_SINK} component={KitchenSinkPage} />
          </Switch>
        </React.Suspense>
      </div>
    </div>
  );
};

export default App;
