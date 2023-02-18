import api from 'src/api/index';

export const fetchPostsApi = () => {
  return api('/posts', null, 'get');
};
