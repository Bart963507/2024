const input = fetch("input.txt")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.text(); // or response.json() for JSON files
  })
  .then((data) => {
    const splitData = data.toString().split("\r\n");
    //const inputsArr = JSON.parse(JSON.stringify(splitData))[0].split("\n");

    console.log(splitData)
    const validDiffsArr = [];
    finalEqualArr = [];
    splitData.forEach((d) => {
      const splitArr = d.split(" ");
      //RULE 2
      //Any two adjacent levels differ by at least one and at most three.

      // Make new array of differences
      const diffArr = [];

    
      for (const [i, n] of splitArr.entries()) {
        const currentNumber = splitArr[i];
        const nextNumber = splitArr[i + 1];
        if (nextNumber != undefined) {
          const diff = Math.abs(currentNumber - nextNumber);
          diffArr.push(diff);
        }
      }

  
      const nTooBigArr = diffArr.filter(n => n > 3)
      if (nTooBigArr.length === 1){
        //console.log(nTooBigArr)
        const index = diffArr.indexOf(nTooBigArr[0])
        diffArr.splice(index,1)
        
        console.log(splitArr)
        console.log(index)
        splitArr.splice(index,1)
        console.log(splitArr)
        
        
      }

      const nTooBig = diffArr.findIndex((n) => n > 3);
      const zero = diffArr.indexOf(0);
      if (zero === -1 && nTooBig === -1) {
        validDiffsArr.push(true);
      } else {
        validDiffsArr.push(false);
      }

      // RULE 1:
      // The levels are either all increasing or all decreasing.
      let positiveArr = [];
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

        // DAY 1
    finalEqualArr.push(checkEquality(positiveArr));


    });



  
    // Join the two final arrs into one
    const combined = finalEqualArr.map(function (item, index) {
      return { equal: item, diff: validDiffsArr[index] };
    });
    //console.log(combined);
    const answer = combined.filter((i) => i.equal && i.diff).length;
    console.log(answer);
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


function filterArr(arr,secondArr){
  const falseArr = arr.filter(n => n === false)
  const trueArr = arr.filter(n => n === true)
  //console.log(falseArr.length, trueArr.length)
  if (falseArr.length === 1 && trueArr.length > 1){
    const index = arr.indexOf(false)
    secondArr.splice(index,1)
    arr.splice(index,1)
    return arr
  }
  if (falseArr.length > 1 && trueArr.length === 1){
    const index = arr.indexOf(true)
    arr.splice(index,1)
    secondArr.splice(index,1)
    return arr
  }
  else {
    return arr
  }

}


