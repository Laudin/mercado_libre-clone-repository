import { useState } from 'react';

export default function useToken() {
  const getToken = () => {
    const tokenString = localStorage.getItem('token');
    //const userToken = JSON.stringify(tokenString as string); //pff alpedo
    //console.log(tokenString);
    return tokenString;
  };

  const [token, setToken] = useState(getToken());

  const saveToken = userToken => {
    if (!userToken) {
      localStorage.setItem('token', '');
      setToken('');
      return
    }
    localStorage.setItem('token', userToken);
    setToken(userToken);
  };

  return {
    setToken: saveToken,
    token: getToken(),
  };
}
