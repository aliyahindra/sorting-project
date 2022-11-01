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
  // Your code here
}

function frequencySort(arr) {
  // Your code here
}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];
