export default class LocalStorage {
    constructor() {
        if (typeof(Storage) !== 'undefined') {
            this.authToken = localStorage.getItem('mz-youth-session');
        }
    }

    setAuthToken(authToken) {
        localStorage.setItem('mz-youth-session', authToken);
    }

    getAuthToken() {
        return this.authToken;
    }

    destroy() {
        localStorage.removeItem('mz-youth-session');
    }
}