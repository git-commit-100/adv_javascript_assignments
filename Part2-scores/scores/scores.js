"use strict";

let SCORES = [];
let STUDENTS = [];

// removed fn params as it is not getting used as per my code
const displayScores = (isSort = false) => {
  if (STUDENTS.length > 0) {
    // displaying to text box
    let STUDENTS_ARRAY = [...STUDENTS];
    let displayString = "";

    if (isSort) {
      // sort by last name
      let sortedArr = [...STUDENTS];

      // comparator function
      const sortLastName = (a, b) => {
        let lNameOfA = a.split("~")[1].toLowerCase();
        let lNameOfB = b.split("~")[1].toLowerCase();

        if (lNameOfA > lNameOfB) {
          return 1; // a > b -> false as it preceeds
        }

        if (lNameOfA < lNameOfB) {
          return -1; // a < b -> true as in alphabetical order
        }

        return 0; // same last name
      };

      // sorting on custom comparator
      sortedArr.sort(sortLastName);
      STUDENTS_ARRAY = [...sortedArr];
    }
    // append to DOM
    for (let data of STUDENTS_ARRAY) {
      let dataArr = data.split("~"); // will have 3 elements
      // formatting string in format specififed
      displayString += `${dataArr[1]}, ${dataArr[0]}: ${dataArr[2]}\n`;
    }
    // displaying to DOM
    $("#scores").val(displayString);
  }

  if (SCORES.length > 0) {
    // array has items
    let totalScore = SCORES.reduce((total, score) => +(total + score));
    let avgScore = +(totalScore / SCORES.length).toFixed(2);
    $("#avr_score").text(avgScore);
  }
};

$(document).ready(() => {
  $("#add_button").click(() => {
    // get form data
    let fname = $("#first_name").val().trim();
    let lname = $("#last_name").val().trim();
    let scoreInput = $("#score").val().trim();

    // validating input
    if (fname === "" || lname === "" || scoreInput === "") {
      alert("Please fill all the values appropriately");
      return;
    }

    // validating score
    if (
      isNaN(parseInt(scoreInput)) ||
      parseInt(scoreInput) > 100 ||
      parseInt(scoreInput) < 0
    ) {
      alert("Score must be a number between 0 - 100");
      return;
    }

    // convert to a ~ separated string, so we can split values in future
    let dataString = `${fname}~${lname}~${scoreInput}`;
    // pushing into arrays
    SCORES.push(+scoreInput);
    STUDENTS.push(dataString);

    // updating DOM
    displayScores();

    // get the add form ready for next entry
    $("#first_name").val("");
    $("#last_name").val("");
    $("#score").val("");
    $("#first_name").focus();
  }); // end click()

  $("#clear_button").click(() => {
    // clearing arrays
    SCORES.length = 0;
    STUDENTS.length = 0;
    // remove the score data from the web page
    $("#avr_score").val("");
    $("#scores").val("");
    $("#first_name").focus();
  }); // end click()

  $("#sort_button").click(() => {
    displayScores(true);
  }); // end click()

  $("#first_name").focus();
}); // end ready()
