import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST, POST_CREATED } from '../actions';

export default function postsReducer(state = {}, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return _.mapKeys(action.payload, 'id');
    case FETCH_POST:
      return {
        [action.payload.id]: action.payload
      };
    case POST_CREATED:
      return Object.assign({}, state, { [action.payload.id]: action.payload });
    default:
      return state;
  }
}
