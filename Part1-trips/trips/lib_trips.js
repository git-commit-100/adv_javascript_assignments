"use strict";

export class Trip {
  constructor(destination, km, litres) {
    this.destination = destination;
    this.km = parseFloat(km);
    this.litres = parseFloat(litres);
  }

  get isValid() {
    // a read-only property
    if (this.destination == "" || isNaN(this.km) || isNaN(this.litres)) {
      return false;
    } else if (this.km <= 0 || this.litres <= 0) {
      return false;
    } else {
      return true;
    }
  }

  get kml() {
    // a read-only property
    return this.km / this.litres;
  }

  toString() {
    const kml = this.kml.toFixed(1);
    return `${this.destination}: Kilometers - ${this.km}; KML - ${kml}`;
  }
}

// using closre Trips
export const Trips = (function () {
  // private array; due to closure
  let tripsArr = [];

  function push(trip) {
    // only allow Trip objects to be added to array
    if (trip instanceof Trip) {
      tripsArr.push(trip);
    }
  }

  function totalKml() {
    // a read-only property
    let totalKm = 0;
    let totalLitres = 0;
    for (let trip of tripsArr) {
      totalKm += trip.km;
      totalLitres += trip.litres;
    }
    return totalKm / totalLitres;
  }

  function toString() {
    let str = "";
    for (let trip of tripsArr) {
      str += trip.toString() + "\n";
    }
    str += "\nCumulative KML: " + totalKml().toFixed(1);
    return str;
  }

  return {
    push,
    totalKml,
    toString,
  };
})();
