import * as React from 'react';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from '../../reducers';
import saga from '../../sagas';
import createSagaMiddleware from 'redux-saga';
import PlaylistPage from '../PlaylistPage';
import { Router, Route } from 'react-router-dom';
import history from './History';

const style = require('./style.scss');

const reduxDevTool = (window as any)['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'];
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = reduxDevTool ? reduxDevTool({}) : compose;
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));
const store = createStore(reducer, enhancer);
sagaMiddleware.run(saga);

class App extends React.Component<any, any> {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <div>
            <Route path="/" exact render={() => (
              <div>Home</div>
            )} />
            <Route path="/:playlistID" render={({ match }) => {
              return <PlaylistPage id={match.params.playlistID} />;
            }} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
