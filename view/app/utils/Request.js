const BASE_URL = window.location.origin;

const headers = () => ({
    'Authorization': window.AUTH_TOKEN,
    'Content-Type': 'application/json',
    'Accept': 'application/json'
})

const handleResponse = res => {
    if (res.status == 422) return res.json().then(err => { throw err });
    return res.json()
}

export const get = relativePath =>
    fetch(BASE_URL+relativePath, {
    headers: headers(), 
}).then(handleResponse);

export const post = (relativePath, data) => 
    fetch(BASE_URL+relativePath, {
        method: 'POST',
        headers: headers(),
        body: JSON.stringify(data)
    }).then(handleResponse);
