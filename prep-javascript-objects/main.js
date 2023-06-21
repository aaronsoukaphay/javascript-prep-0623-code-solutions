const person = {
  firstName: 'Aaron',
  lastName: 'Soukaphay',
  hobby: 'swimming',
};
console.log(person);

const fullName = person.firstName + ' ' + person.lastName + '.';
console.log("The person's name is:", fullName);

person.job = 'Software Engineer' + '.';
console.log("The person's current job is:", person.job);

person['previousJob'] = 'Laboratory Assistant' + '.';
console.log("The person's previous job is:", person['previousJob']);

console.log('The complete person object:', person);
