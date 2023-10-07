function isPalindrome(word) {
  // Write your algorithm here
  //if the input string is the same after i reverse it should return true
  //if the input string is not the same after reversal it should return false.

  let lowercase = word.toLowerCase();
  if (lowercase === lowercase.split("").reverse().join("")) return "true";
  else if (!lowercase === lowercase.split("").reverse().join(""))
    return "false";
}

/* 
  Add your pseudocode here

  reverse input string
    if reverse is same as input
    return true
    else return false
*/

/*
  Add written explanation of your solution here


*/

// You can run `node index.js` to view these console logs
// if (require.main === module) {
//   // add your own custom tests in here
//   console.log("Expecting: true");
//   console.log("=>", isPalindrome("racecar"));

//   console.log("");

//   console.log("Expecting: false");
//   console.log("=>", isPalindrome("robot"));
// }

// module.exports = isPalindrome;
