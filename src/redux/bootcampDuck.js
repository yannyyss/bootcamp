import axios from 'axios'

let baseURL = "https://fixtercamp.herokuapp.com/bootcamps"

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
            return state
        default:
            return state
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

// // thunks
// export function updateProfileAction(update) {
//     return (dispatch, getState) => {
//         let { user: { token } } = getState()
//         dispatch({ type: UPDATE_PROFILE })
//         return axios.patch(`${baseURL}/self`, update, { headers: { Authorization: token } })
//             .then(res => {
//                 let { user } = localStorage
//                 if (user) user = JSON.parse(user)
//                 localStorage.user = JSON.stringify({ ...user, ...res.data })
//                 dispatch({ type: UPDATE_PROFILE_SUCCESS, payload: { ...res.data } })
//                 return res
//             })
//             .catch(err => {
//                 dispatch({ type: UPDATE_PROFILE_ERROR, payload: err.response.data.message })
//                 return err
//             })
//     }
// }

// export function logOutAction() {
//     return dispatch => {
//         localStorage.removeItem('user')
//         dispatch({ type: LOGOUT })
//     }
// }

// export function loginAction(auth) {
//     return dispatch => {
//         dispatch({ type: LOGIN })
//         return axios.post(`${baseURL}/login`, auth)
//             .then(res => {
//                 localStorage.user = JSON.stringify({ ...res.data.user, token: res.data.token })
//                 dispatch({ type: LOGIN_SUCCESS, payload: { ...res.data.user, token: res.data.token } })
//                 return res
//             })
//             .catch(() => {
//                 dispatch({ type: LOGIN_ERROR, payload: "El usuario o contraseña son incorrectos" })
//                 return
//             })
//     }
// }

// export function createAccountAction(auth) {
//     return dispatch => {
//         dispatch({ type: CREATE_ACCOUNT })
//         return axios.post(`${baseURL}/signup`, auth)
//             .then(res => {
//                 localStorage.user = JSON.stringify({ ...res.data.user, token: res.data.token })
//                 dispatch({ type: CREATE_ACCOUNT_SUCCESS, payload: { ...res.data.user, token: res.data.token } })
//                 return res
//             })
//             .catch(err => {
//                 if (!err) return
//                 console.log(err)
//                 dispatch({ type: CREATE_ACCOUNT_ERROR, payload: err.response.data.message })
//                 return err
//             })
//     }
// }








export default reducer