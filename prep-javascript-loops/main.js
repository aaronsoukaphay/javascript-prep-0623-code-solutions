// create your loops here.
function whileLoop1() {
  const array1 = [];
  let i = 0;
  while (i < 10) {
    array1.push(i);
    i++;
  }
  return array1;
}

console.log('whileLoop1 output', whileLoop1());

function whileLoop2() {
  const array2 = [];
  let i = 0;
  while (i < 20) {
    array2.push(i);
    i += 2;
  }
  return array2;
}

console.log('whileLoop2 output', whileLoop2());

function forLoop1() {
  const array3 = [];
  for (let i = 0; i < 10; i++) {
    array3.push(i);
  }
  return array3;
}

console.log('forLoop1 output', forLoop1());

function forLoop2() {
  for (let i = 100; i > 0; i--) {
    console.log('Time till explosion ' + i + '!');
  }
}

console.log('forLoop2 output', forLoop2());

const object = {
  name: 'Ada LoveLace',
  age: 'classic',
  hobby: 'computation',
  invention: 'analytical engine',
};

function forInLoop1(object) {
  const array4 = [];
  for (const property in object) {
    array4.push(property);
  }
  return array4;
}

console.log('forInLoop1 output', forInLoop1(object));

function forInLoop2(object) {
  const array5 = [];
  for (const property in object) {
    array5.push(object[property]);
  }
  return array5;
}

console.log('forInLoop2 output', forInLoop2(object));
