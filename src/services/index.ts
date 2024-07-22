const API_KEY = process.env.REACT_API_KEY

export function getToken() {
    if (typeof window !== 'undefined') {
        return window.localStorage.getItem('token');
    }
}

export default API_KEY;