const input = fetch("input.txt")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.text(); // or response.json() for JSON files
  })
  .then((data) => {
    const splitData = data.toString().split("\r\n");
    const inputsArr = JSON.parse(JSON.stringify(splitData))[0].split("\n");
    const validDiffsArr = [];
    inputsArr.forEach((d) => {
      const splitArr = d.split(" ");
      // RULE 1:
      // The levels are either all increasing or all decreasing.
      const positiveArr = [];
      for (const [i, n] of splitArr.entries()) {
        const currentNumber = splitArr[i];
        const nextNumber = splitArr[i + 1];
        if (nextNumber != undefined) {
          //Push positive, negative to new array
          const positive = checkPositive(currentNumber, nextNumber);
          if (positive != null) {
            positiveArr.push(positive);
          }
        }
      }
      //Create set of array. If set size is 1, then it is all either increasing or decreasing
      checkEquality(positiveArr);

      //RULE 2
      //Any two adjacent levels differ by at least one and at most three.

      // Make new array of differences
      const diffArr = [];

      //console.log(splitArr);
      for (const [i, n] of splitArr.entries()) {
        const currentNumber = splitArr[i];
        const nextNumber = splitArr[i + 1];
        if (nextNumber != undefined) {
          const diff = Math.abs(currentNumber - nextNumber);
          diffArr.push(diff);
        }
      }
      const nTooBig = diffArr.findIndex((n) => n > 3);
      const zero = diffArr.indexOf(0);
      if (zero === -1 && nTooBig === -1) {
        validDiffsArr.push(diffArr);
      }
    });
    console.log(validDiffsArr);
  });
// check positive/negative
function checkPositive(number1, number2) {
  const diff = number1 - number2;
  if (diff > 0) {
    return true;
  } else {
    return false;
  }
}

// check equnaliy of positive/negative

function checkEquality(arr) {
  const equalSet = new Set(arr);
  if (equalSet.size === 1) {
    return true;
  } else {
    return false;
  }
}

function checkUnEven(number1, number2) {
  if (number1 === number2) {
    return false;
  } else {
    return true;
  }
}

function calcDiff(number1, number2) {
  Math.abs(w);
}
