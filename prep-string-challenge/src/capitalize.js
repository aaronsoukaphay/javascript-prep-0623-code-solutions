/* exported capitalize */
function capitalize(word) {
  const capitalLetter = word.charAt(0).toUpperCase();
  const substring = word.slice(1).toLowerCase();
  return capitalLetter + substring;
}
