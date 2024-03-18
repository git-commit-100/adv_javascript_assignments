"use strict";

import { padSingleDigit } from "./library_clock.js";

export const createStopwatch = (minuteSpan, secondSpan, msSpan) => {
  // private state
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
      tickStopwatch();
      return setInterval(tickStopwatch, 10);
    },
    stop(timer) {
      clearInterval(timer);
    },
    reset() {
      clearInterval();
      elapsed = { minutes: 0, seconds: 0, milliseconds: 0 };
      minuteSpan.text("00");
      secondSpan.text("00");
      msSpan.text("000");
    },
  };
};
