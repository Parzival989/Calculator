"use strict";

/* Global */
let state = 0;
let signState = 0;

const operators = ["+", "-", "X", "/"];

/* Selectors */
const buttons = document.querySelectorAll(".column .l");

const resultField = document.querySelector(".result");
const value1Field = document.querySelector(".value1");
const operatorField = document.querySelector(".operator");
const value2Field = document.querySelector(".value2");

/* Functions*/

/*https://hrid1402.github.io/Calculator */

function Calc(parsedNumber1, parsedNumber2) {
  //let parsedNumber1 = Number(value1Field.textContent);
  //let parsedNumber2 = Number(value2Field.textContent);
  let operator = operatorField.textContent;
  if (operator == "+") {
    return parsedNumber1 + parsedNumber2;
  } else if (operator == "-") {
    return parsedNumber1 - parsedNumber2;
  } else if (operator == "X") {
    return parsedNumber1 * parsedNumber2;
  } else if (operator == "/") {
    if (parsedNumber2 == 0) {
      alert("you cannot divide by 0");
      return;
    }
    return parsedNumber1 / parsedNumber2;
  } else {
    return NaN;
  }
}

function calcResult() {
  let res;
  /* all values */
  if (
    operatorField.textContent !== "" &&
    value1Field.textContent !== "" &&
    value2Field.textContent !== ""
  ) {
    res = Calc(
      Number(value1Field.textContent),
      Number(value2Field.textContent)
    );
    resultField.textContent = res;
    clearValues();
    state = 1;
  }

  /* all values */
  if (
    operatorField.textContent !== "" &&
    resultField.textContent !== "" &&
    value2Field.textContent !== ""
  ) {
    res = Calc(
      Number(resultField.textContent),
      Number(value2Field.textContent)
    );
    resultField.textContent = res;
    clearValues();
    state = 1;
  }
}

function setValue(value, operator) {
  if (state == 0 && operator == "number") {
    if (value1Field.textContent.includes(".") && value === ".") {
    } else {
      value1Field.textContent += value;
      signState = 1;
    }
  }
  if (
    ((operator == "operator" && state == 0) ||
      (operator == "operator" && state == 1)) &&
    signState == 1
  ) {
    operatorField.textContent = value;
    state = 2;
  }
  if (state == 2 && operator == "number") {
    if (value2Field.textContent.includes(".") && value === ".") {
    } else {
      value2Field.textContent += value;
    }
  }
}

function clearValues() {
  value1Field.textContent = "";
  value2Field.textContent = "";
  operatorField.textContent = "";
}

function clearCalculationScreen() {
  clearValues();
  resultField.textContent = "";
  state = 0;
  signState = 0;
}

function delButton() {
  if (value2Field.textContent !== "") {
    value2Field.textContent = value2Field.textContent.slice(
      0,
      value2Field.textContent.length - 1
    );
  } else if (operatorField.textContent !== "") {
    operatorField.textContent = value2Field.textContent.slice(
      0,
      operatorField.textContent.length - 1
    );
  } else if (value1Field.textContent !== "") {
    value1Field.textContent = value1Field.textContent.slice(
      0,
      value1Field.textContent.length - 1
    );
  }
}

/* EventListener Click*/
for (let button of buttons) {
  let currentValue = button.firstChild.innerHTML;

  console.log(currentValue);

  /* Numbers */
  if (!isNaN(Number(currentValue)) || currentValue === ".") {
    button.addEventListener("click", () => {
      setValue(currentValue, "number");
    });
  } else if (operators.includes(currentValue)) {
    button.addEventListener("click", () => {
      setValue(currentValue, "operator");
    });
  } else if (currentValue === "=") {
    button.addEventListener("click", () => {
      calcResult();
    });
  } else if (currentValue === "C") {
    button.addEventListener("click", () => {
      clearCalculationScreen();
    });
  } else if (currentValue === "del") {
    button.addEventListener("click", () => {
      delButton();
    });
  }
}

/* Keyboard */

/*

function setValue(value, operator) {
  console.log(state);

  if (state == 0) {
    value1 += value;
    text += value;
    calculationField.textContent = text;
    state = 1;
  } else if (state == 1) {
    text += value;
    operator = value;
    calculationField.textContent = text;
    state = 2;
  } else if (state == 2) {
    value2 += value;
    text += value;
    calculationField.textContent = text;
    state = 3;
  }
}
function setValue(value, operator) {
  console.log(state);
 
  if (state == 0) {
    value1 += value;
    text += value;
    calculationField.textContent = text;
    state = 1;
  } else if (state == 1) {
    
    text += value;
    operator = value;
    calculationField.textContent = text;
    state = 2;
  } else if (state == 2) {
    value2 += value;
    text += value;
    calculationField.textContent = text;
    state = 3;
  }
}


function setValue(value, operator) {
  if (operator === "operator") {
    text += value;
    Globaloperator = value;
    calculationField.textContent = text;
    let state = 1;
  } else if (operator === "number") {
    if (state == 0) {
      value1 += value;
      text += value;
      calculationField.textContent = text;
    } else if (state == 1) {
      value2 += value;
      text += value;
      calculationField.textContent = text;
    }
  }
}
*/

/*
for (let button of buttons) {
  if (!isNaN(Number(button.firstChild.innerHTML))) {
    button.addEventListener("click", () => {
      console.log("number");
    });
  } else {
    button.addEventListener("click", () => {
      console.log("symbol");
    });
  }
}

*/

/*
let v = "1";
let v2 = "4";

console.log(Number(v) + Number(v2));

*/
