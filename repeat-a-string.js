function repeatStringNumTimes(str, num) {
  // write your code here
  let newStr = '';
  i = 0;
  while (i < num) {
    newStr += str;
    i++;
  }
  return newStr;
}

module.exports = repeatStringNumTimes;
