import {
    GET_CHART_KETTLE,
    DELETE_CHART_KETTLE,
    ADD_CHART_KETTLE,
    UPDATE_CHART_KETTLE,
    LOGOUT_SUCCESS,
    RECEIVED_KETTLE,
} from '../actions/types.js'

const initialState = {
    kettleData: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_CHART_KETTLE:
            return {
                ...state,
                kettleData: JSON.parse(action.payload.message)
            }
        case DELETE_CHART_KETTLE:
            return {
                ...state,
                kettleData: state.kettleData.filter(data => data.id !== action.payload)
            }
        case ADD_CHART_KETTLE:
            return {
                ...state,
                kettleData: action.payload
            }
        case UPDATE_CHART_KETTLE:
            return {
                ...state,
                kettleData: action.payload
            }
        case LOGOUT_SUCCESS:
            return {
                ...state,
                kettleData: []
            }
        case RECEIVED_KETTLE:
            return {
                ...state,
                kettleData: [...state.kettleData, action.payload]
            }
        default:
            return state;
    }
}