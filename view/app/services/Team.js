import { get } from '../utils/Request'

export const loadPlayers = authToken => get('/players.json')
