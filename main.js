"use strict";

// const ageCheck = (age) => {
//     if(age < 21) {
//         console.log("no drinks for you");
//     } else {
//         console.log("partayyy");
//     }
// }

// // ageCheck(23);
// // ageCheck(2);

// const lengthOutpus = (strang) => {
//     return strang.length
// }

// // console.log(lengthOutpus("Sam"))

// const quoteFinder = (testString) => {
//     return "winter is coming".indexOf(testString)
// }
// console.log(quoteFinder('w'))

const employee = {
  firstName: "Sam",
  lastName: "Mudick",
  role: "Student",
  accountNumber: "1-2048287424",
  isManager: false,
  titles: ["Jr. Jr. Dev", "Sr. Student"],
  accolades: {
    title: "Employee of the Day",
    dateEarned: "1/1/2020",
    expires: "1/2/2020",
    isCool: true,
  },
};

console.log(employee.firstName);
const keyToCheck = "accolades";

console.log(employee[keyToCheck]["isCool"]);

const statusCheck = (person) => {
  if (person.firstName[0] === "S") {
    person.status = "vip";
  } else {
    person.status = "peasant";
  }
};

statusCheck(employee);
console.log(employee);
