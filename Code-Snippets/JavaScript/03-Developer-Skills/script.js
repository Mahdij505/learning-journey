// Remember, we're gonna use strict mode in all scripts now!
"use strict";
/*
const temperatures = ["error", 3, -2, -6, -1, 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function (temps) {
  let max, min;
  for (let j = 0; j < temps.length; j++) {
    if (typeof temps[j] === "number") {
      max = min = temps[j];
      break;
    }
  }
  for (let i = 1; i < temps.length; i++) {
    const currTemp = temps[i];
    if (typeof currTemp !== "number") continue;
    if (currTemp > max) {
      max = currTemp;
    }
    if (currTemp < min) {
      min = currTemp;
    }
  }
  // console.log(max, min);
  const amplitude = max - min;
  return amplitude;
};

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);
const temperatures = ["error", 3, -2, -6, -1, 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitudeNew = function (t1, t2) {
  const t3 = t1.concat(t2);
  let max, min;
  for (let j = 0; j < t3.length; j++) {
    if (typeof t3[j] === "number") {
      max = min = t3[j];
      break;
    }
  }
  for (let i = 1; i < t3.length; i++) {
    const currTemp = t3[i];
    if (typeof currTemp !== "number") {
      continue;
    }
    if (currTemp > max) {
      max = currTemp;
    }
    if (currTemp < min) {
      min = currTemp;
    }
  }
  const amplitudeNew = max - min;
  return amplitudeNew;
};

const amplitudeNew = calcTempAmplitudeNew(temperatures, [
  "error",
  2,
  0,
  -1,
  13,
  20,
]);
console.log(amplitudeNew);

const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",
    // value: +prompt("Degrees celsius:", ""),
    value: 10,
  };
  // console.log(measurement);
  // console.log(measurement.value);
  console.table(measurement);
  // console.warn(measurement.value);
  // console.error(measurement.value);
  const kelvin = measurement.value + 273;
  return kelvin;
};
console.log(measureKelvin());

const calcTempAmplitudeBugamplitudeBug = function (t1, t2) {
  const t3 = t1.concat(t2);
  let max, min;
  max = min = 0;
  // for (let j = 0; j < t3.length; j++) {
    //   if (typeof t3[j] === "number") {
      //     max = min = t3[j];
      //     break;
      //   }
      // }
      for (let i = 1; i < t3.length; i++) {
        const currTemp = t3[i];
        if (typeof currTemp !== "number") {
          continue;
        }
        if (currTemp > max) {
          max = currTemp;
        }
        if (currTemp < min) {
          min = currTemp;
        }
      }
      console.log(max, min);
      const amplitudeBug = max - min;
      return amplitudeBug;
};

const amplitudeBug = calcTempAmplitudeBugamplitudeBug(
  [3, 9, 18, 2, 3],
  ["error", 2, 4, 1, 13, 20]
  );
  console.log(amplitudeBug);
  
  
  const data1 = [17, 21, 23];
  const data2 = [12, 5, -5, 0, 4];
  
  const printForecast = function (arr) {
    let text = "...";
    for (let i = 0; i < arr.length; i++) {
      text += ` ${arr[i]}°C in ${i + 1} days ... `;
    }
    return text;
  };
  
const result = printForecast([12, 5, -5, 0, 4]);
console.log(result);

*/
