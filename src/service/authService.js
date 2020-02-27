export function isLoggedIn() {
    const token = localStorage.getItem('token');
    return token != null;
}

export function setToken(token) {
    localStorage.setItem('token', token);
}

export function login() {

}

export function logout() {
    localStorage.clear();
}
