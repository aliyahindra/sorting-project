function ageSort(users) {
  // Your code here

  return users.sort((a, b) => {
    return a.age - b.age
  })

};

function oddEvenSort(arr) {
  arr.sort((a,b)=>{
    if ((a % 2 === 0) && (b % 2 === 1)){
        return 1;
    }
    if ((a % 2 === 1) && (b % 2 === 0)){
       return -1;

    } else {
      return a-b
    }
  })
  return arr
}

function validAnagrams(s, t) {
  // Your code here
  let sWord = s.split("")
  let tWord = t.split("")

  let word1 = sWord.sort()

  console.log(word1)

  let word2 = tWord.sort()

  console.log(word2)

  return (word1.join("") === word2.join(""));
};

function reverseBaseSort(arr) {
  arr.sort((a,b)=>{
    // if ((Math.log10(a)) > (Math.log10(b))){
    //   return b-a
    // }
    if (Math.floor(Math.log10(a)) === Math.floor(Math.log10(b))){
      return a-b
    } else {
      return b-a
    }
  })
  return arr
}

function frequencySort(arr) {

  let obj = {}

  for (let num of arr) {

    if (!obj[num]) {
      obj[num] = 1
    } else {
      obj[num]++
    }
  }
console.log(obj)

  arr.sort((a,b) => {
      if (obj[a] < obj[b]) {
        return -1
      }
      if (obj[a] === obj[b]) {
        return b - a
      }
  })
  return arr;
};

frequencySort([2, 3, 1, 3, 2])
 // => [1, 3, 3, 2, 2]

// console.log(Math.floor(Math.log10(164)))
// console.log(Math.floor(Math.log10(671)))
module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];
