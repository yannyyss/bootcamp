import axios from 'axios'
import { baseURL as url } from './baseURL'

const baseURL = url + '/bootcamps'

let initial = {
    array: [],
    current: {},
    loggedIn: false,
    student: {}
}
function reducer(state = initial, action) {
    switch (action.type) {
        case ON_CHANGE_STUDENT:
            return { ...state, student: { ...action.payload } }

        case GET_BOOTCAMPS:
            return { ...state, fetching: true }
        case GET_BOOTCAMPS_ERROR:
            return { ...state, fetching: false, error: action.payload }
        case GET_BOOTCAMPS_SUCCESS:
            return { ...state, fetching: false, array: [...action.payload.array], current: action.payload.current }

        case "GET_INITIAL_DATA":
            return { ...state }
        default:
            return { ...state }
    }
}

// constants

const ON_CHANGE_STUDENT = "ON_CHANGE_STUDENT"

const GET_BOOTCAMPS = "GET_BOOTCAMPS"
const GET_BOOTCAMPS_ERROR = "GET_BOOTCAMPS_ERROR"
const GET_BOOTCAMPS_SUCCESS = "GET_BOOTCAMPS_SUCCESS"


//thunks

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
                dispatch({ type: GET_BOOTCAMPS_SUCCESS, payload: { array: [...res.data.bootcamps], current: res.data.bootcamps.find(b => b.current) } }) // changethis for more than 1 bootcamp at a time
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