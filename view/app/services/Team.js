export const getPlayers = auth_token => fetch('http://localhost:3000/players.json', {
    headers: {
        'Authorization': auth_token, 
        'Content-Type': 'application/x-www-form-urlencoded'
    }, 
}).then(res => res.json())