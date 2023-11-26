const initialState = {
  numOfOrange: 10,
};

export default function orangeReducer(state = initialState, action) {
  switch (action.type) {
    case "BUY_ORANGE":
      return {
        ...state,
        numOfOrange: state.numOfOrange - action.payload,
      };
    default:
      return state;
  }
}
