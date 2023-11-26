// 1. create functon reducer(state = initialState , action)
// 2. write initialState


const initialState = {
    numOfApple: 10,
}


export default function appleReducer(state = initialState, action) {
    switch (action.type) {
        case "BUY_APPLE": {
            return {
                ...state,
                numOfApple: state.numOfApple - action.payload,
            }
        }
        default:
            return state;
    }
}
