const input = fetch('input.txt')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.text(); // or response.json() for JSON files
  })
  .then(data => {
    const splitData = data.toString().split("\r\n")
    splitData.forEach(d => {
        const splitArr = d.split(" ")

        const positiveArr = []
        const diffArr = []
       for (const [i, n] of splitArr.entries()){
          const currentNumber = n
          const nextNumber = splitArr[i + 2]
          if (nextNumber != undefined){
          // Make new array of differences
          const diff = Math.abs(currentNumber - nextNumber)
          if (diff>0){diffArr.push(diff)}

          const positive = checkPositive(currentNumber, nextNumber)
          if (positive != null){positiveArr.push(positive)}
       }}
       
       checkEquality(positiveArr)
       console.log(diffArr)

       const unEvenArr = []
       for (const[i,diff] of diffArr.entries()){
          if (i + 1 != undefined){
            unEvenArr.push(checkUnEven(diff, diffArr[i + 1]))
          }
       }
       console.log(unEvenArr)
    })
  })



  // check positive/negative
  function checkPositive(number1, number2){
    const diff = number1-number2;
    if (diff > 0){
      return true
    }
    else {
      return false
    }

  }


  // check equnaliy of positive/negative

  function checkEquality(arr){
    const equalSet = new Set(arr)
    if (equalSet.size === 1){
      return true
    }
    else{
      return false
    }
  }

  function checkUnEven(number1, number2){
    if (number1 === number2){
      return false
    }
    else{
      return true
    }
  }