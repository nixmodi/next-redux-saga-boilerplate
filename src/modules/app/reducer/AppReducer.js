import * as types from '../actions/appTypes';

const initialState = {
  posts: [],
  isLoading: false,
  loader: {
    fetch: false
  }
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.APPEND_POST:
      return {
        ...state,
        posts: [...state.posts, action.post]
      };

    case types.FETCH_POSTS:
      return {
        ...state,
        loader: {
          ...state.loader,
          fetch: true
        }
      };

    case types.SET_POSTS:
      return {
        ...state,
        posts: action.data,
        loader: {
          ...state.loader,
          fetch: false
        }
      };

    default:
      return state;
  }
};
export default AppReducer;
