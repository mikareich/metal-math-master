/** Format * and / operators into unicode characters*/
function formatOperators(operators) {
  const operatorsToFormat = {
    "*": "×",
    "/": "÷",
  };

  return operators.replace(/[*|/]/g, (operator) => operatorsToFormat[operator]);
}

export default formatOperators;
