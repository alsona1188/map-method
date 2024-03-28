  
/**
 * To run this file in Gitpod, use the 
 * command node map.js in the terminal
 */

// Using a for loop

let nums = [1, 2, 3, 4, 5];
let results =[];
for (let num of nums){
  results.push(num * 2);
}
console.log(results);

// Using map()

const multiByTwo = function (num){
  return num * 2;

}
const mapResults = nums.map(multiByTwo);
console.log(mapResults);



// Simplified w/ map()

const mapResults2 = nums.map(function(num) {return num * 2 });
console.log (mapResults2)



// Simplfied w/ map() + arrow function

const mapResults1 = nums.map(num => num * 2);
console.log (mapResults1)

// With objects:
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skill: 'JavaScript'
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skill: 'HTML'
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skill: 'CSS'
  },
];

const studentsWithIds = students.map(student => [student.name, student.id]);

console.log(studentsWithIds);

// Iwant to add an age property to each student and return an array identical 
// to the original but where each student has an age as well

const ages = [25, 36, 45];

const studentsWithAge = students.map((student, index) => ({
  ...student,
  age: ages[index]
}));

console.log(studentsWithAge);