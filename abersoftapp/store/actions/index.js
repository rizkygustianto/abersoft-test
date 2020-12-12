export const register = (payload,cb) => {
    return dispatch => {
        fetch(`http://localhost:3000/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // access_token: localStorage.getItem('access_token')
            },
            body: JSON.stringify(payload)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data, 'register action');
                cb(null)
            })
            .catch(err => {
                console.log(err)
                cb(err,null)
            })
    }
}

export const login = (payload,cb) => {
    return dispatch => {
        fetch(`http://localhost:3000/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // access_token: localStorage.getItem('access_token')
            },
            body: JSON.stringify(payload)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data, 'login action');
                dispatch({
                    type: 'LOGIN',
                    payload: data
                })
                cb(null)
            })
            .catch(err => {
                console.log(err)
                cb(err,null)
            })
    }
}

export function logout() {
    return ({
        type: 'LOGOUT'
    })
}