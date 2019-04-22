
import { CLIENT_CONNECT_SUCCESS, CLIENT_CONNECT_FAIL } from './types'

//connect mqtt client
export const clientConnected = (payload) => (dispatch, getState) => {
    if (payload == true) {
        dispatch({
            type: CLIENT_CONNECT_SUCCESS
        });
    }
    else if (payload == false) {
        dispatch({
            type: CLIENT_CONNECT_FAIL
        });
    }

}

//disconnect event