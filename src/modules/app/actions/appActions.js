import * as appTypes from './appTypes';

export const fetchPosts = () => ({ type: appTypes.FETCH_POSTS });
export const cretePost = (data, resolve, reject) => ({
  type: appTypes.CREATE_POST,
  data,
  resolve,
  reject
});
export const setPosts = data => ({ type: appTypes.SET_POSTS, data });
export const appendPost = post => ({ type: appTypes.APPEND_POST, post });
