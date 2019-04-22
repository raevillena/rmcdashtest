import { combineReducers } from 'redux';
import errors from './errors'
import messages from './messages'
import auth from './auth'
import stores from './stores'
import condenserData from './condenserData'
import kettleData from './kettleData'
import client from './client'
import payload from './payload'

export default combineReducers({
    client,
    stores,
    condenserData,
    kettleData,
    errors,
    messages,
    auth,
    payload
});
