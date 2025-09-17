"use strict";

let age = 18;
let hasAticket = true;

if (age < 18 && hasAticket) {
  console.log("You are a minor with a ticket.");
} else if (age < 18 && !hasAticket) {
  console.log("You are a minor without a ticket.");
} else if (age >= 18 && !hasAticket) {
  console.log("You are an adult without a ticket.");
} else {
  console.log("Come in!");
}

let grade = document.getElementById("gradeInput").value;
grade = Number(grade);

let checkGrade = () => {
  let grade = document.getElementById("gradeInput").value;
  grade = Number(grade);
  if (grade >= 90 && grade <= 100) {
    document.getElementById("result").innerText = "A";
  } else if (grade >= 80 && grade < 90) {
    document.getElementById("result").innerText = "B";
  } else if (grade >= 70 && grade < 80) {
    document.getElementById("result").innerText = "C";
  } else if (grade >= 60 && grade < 70) {
    document.getElementById("result").innerText = "D";
  } else if (grade < 60 && grade >= 0) {
    document.getElementById("result").innerText = "F";
  } else {
    document.getElementById("result").innerText = "Invalid grade";
  }
};
checkGrade();

let total = 70;

if (total >= 100) {
  console.log("You get a " + (20 % total) + "% as a discount.");
} else if (total >= 50 && total < 100) {
  console.log("You get a " + (10 % total) + "% as a discount.");
} else if (total > 10 && total < 50) {
  console.log("You get a " + (5 % total) + "% as a discount.");
} else {
  console.log("You get no discount.");
}
