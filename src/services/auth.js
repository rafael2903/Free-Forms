export const isLoggedIn = () => JSON.parse(localStorage.getItem('loggedIn'));
export const getUserId = () => localStorage.getItem('user_id');
export const isAdministrator = () => JSON.parse(localStorage.getItem('is_admin'));

export const login = (id, isAdmin) => {
  localStorage.setItem('user_id', id);
  localStorage.setItem('is_admin', isAdmin);
  localStorage.setItem('loggedIn', true);
};

export const logout = () => {
  localStorage.clear();
};
