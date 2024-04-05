const initialState = {
  items: []
};

const Address = (state = initialState, action) => {

  switch (action.type) {
    case "SET_ADDRESS":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
export default Address;
