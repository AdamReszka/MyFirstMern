import { ADD_POST, EDIT_POST, ADD_POSTS, DELETE_POST, POST_THUMB_UP, POST_THUMB_DOWN } from './PostActions';

// Initial State
const initialState = { data: [] };

const PostReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST :
      return {
        data: [action.post, ...state.data],
      };

    case EDIT_POST :
      return {
        data: state.data.map(post => { return post.cuid === action.cuid ? Object.assign({}, post, action.post) : post }),
      };

    case ADD_POSTS :
      return {
        data: action.posts,
      };

    case DELETE_POST :
      return {
        data: state.data.filter(post => post.cuid !== action.cuid),
      };

    case POST_THUMB_UP :
      return {
        data: state.data.map(post => { return post.cuid === action.cuid ? Object.assign({}, post, {voteCount: post.voteCount+1}) : post }),
      };

    case POST_THUMB_DOWN :
      return {
        data: state.data.map(post => { return post.cuid === action.cuid ? Object.assign({}, post, {voteCount: post.voteCount-1}) : post }),
      };

    default:
      return state;
  }
};

/* Selectors */

// Get all posts
export const getPosts = state => state.posts.data;

// Get post by cuid
export const getPost = (state, cuid) => state.posts.data.filter(post => post.cuid === cuid)[0];

// Export Reducer
export default PostReducer;
