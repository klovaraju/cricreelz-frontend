// Authentication utility functions

export const isAuthenticated = () => {
    const user = localStorage.getItem('user');
    const token = localStorage.getItem('token');
    return user && token;
};

export const getUser = () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
};

export const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
}; 