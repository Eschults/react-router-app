// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import logger from 'redux-logger';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// internal modules
import postsReducer from './reducers/posts_reducer';
import PostsIndex from './containers/posts_index';
import Post from './containers/post';
import PostForm from './containers/post_form';
import '../assets/stylesheets/application.scss';

// State and reducers
const reducers = combineReducers({
  posts: postsReducer
});

const middlewares = applyMiddleware(reduxPromise, logger);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, {}, middlewares)}>
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={PostsIndex} />
          <Route path="/posts/new" exact component={PostForm} />
          <Route path="/posts/:id" component={Post} />
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.querySelector('.container')
);
