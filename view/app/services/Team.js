export const loadPlayers = authToken => fetch(__API__+'players.json', {
    headers: {
        'Authorization': authToken, 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }, 
}).then(res => res.json());