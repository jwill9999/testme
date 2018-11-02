import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Route, Switch } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from '../src/components/Home/Home';
import Page from '../src/components/Page/Page';
import NotFound from './components/404/NotFound';
import App from './components/App/App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(
  <Router>
    <App >
      <Switch>
        <Route exact={true} path='/' component={Home} />
        <Route path='/page' component={Page} />
        <Route component={NotFound} />>
      </Switch>
    </App>
  </Router>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
