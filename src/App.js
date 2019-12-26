import React from 'react';
import {
  HashRouter,
  Route,
  Switch
} from 'react-router-dom';
import Loader from 'react-loader-spinner';

const loading = () => {
  return (
    <div className="loader">
      <Loader type="Triangle" color="#F25209" height={80} width={80} />
    </div>
  )
}

const LandingPage = React.lazy(()=>import('./pages/LandingPage'));
const ContentPage = React.lazy(()=>import('./pages/ContentPage'));

const App = () => {
  return (
    <HashRouter>
      <React.Suspense fallback={loading()}>
        <Switch>
          <Route
            path="/"
            exact
            name="Landing Page"
            render={props => <LandingPage {...props} />}
          />
          <Route
            path="/content"
            exact
            name="Content Page"
            render={props => <ContentPage {...props} />}
          />
        </Switch>
      </React.Suspense>
    </HashRouter>
  )
}

export default App;
