/* exported getWords */
function getWords(string) {
  if (string) {
    string = string.split(' ');
    return string;
  } else {
    return [];
  }
}
