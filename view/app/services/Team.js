export const loadPlayers = authToken => fetch('http://localhost:3000/players.json', {
    headers: {
        'Authorization': authToken, 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }, 
}).then(res => res.json());