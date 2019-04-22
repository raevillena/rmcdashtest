import {
    RECEIVED_CONDENSER,
    RECEIVED_HEATER,
    RECEIVED_KETTLE,
    RECEIVED_PROGRESS,
    RECEIVED_PUMP,
} from '../actions/types'

//connect mqtt client
export const updateData = (type, data) => (dispatch) => {
    dispatch({
        type: type,
        payload: data
    });
}

//disconnect event