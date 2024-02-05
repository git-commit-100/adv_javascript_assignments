"use strict";

const findACookie = (name) => {
  if (!name) return null;
  // get all cookies
  let allCookies = decodeURIComponent(document.cookie);
  // if no cookie set -> return ""
  if (!allCookies) return null;

  // splitting to ['key=value']
  let cookieArr = allCookies.split(";");
  // find the cookie in array
  let cookieElement = cookieArr.filter((element) => element.includes(name))[0];

  // no cookie found by the name provided -> return
  if (!cookieElement) return null;

  // destructuring cookie values
  let [cookieKey, cookieValue] = cookieElement.split("=");
  return { cookieKey, cookieValue };
};

const getCookieByName = (name) => {
  let cookieToFind = findACookie(name);
  if (!cookieToFind) return "";
  let { cookieValue } = cookieToFind;
  return cookieValue;
};

const setCookie = (name, value, days = 7) => {
  // setting days to seconds as max-age requires seconds
  let maxAgeInSeconds = +days * 24 * 60 * 60;
  // encoding value
  let encodedValue = encodeURIComponent(value);
  // setting a cookie
  document.cookie = `${name}=${encodedValue};max-age=${maxAgeInSeconds};path=/`;
};

const deleteCookie = (name) => {
  let { cookieKey, cookieValue } = findACookie(name);
  let encodedValue = encodeURIComponent(cookieValue);
  // setting max-age to 0 or -ve deletes cookie
  document.cookie = `${cookieKey}=${encodedValue};max-age=0;path=/`;
};

const goToPage = (url) => {
  window.location.href = url;
  return;
};
