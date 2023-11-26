// 1. create functon reducer(state = initialState , action)
// 2. write initialState


const initialState = {
    numOfBanana: 10,
}


export default function bananaReducer(state = initialState, action) {
    switch (action.type) {
        case "BUY_BANANA": {
            return {
                ...state,
                numOfBanana: state.numOfBanana - action.payload,
            }
        }
        default:
            return state;
    }
}