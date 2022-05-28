"use strict";

// Tests data
const test1 = [5, 2, 4, 1, 15, 8, 3];

const calcAverageHumanAge = function (dogAges) {
  //Task 1
  const humanAges = dogAges.map((age) => (age <= 2 ? age * 2 : 16 + age * 4));
  // return humanAges;
  //Task 2
  const filterDogs = humanAges.filter((human) => human < 18);
  return filterDogs;
};

console.log(calcAverageHumanAge(test1));
