import { GET_STORES, ADD_STORE, DELETE_STORE } from '../actions/types.js'

const initialState = {
    stores: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_STORES:
            return {
                ...state,
                stores: action.payload
            }
        case DELETE_STORE:
            return {
                ...state,
                stores: state.stores.filter(store => store.messageID !== action.payload)
            }
        case ADD_STORE:
            return {
                ...state,
                stores: [...state.stores, action.payload]
            }
        default:
            return state;
    }
}