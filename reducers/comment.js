const initialState = {
  loading: true,
  cache: false,
  data: [],
  meta: {},
  userComments:[],
};
const Comment = (state = initialState, action) => {
  switch (action.type) {
    case "SET_COMMENT":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default Comment;
