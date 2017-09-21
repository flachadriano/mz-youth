export const getPlayers = () => fetch('players.json', {
    headers: {
        'Authorization': '1:123', 
        'Content-Type': 'application/x-www-form-urlencoded'
    }, 
}).then(res => resp.json())