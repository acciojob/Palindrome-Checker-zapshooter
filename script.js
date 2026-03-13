function palindrome(str) {
  // Normalize: lowercase and remove non-alphanumeric characters
  str = str.toLowerCase().replace(/[^a-z0-9]/g, '');

  let i = 0;
  let j = str.length; // Bug fix: was referencing undefined `s` instead of `str`

  while (i < j) {
    if (str[i] === str[j - 1]) {
      i++;
      j--;
    } else {
      return false; // Bug fix: simplified, no need for else-if
    }
  }
  return true;
}

module.exports = palindrome;