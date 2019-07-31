const SERVER_URL = "http://192.168.1.10:8000";

let headers = {
    'Accept': 'application/json',
    "Content-Type": "application/json; charset=UTF-8"
};

export function register(page_data, success, fail) {
    fetch(SERVER_URL + '/user/signup/', {
        method: 'POST',
        body: JSON.stringify({
            user_name: page_data.username,
            password: page_data.password,
            email: page_data.email,
        }),
        headers: headers,
        credentials: 'same-origin'
    }).then(response => {
        success(response);
    }).catch(
        error => {
            fail(error)
        })
}

export function login(page_data, success, fail) {
    fetch(SERVER_URL + '/user/login/username/', {
        method: 'POST',
        body: JSON.stringify({
            user_name: page_data.username,
            password: page_data.password,
        }),
        headers: headers,
        credentials: 'same-origin'
    }).then(response => {
        success(response);
    }).catch(
        error => {
            fail(error)
        })
}