const STORAGE_NAME = 'mz-youth-session';

export default class LocalStorage {

    setAuthToken(authToken) {
        if (typeof(Storage) !== 'undefined') {
            localStorage.setItem(STORAGE_NAME, authToken);
        }
    }

    getAuthToken() {
        if (typeof(Storage) !== 'undefined') {
            return localStorage.getItem(STORAGE_NAME);
        }
    }

    destroy() {
        if (typeof(Storage) !== 'undefined') {
            localStorage.removeItem(STORAGE_NAME);
        }
    }
}