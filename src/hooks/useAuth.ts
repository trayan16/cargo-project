import { useEffect } from 'react';
import { User, useUser } from './useUser';
import { useLocalStorage } from './useLocalStorage';

export const useAuth = () => {
  const { user, login: addUser, logout: removeUser } = useUser();
  const { getItem } = useLocalStorage();

  useEffect(() => {
    const user = getItem('user');
    if (user) {
      addUser(JSON.parse(user));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const login = (user: User) => {
    addUser(user);
  };

  const logout = () => {
    removeUser();
  };

  return { user, login, logout };
};