export const login = (data) => (
    fetch('/apis/users/sign_in', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(res => res.json())
)