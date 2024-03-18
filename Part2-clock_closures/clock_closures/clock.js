"use strict";

import { createClock } from "./library_clock.js";
import { createStopwatch } from "./library_stopwatch.js";

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
    stopwatch.start();
  });

  $("#stop").click(() => {
    stopwatch.stop();
  });

  $("#reset").click(() => {
    stopwatch.reset();
  });
}); // end ready()
