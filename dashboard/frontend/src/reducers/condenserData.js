import {
    GET_CHART_CONDENSER,
    DELETE_CHART_CONDENSER,
    ADD_CHART_CONDENSER,
    UPDATE_CHART_CONDENSER,
    LOGOUT_SUCCESS,
    RECEIVED_CONDENSER
} from '../actions/types.js'

const initialState = {
    condenserData: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_CHART_CONDENSER:
            return {
                ...state,
                condenserData: JSON.parse(action.payload.message)
            }
        case DELETE_CHART_CONDENSER:
            return {
                ...state,
                condenserData: state.condenserData.filter(data => data.id !== action.payload)
            }
        case ADD_CHART_CONDENSER:
            return {
                ...state,
                condenserData: action.payload
            }
        case UPDATE_CHART_CONDENSER:
            return {
                ...state,
                condenserData: action.payload
            }
        case LOGOUT_SUCCESS:
            return {
                ...state,
                condenserData: []
            }
        case RECEIVED_CONDENSER:
            return {
                ...state,
                condenserData: [...state.condenserData, action.payload]
            }
        default:
            return state;
    }
}