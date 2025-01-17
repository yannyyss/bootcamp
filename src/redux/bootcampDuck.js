import axios from 'axios'
import { baseURL as url } from './baseURL'

const baseURL = url + '/bootcamps'

let initial = {
    currentWeek: {},
    object: {},
    array: [],
    current: {},
    loggedIn: false,
    student: {}
}
function reducer(state = initial, action) {
    switch (action.type) {
        case UPDATE_CURRENT_WEEK:
            return { ...state, currentWeek: { ...action.payload } }
        case UPDATE_CURRENT_WEEK_ERROR:
            return { ...state, fetching: false, error: action.payload }
        case UPDATE_CURRENT_WEEK_SUCCESS:
            return { ...state, currentWeek: { ...action.payload } }

        case DELETE_LEARNING_ERROR:
            return { ...state, fetching: false, error: action.payload }
        case DELETE_LEARNING_SUCCESS:
            return { ...state, fetching: false }
        case DELETE_LEARNING:
            return { ...state, fetching: true }

        case SAVE_LEARNING_ERROR:
            return { ...state, fetching: false, error: action.payload }
        case SAVE_LEARNING_SUCCESS:
            return { ...state, fetching: false }
        case SAVE_LEARNING:
            return { ...state, fetching: true }

        case GET_WEEK:
            return { ...state, fetching: true }
        case GET_WEEK_ERROR:
            return { ...state, fetching: false, error: action.payload }
        case GET_WEEK_SUCCESS:
            return { ...state, fetching: false, currentWeek: { ...action.payload } }

        case GET_SINGLE_BOOTCAMP:
            return { ...state, fetching: true }
        case GET_SINGLE_BOOTCAMP_ERROR:
            return { ...state, fetching: false, error: action.payload }
        case GET_SINGLE_BOOTCAMP_SUCCESS:
            return { ...state, fetching: false, object: { ...state.object, [action.payload._id]: { ...action.payload } } }

        case ADD_WEEK:
            return { ...state, fetching: true }
        case ADD_WEEK_ERROR:
            return { ...state, fetching: false, error: action.payload }
        case ADD_WEEK_SUCCESS:
            return { ...state, fetching: false, object: { ...state.object, [action.payload._id]: { ...action.payload } } }

        case ON_CHANGE_STUDENT:
            return { ...state, student: { ...action.payload } }

        case GET_BOOTCAMPS:
            return { ...state, fetching: true }
        case GET_BOOTCAMPS_ERROR:
            return { ...state, fetching: false, error: action.payload }
        case GET_BOOTCAMPS_SUCCESS:
            return {
                ...state,
                fetching: false,
                array: [...action.payload.array],
                current: action.payload.current,
                object: { ...action.payload.object }
            }

        case "GET_INITIAL_DATA":
            return { ...state }
        default:
            return { ...state }
    }
}

// constants
const UPDATE_CURRENT_WEEK = "UPDATE_CURRENT_WEEK"
const UPDATE_CURRENT_WEEK_ERROR = "UPDATE_CURRENT_WEEK_ERROR"
const UPDATE_CURRENT_WEEK_SUCCESS = "UPDATE_CURRENT_WEEK_SUCCESS"


const DELETE_LEARNING = "DELETE_LEARNING"
const DELETE_LEARNING_ERROR = "DELETE_LEARNING_ERROR"
const DELETE_LEARNING_SUCCESS = "DELETE_LEARNING_SUCCESS"

const SAVE_LEARNING = "SAVE_LEARNING"
const SAVE_LEARNING_ERROR = "SAVE_LEARNING_ERROR"
const SAVE_LEARNING_SUCCESS = "SAVE_LEARNING_SUCCESS"

const GET_WEEK = "GET_WEEK"
const GET_WEEK_ERROR = "GET_WEEK_ERROR"
const GET_WEEK_SUCCESS = "GET_WEEK_SUCCESS"

const GET_SINGLE_BOOTCAMP = "GET_SINGLE_BOOTCAMP"
const GET_SINGLE_BOOTCAMP_ERROR = "GET_SINGLE_BOOTCAMP_ERROR"
const GET_SINGLE_BOOTCAMP_SUCCESS = "GET_SINGLE_BOOTCAMP_SUCCESS"

const ADD_WEEK = "ADD_WEEK"
const ADD_WEEK_ERROR = "ADD_WEEK_ERROR"
const ADD_WEEK_SUCCESS = "ADD_WEEK_SUCCESS"

const ON_CHANGE_STUDENT = "ON_CHANGE_STUDENT"

const GET_BOOTCAMPS = "GET_BOOTCAMPS"
const GET_BOOTCAMPS_ERROR = "GET_BOOTCAMPS_ERROR"
const GET_BOOTCAMPS_SUCCESS = "GET_BOOTCAMPS_SUCCESS"


//thunks
export function updateCurrentWeekAction(week) {
    return (dispatch, getState) => {
        let { user: { token } } = getState()
        dispatch({ type: UPDATE_CURRENT_WEEK, payload: { ...week } })
        return axios.patch(`${baseURL}/weeks/${week._id}`, week, { headers: { Authorization: token } })
            .then(res => {
                dispatch({
                    type: UPDATE_CURRENT_WEEK_SUCCESS,
                    payload: { ...res.data }
                }) // changethis for more than 1 bootcamp at a time
                //getWeekAdminAction(item.week)(dispatch, getState)
                return res
            })
            .catch(err => {
                if (!err.response) return dispatch({ type: UPDATE_CURRENT_WEEK_ERROR, payload: "Algo falló" })
                dispatch({ type: UPDATE_CURRENT_WEEK_ERROR, payload: err.response.data.message })
                return err
            })
    }

}

export function deleteLearningAction(item) {
    return (dispatch, getState) => {
        let { user: { token } } = getState()
        dispatch({ type: DELETE_LEARNING })
        return axios.delete(`${baseURL}/learnings/${item._id}`, { headers: { Authorization: token } })
            .then(res => {
                dispatch({
                    type: DELETE_LEARNING_SUCCESS,
                    payload: { ...res.data }
                }) // changethis for more than 1 bootcamp at a time
                getWeekAdminAction(item.week)(dispatch, getState)
                return res
            })
            .catch(err => {
                if (!err.response) return dispatch({ type: DELETE_LEARNING_ERROR, payload: "Algo falló" })
                dispatch({ type: DELETE_LEARNING_ERROR, payload: err.response.data.message })
                return err
            })
    }
}

export function saveLearningAction(item) {
    return (dispatch, getState) => {
        let { user: { token } } = getState()
        dispatch({ type: SAVE_LEARNING })
        if (item._id) {
            return axios.patch(`${baseURL}/learnings/${item._id}`, item, { headers: { Authorization: token } })
                .then(res => {
                    dispatch({
                        type: SAVE_LEARNING_SUCCESS,
                        payload: { ...res.data }
                    }) // changethis for more than 1 bootcamp at a time
                    getWeekAdminAction(item.week)(dispatch, getState)
                    return res
                })
                .catch(err => {
                    if (!err.response) return dispatch({ type: SAVE_LEARNING_ERROR, payload: "Algo falló" })
                    dispatch({ type: SAVE_LEARNING_ERROR, payload: err.response.data.message })
                    return err
                })
        } else {
            return axios.post(`${baseURL}/learnings`, item, { headers: { Authorization: token } })
                .then(res => {
                    dispatch({
                        type: SAVE_LEARNING_SUCCESS,
                        payload: { ...res.data }
                    }) // changethis for more than 1 bootcamp at a time
                    getWeekAdminAction(item.week)(dispatch, getState)
                    return res
                })
                .catch(err => {
                    if (!err.response) return dispatch({ type: SAVE_LEARNING_ERROR, payload: "Algo falló" })
                    if (err.response.data.error) return dispatch({ type: SAVE_LEARNING_ERROR, payload: err.response.data.error.message })
                    dispatch({ type: SAVE_LEARNING_ERROR, payload: err.response.data.message })
                    return err
                })
        }

    }
}

export function getWeekAdminAction(id) {
    return (dispatch, getState) => {
        let { user: { token } } = getState()
        dispatch({ type: GET_WEEK })
        return axios.get(`${baseURL}/weeks/${id}`, { headers: { Authorization: token } })
            .then(res => {
                dispatch({
                    type: GET_WEEK_SUCCESS,
                    payload: { ...res.data }
                }) // changethis for more than 1 bootcamp at a time
                return res
            })
            .catch(err => {
                if (!err.response) return dispatch({ type: GET_WEEK_ERROR, payload: "Algo falló" })
                dispatch({ type: GET_WEEK_ERROR, payload: err.response.data.message })
                return err
            })
    }
}

export function getBootcampAdminAction(id) {
    return (dispatch, getState) => {
        let { user: { token } } = getState()
        dispatch({ type: GET_SINGLE_BOOTCAMP })
        return axios.get(`${baseURL}/${id}/admin`, { headers: { Authorization: token } })
            .then(res => {
                dispatch({
                    type: GET_SINGLE_BOOTCAMP_SUCCESS,
                    payload: { ...res.data }
                }) // changethis for more than 1 bootcamp at a time
                return res
            })
            .catch(err => {
                if (!err.response) return dispatch({ type: GET_SINGLE_BOOTCAMP_ERROR, payload: "Algo falló" })
                dispatch({ type: GET_SINGLE_BOOTCAMP_ERROR, payload: err.response.data.message })
                return err
            })
    }
}

export function addWeekAction(week) {
    return (dispatch, getState) => {
        let { user: { token } } = getState()
        dispatch({ type: ADD_WEEK })
        if (!week.bootcamp) return
        return axios.post(baseURL + `/${week.bootcamp}/weeks`, week, { headers: { Authorization: token } })
            .then(res => {
                dispatch({
                    type: ADD_WEEK_SUCCESS,
                    payload: { ...res.data }
                }) // changethis for more than 1 bootcamp at a time
                return res
            })
            .catch(err => {
                if (!err.response) return dispatch({ type: ADD_WEEK_ERROR, payload: "Algo falló" })
                dispatch({ type: ADD_WEEK_ERROR, payload: err.response.data.message })
                return err
            })
    }
}

export function onChangeStudentAction(info) {
    return dispatch => {
        dispatch({ type: ON_CHANGE_STUDENT, payload: { ...info } })
    }
}

export function getBootcampsAction() {
    return dispatch => {
        dispatch({ type: GET_BOOTCAMPS })
        return axios.get(`${baseURL}`)
            .then(res => {
                let ob = {}
                res.data.bootcamps.forEach(b => ob[b._id] = b)
                dispatch({
                    type: GET_BOOTCAMPS_SUCCESS, payload: {
                        array: [...res.data.bootcamps],
                        current: res.data.bootcamps.find(b => b.current),
                        object: { ...ob }
                    }
                }) // changethis for more than 1 bootcamp at a time
                return res
            })
            .catch(err => {
                if (!err.response) return dispatch({ type: GET_BOOTCAMPS_ERROR, payload: "Algo falló" })
                dispatch({ type: GET_BOOTCAMPS_ERROR, payload: err.response.data.message })
                return err
            })
    }
}

export default reducer