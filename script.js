function Calculator(operator, value1, value2) {
  if (operator == "+") {
    return value1 + value2;
  } else if (operator == "-") {
    return value1 - value2;
  } else if (operator == "*") {
    return value1 * value2;
  } else if (operator == "/") {
    return value1 / value2;
  } else {
    return NaN;
  }
}

const buttons = document.querySelectorAll(".column p");

for (let button of buttons) {
  if (!isNaN(Number(button.innerHTML))) {
    button.addEventListener("click", () => {
      console.log("number");
    });
  } else {
    button.addEventListener("click", () => {
      "symbol";
    });
  }
}
