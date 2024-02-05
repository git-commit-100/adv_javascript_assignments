"use strict";

$(document).ready(() => {
  // display data from session storage
  // defining array of keys and dataObj
  const keysForItems = ["email", "dob", "postal", "phone"];
  const dataObj = {};

  // iterating in session storage to get value from keys and stroing in dataObj
  for (let key of keysForItems) {
    let value = window.sessionStorage.getItem(key);
    dataObj[key] = value ? JSON.parse(value) : null;
  }

  // destructuring items
  const { email, phone, dob, postal } = dataObj;

  // if no data in session, go back to index and clear session stroage
  if (!email || !phone || !dob || !postal) {
    window.location.href = "./index.html";
    window.sessionStorage.clear();
    return;
  }

  // appending values to DOM
  $("#email").text(email);
  $("#phone").text(phone);
  $("#postal").text(postal);
  $("#dob").text(dob);

  $("#back").click(() => {
    window.history.back();
	// clicking this does not erase data from session storage
    return;
  }); // end of click()
}); // end of ready()
