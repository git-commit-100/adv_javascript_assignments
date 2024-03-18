"use strict";

import { padSingleDigit } from "./library_clock.js";

export const createStopwatch = (minuteSpan, secondSpan, msSpan) => {
  // private state
  let stopwatchTimer = null;
  let elapsed = { minutes: 0, seconds: 0, milliseconds: 0 };

  const tickStopwatch = () => {
    elapsed.milliseconds += 10;

    if (elapsed.milliseconds === 1000) {
      elapsed.seconds++;
      elapsed.milliseconds = 0;
    }
    if (elapsed.seconds === 60) {
      elapsed.minutes++;
      elapsed.seconds = 0;
    }

    minuteSpan.text(padSingleDigit(elapsed.minutes));
    secondSpan.text(padSingleDigit(elapsed.seconds));
    msSpan.text(elapsed.milliseconds.toString().padStart(3, "0"));
  };

  // return object with public methods
  return {
    start() {
      /* 
        clicking twice on start previously keeps the timer running 
        even on clicking stop or reset. Thus checking if timer already
        exists, do nothing on start() 
        */
      if (!stopwatchTimer) {
        tickStopwatch();
        stopwatchTimer = setInterval(tickStopwatch, 10);
      }
    },
    stop() {
      if (stopwatchTimer) {
        clearInterval(stopwatchTimer);
        stopwatchTimer = null; // resetting timer to null
      }
    },
    reset() {
      clearInterval(stopwatchTimer);
      elapsed = { minutes: 0, seconds: 0, milliseconds: 0 };
      minuteSpan.text("00");
      secondSpan.text("00");
      msSpan.text("000");
      stopwatchTimer = null; // resetting timer to null
    },
  };
};
