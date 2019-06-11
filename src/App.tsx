import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import { FormattedMessage } from 'react-intl';
import { ROUTES } from 'shared/constants';
import Loading from 'shared/components/Loading';

const HomePage = React.lazy(() => import(/* webpackChunkName: 'home' */ './pages/Home'));
const KitchenSinkPage = React.lazy(() =>
  import(/* webpackChunkName: 'kitchenSink' */ './pages/KitchenSink')
);

const App: React.FC = () => {
  return (
    <Grid>
      <Row>
        <Col xs={12}>
          <h1>
            <FormattedMessage id='app.title' />
          </h1>
        </Col>
        <Col xs={12}>
          <Link to={ROUTES.HOME}>
            <FormattedMessage id='app.nav.home' />
          </Link>{' '}
          <Link to={ROUTES.KITCHEN_SINK}>
            <FormattedMessage id='app.nav.kitchen-sink' />
          </Link>
        </Col>
      </Row>
      <React.Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path={ROUTES.HOME} component={HomePage} />
          <Route path={ROUTES.KITCHEN_SINK} component={KitchenSinkPage} />
        </Switch>
      </React.Suspense>
    </Grid>
  );
};

export default App;
