import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { ROUTES } from 'shared/constants';
import Loading from 'shared/components/Loading';

const HomePage = React.lazy(() => import(/* webpackChunkName: 'home' */ './pages/Home'));
const KitchenSinkPage = React.lazy(() =>
  import(/* webpackChunkName: 'kitchenSink' */ './pages/KitchenSink')
);

const App: React.FC = () => {
  return (
    <div>
      <header>
        <h1>Welcome to React Boilerplate!</h1>
      </header>
      <div>
        <Link to={ROUTES.HOME}>Home</Link> <Link to={ROUTES.KITCHEN_SINK}>Kitchen Sink</Link>
      </div>
      <React.Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path={ROUTES.HOME} component={HomePage} />
          <Route path={ROUTES.KITCHEN_SINK} component={KitchenSinkPage} />
        </Switch>
      </React.Suspense>
    </div>
  );
};

export default App;
