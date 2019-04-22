import axios from 'axios'
import { createMessage, returnErrors } from './messages'

import { GET_STORES, ADD_STORE, DELETE_STORE, UPDATE_CHART_CONDENSER, GET_CHART_CONDENSER, UPDATE_STORE, GET_STORED, UPDATE_CHART_KETTLE, GET_CHART_KETTLE } from './types'
import { tokenConfig } from './auth'

/*
//get leads
export const getLeads = () => (dispatch, getState) => {
    axios
        .get('/api/leads/', tokenConfig(getState))
        .then(res => {
            dispatch({
                type: GET_LEADS,
                payload: res.data
            });
        })
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
}



//delete leads
export const deleteLead = (id) => (dispatch, getState) => {
    axios
        .delete(`/api/leads/${id}/`, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({ deleteLead: 'Lead Deleted' }))
            dispatch({
                type: DELETE_LEAD,
                payload: id
            });
        })
        .catch(err => console.log(err))
}



//add lead
export const addLead = (lead) => (dispatch, getState) => {
    axios
        .post('/api/leads/', lead, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({ addLead: 'Lead Added' }))
            dispatch({
                type: ADD_LEAD,
                payload: res.data
            });
        })
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
}

*/
//get stores
export const getStores = () => (dispatch, getState) => {
    axios
        .get('/api/stores/', tokenConfig(getState))
        .then(res => {
            dispatch({
                type: GET_STORES,
                payload: res.data
            });
        })
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
}

//delete store
export const deleteStore = (id) => (dispatch, getState) => {
    axios
        .delete(`/api/stores/${id}/`, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({ deleteLead: 'Store Deleted' }))
            dispatch({
                type: DELETE_STORE,
                payload: id
            });
        })
        .catch(err => console.log(err))
}

//add store
export const addStore = (store) => (dispatch, getState) => {
    console.log(store)
    axios
        .post('/api/stores/', store, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({ addLead: 'Store Added' }))
            dispatch({
                type: ADD_STORE,
                payload: res.data
            });
        })
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
}

//add store in array form one request
export const addStoreData = (store) => (dispatch, getState) => {
    console.log(store)
    axios
        .post('/api/stores/', store, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({ addLead: 'Store Added' }))
            dispatch({
                type: ADD_STORE,
                payload: res.data
            });
        })
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
}

//update condenser data
export const updateCondenserData = (id, store) => (dispatch, getState) => {
    axios
        .put(`/api/stores/${id}/`, store, tokenConfig(getState))
        .then(res => {
            dispatch({
                type: UPDATE_CHART_CONDENSER,
                payload: res.data
            });
        })
        .catch(err => console.log(err))
}

//get condenser data from database
export const getCondenserData = (id) => (dispatch, getState) => {
    axios
        .get(`/api/stores/${id}`, tokenConfig(getState))
        .then(res => {
            dispatch({
                type: GET_CHART_CONDENSER,
                payload: res.data
            });
        })
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
}

//update kettle data
export const updateKettleData = (id, store) => (dispatch, getState) => {
    axios
        .put(`/api/stores/${id}/`, store, tokenConfig(getState))
        .then(res => {
            dispatch({
                type: UPDATE_CHART_KETTLE,
                payload: res.data
            });
        })
        .catch(err => console.log(err))
}

//get kettle data from database
export const getKettleData = (id) => (dispatch, getState) => {
    axios
        .get(`/api/stores/${id}`, tokenConfig(getState))
        .then(res => {
            dispatch({
                type: GET_CHART_KETTLE,
                payload: res.data
            });
        })
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
}