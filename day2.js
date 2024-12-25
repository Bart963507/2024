const input = fetch("input.txt")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.text(); // or response.json() for JSON files
  })
  .then((data) => {
    const splitData = data.toString().split("\r\n");
    splitData.forEach((d) => {
      const splitArr = d.split(" ").join(",").split("\n").join(",").split(",");
      // RULE 1:
      // The levels are either all increasing or all decreasing.
      const positiveArr = [];
      const diffArr = [];
      console.log(splitArr);
      for (const [i, n] of splitArr.entries()) {
        const currentNumber = splitArr[i];
        const nextNumber = splitArr[i + 1];
        if (nextNumber != undefined) {
          // Make new array of differences
          const diff = Math.abs(currentNumber - nextNumber);
          if (diff > 0) {
            diffArr.push(diff);
          }
          //Push positive, negative to new array
          const positive = checkPositive(currentNumber, nextNumber);
          if (positive != null) {
            positiveArr.push(positive);
          }
        }
      }
      //Create set of array. If set size is 1, then it is all either increasing or decreasing
      console.log(checkEquality(positiveArr));

      //RULE 2
      //Any two adjacent levels differ by at least one and at most three.
      const unEvenArr = [];
      for (const [i, diff] of diffArr.entries()) {
        if (i + 1 != undefined) {
          unEvenArr.push(checkUnEven(diff, diffArr[i + 1]));
        }
      }
    });
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
