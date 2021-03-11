// ## Array Cardio Day 2

const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
];

const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
];

// Some and Every Checks

// Array.prototype.some() // is at least one person 19 or older?

//some() long method
const isAdult = people.some(function(person) {
    const currentYear = (new Date()).getFullYear();

    if(currentYear- personYear >= 19) {
        return true
    }
})

//some shorter method
const isAdult = people.some(person => ((new Date()).getFullYear()) - person.year >= 19);
console.log(isAdult);


// Array.prototype.every() // is everyone 19 or older?

// every method tests whether all elements in the array pass the test
const allAdults = people.every(person => ((new Date()).getFullYear()) - person.year >= 19);
console.log(allAdults);



// Array.prototype.find()

// Find method returns the value of the first element in the provided array that satisfies the function


// find the comment with the ID of 823423
// const comment = comments.find(function(comment) {
//   if(comment.id === 823423) {
//     return truel
//   }
// });

// find shorter way
const comment = comments.find(comment => comment.id === 823423);

console.log(index);


// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
const comment = comments.find(comment => comment.id === 823423);
comments.splice(index, 1);