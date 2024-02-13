"use strict";

$(document).ready(() => {
  const tasks = [];

  $("#add_task").click(() => {
    const textbox = $("#task");
    const task = textbox.val();
    if (task === "") {
      alert("Please enter a task.");
      textbox.focus();
    } else {
      /* 
      splitting task string to different tasks(items), then
      getting rid of whitespace between , and task
      */
      let sanitizedTasksArr = task.split(",").map((task) => task.trim());

      // add only VALID task to array
      for (let item of sanitizedTasksArr) {
        if (item !== "") {
          tasks.push(item);
        } else {
          alert("Oops ! Some tasks are empty. Cannot insert empty tasks :(");
          textbox.focus();
          return;
        }
      }

      // clear task text box and re-display tasks
      textbox.val("");
      $("#task_list").val(tasks.join("\n"));
      textbox.focus();
    }
  });

  $("#clear_tasks").click(() => {
    // clearing up array
    tasks.length = 0;
    $("#task_list").val("");
    $("#task").focus();
  });

  $("#task").focus();
});
