const initialState = {
  products: [],
  features:[],
  meta: {}
};
const Compare = (state = initialState, action) => {
  switch (action.type) {
    case "SET_COMPARE":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
export default Compare;
