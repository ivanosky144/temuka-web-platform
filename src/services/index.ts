const API_KEY = "http://3.25.103.16:3200"
export const WEBSOCKET_CONN = "ws://3.25.103.16:3200"

export function getToken() {
    if (typeof window !== 'undefined') {
        return window.localStorage.getItem('token');
    }
}

export function getFileStorage() {
    const fileStorage = API_KEY + "/images/";
    return fileStorage;
}

export function getAuthHeaders() {
    const token = localStorage.getItem('token');
    return {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
    }
}

export default API_KEY;
