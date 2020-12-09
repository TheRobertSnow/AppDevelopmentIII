import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider, connect } from 'react-redux';
import StackNavigator from './src/routes';
import reducers from './src/reducers';
import { fetchToken, fetchTheaters, fetchMovies } from './src/actions/fetchActions';

class SubApp extends React.Component {
  componentDidMount() {
    this.props.fetchToken();
  }

  componentDidUpdate() {
    this.props.fetchTheaters(this.props.token);
    this.props.fetchMovies(this.props.token);
  }

  render() {
    return (
      <StackNavigator />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.tokenReducer,
  };
};


const ConnectedSubApp = connect(mapStateToProps, { fetchToken, fetchTheaters, fetchMovies })(SubApp);

export default function App() {
  return (
    <Provider store={createStore(reducers, applyMiddleware(thunk))}>
      <ConnectedSubApp />
    </Provider>
  );
}
