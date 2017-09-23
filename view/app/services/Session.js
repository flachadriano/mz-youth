export const login = data => fetch(__API__+'apis/users/sign_in', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify(data)
}).then(res => res.json());