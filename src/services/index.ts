const API_KEY = process.env.REACT_API_KEY

export function getToken() {
    if (typeof window !== 'undefined') {
        return window.localStorage.getItem('token');
    }
}

export function getFileStorage() {
    const fileStorage = API_KEY + "/images/";
    return fileStorage;
}

export default API_KEY;