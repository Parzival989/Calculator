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

console.log(Calculator("*", 2, 4));
