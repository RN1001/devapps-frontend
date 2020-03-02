import jwt from 'jsonwebtoken';

export function isLoggedIn() {
    const token = localStorage.getItem('token');
    return token != null;
}

export function setToken(token) {
    localStorage.setItem('token', token);
}

export function logout() {
    localStorage.clear();
}

export function getToken() {
    return localStorage.getItem('token');
}

export function getUsername() {
    const token = decodeToken();
    if (!token) {
        return null;
    }
    return token['jwt']['username'];
}

export function decodeToken() {
    const token = getToken();
    if(!token) {
        return null;
    }

    try {
        return jwt.verify(token, 'test-secret-key');
    } catch (e) {
        return null;
    }

}
