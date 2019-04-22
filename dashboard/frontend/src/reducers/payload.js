import {
    RECEIVED_CONDENSER,
    RECEIVED_HEATER,
    RECEIVED_KETTLE,
    RECEIVED_PROGRESS,
    RECEIVED_PUMP,
} from '../actions/types'

const initialState = {
    heater: 0.00,
    pump: 0.00,
    condenser: 0.00,
    progress: 0.00,
    kettle: 0.00,
}

export default function (state = initialState, action) {
    switch (action.type) {
        case RECEIVED_CONDENSER:
            return {
                ...state,
                condenser: action.payload
            }
        case RECEIVED_KETTLE:
            return {
                ...state,
                kettle: action.payload
            }
        case RECEIVED_HEATER:
            return {
                ...state,
                heater: action.payload
            }
        case RECEIVED_PUMP:
            return {
                ...state,
                pump: action.payload
            }
        case RECEIVED_PROGRESS:
            return {
                ...state,
                progress: action.payload
            }
        default:
            return state
    }
}