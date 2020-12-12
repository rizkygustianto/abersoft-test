import * as SecureStore from 'expo-secure-store';

async function setToken(token) {
    await SecureStore.setItemAsync('access_token', token)
}

async function deleteToken() {
    await SecureStore.deleteItemAsync('access_token')
}

const initialState = {
    isLogin: false
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'LOGIN':
            if (action.payload.access_token) {
                setToken(action.payload.access_token)
            }
            let newState = {
                ...state,
                isLogin: true
            }
            return newState

        case 'LOGOUT':
            deleteToken()
            return {
                ...state,
                isLogin: false
            }
        
        default:
            return state
    }
}

export default reducer