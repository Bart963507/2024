"use strict";

console.log("test")

const list1 = []
const list2 = []

const resultArr = []



function findMin(arr){
    return Math.min(...arr)
}

function calcDiff(n1,n2){
    return Math.abs(n1 - n2)
}


function removeMin(arr){
    const index = arr.indexOf(findMin(arr))
    arr.splice(index,1)
}


const input = fetch('input.txt')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.text(); // or response.json() for JSON files
  })
  .then(data => {
    const stringData = data.toString()
    const cleanData = stringData.split("   ")
    list1.push(+cleanData[0])
    cleanData.shift()
    list2.push(+cleanData[cleanData.length - 1])
    cleanData.pop()
    console.log(cleanData)

    cleanData.forEach(pair =>{
        const splitArr = pair.split("\r\n")
        list2.push(+splitArr[0])
        list1.push(+splitArr[1])
    })
    //Part 1
    /*while (list1.length > 0){
        const diff = calcDiff(findMin(list1),findMin(list2))
        resultArr.push(diff)
        removeMin(list1)
        removeMin(list2)
    }
    
    console.log(resultArr.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
      ))
    */

    //Part 2

    list1.forEach(n => {
      const count = list2.filter(n2 => n2 === n).length
      if (count > 0){
      resultArr.push(count*n)
      console.log(n,count)
      }
      
    })
    console.log(resultArr.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    ))
  })
  .catch(error => {
    console.error('Error reading file:', error);
  });
  


