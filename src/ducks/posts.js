import Immutable from 'immutable';
import {createSelector} from 'reselect';
import {formatTimeStamp} from "./formatUtils";
import {DateTime} from 'luxon';

const SUBMIT_POST = 'microblog/posts/SUBMIT';

export default (state = Immutable.fromJS({}), action) => {
  const { type, message } = action;

  switch (type) {
    case SUBMIT_POST:
      return state.push(Immutable.fromJS({
        id: Math.random().toString().slice(2,11),
        user: 4,
        message,
        ts: DateTime.local().valueOf() / 1000 
      }));
    default:
      return state;
  }
};

const getPosts = (state) => state.get('posts');
const getUsers = (state) => state.get('users');

const getUser = (posts, users, id) => {
    const userId = posts.filter(post => post.get('id') === id).getIn([0, 'user']);
    return users.get(userId.toString());
}

export const getPostIds = createSelector([getPosts], (posts) => {
  const replies = [];
  const idArray = posts.reduce((acc, post) => {
    if(post.get('reply_to')) {
      replies.push(post);
    } else {
      acc.push(post.get('id'))
    }
    return acc;
  }, []);

  return replies.reduce((acc, reply) => {
    const index = idArray.indexOf(reply.get('reply_to'));
    acc.splice(index, 0, reply.get('id'));
    return acc;
  }, idArray).reverse();
});

export const makeProfileImageSelector = (id) =>
  createSelector([getPosts, getUsers], (posts, users) => {
    const user = getUser(posts, users, id);
    return `./images/${user.get('username')}.jpg`;
  });

export const makeReplySelector = (id) =>
  createSelector([getPosts], (posts) =>
    posts.filter(post => post.get('id') === id).getIn([0, 'reply_to']));

export const makeUserSelector = (id) =>
  createSelector([getPosts, getUsers], (posts, users) => getUser(posts, users, id));

export const makeTimeStampSelector = (id) => 
  createSelector([getPosts], posts =>
    formatTimeStamp(posts.filter(post => post.get('id') === id).getIn([0, 'ts'])));

export const makeMessageSelector = (id) => 
  createSelector([getPosts], posts =>
    posts.filter(post => post.get('id') === id).getIn([0, 'message']));

export const makeCurrentUserSelector = (id) =>
  createSelector([getPosts, getUsers], (posts, users) => getUser(posts, users, id).get('currentUser'));

export const submitPost = (message) => ({
  type: SUBMIT_POST,
  message
});