import React, { useState } from "react";
import Cookies from 'universal-cookie';

const getItem = function (key) {
    const cookies = new Cookies();
    let cookieValue = cookies.get(key);
    return cookieValue;
}

const setItem = (key, value) => {

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
    setCookie(value);
    setItem(key, value);
  };

  return [cookie, updateCookie];
};

export default useCookie;
