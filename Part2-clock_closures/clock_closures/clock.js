"use strict";

import { createClock } from "./library_clock.js";
import { createStopwatch } from "./library_stopwatch.js";

//global stop watch timer variable
let stopwatchTimer = null;

$(document).ready(function () {
  const clock = createClock(
    $("#hours"),
    $("#minutes"),
    $("#seconds"),
    $("#ampm")
  );
  clock.start();

  const stopwatch = createStopwatch(
    $("#s_minutes"),
    $("#s_seconds"),
    $("#s_ms")
  );

  $("#start").click(() => {
    // do first tick of stop watch and then set interval timer to tick
    // stop watch every 10 milliseconds. Store timer object in stopwatchTimer
    // variable so next two functions can stop timer.
    stopwatchTimer = stopwatch.start();
  });

  $("#stop").click(() => {
    // stop timer
    stopwatch.stop(stopwatchTimer);
  });

  $("#reset").click(() => {
    // stop timer and reset
    stopwatch.stop(stopwatchTimer);
    stopwatch.reset();
  });
}); // end ready()
