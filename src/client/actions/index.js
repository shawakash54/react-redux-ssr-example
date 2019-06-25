import axios from 'axios'

export const FETCH_USERS = 'fetch_users'

export const fetchUsers = () => async dispatch => {
    const res = await axios.get('https://609beef7-d648-4e45-ab9e-ac839e06c751.mock.pstmn.io/users')
    dispatch({
        type: FETCH_USERS,
        payload: res
    })
}
