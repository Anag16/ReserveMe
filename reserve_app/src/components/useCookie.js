import { useState } from "react";
import Cookies from 'universal-cookie';

const getItem = function (key) {
    const cookies = new Cookies();
    let cookieValue = cookies.get(key);
    return cookieValue;
}

const setItem = (key, value) => {
  const cookies = new Cookies();
  cookies.set(key, value);
};

/**
 *
 * @param {String} key The key to store our data to
 * @param {String} defaultValue The default value to return in case the cookie doesn't exist
 */
const useCookie = (key) => {
  const getCookie = () => getItem(key) || '';
  const [cookie, setCookie] = useState(getCookie());

  const updateCookie = (value) => {
    //Loggin in
    if (value === true){
      setCookie(getItem(key));
      setItem(key, getItem(key));
    }
    else{
      setCookie(value);
      getItem(key, value);
    }

  };

  return [cookie, updateCookie];
};

export default useCookie;
