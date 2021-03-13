const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];
function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
}

// Regular
console.log('Hello');

// Interpolated
console.log('Hello I am a %s string!', '💩');

// Styled
console.log('%c I am some text', 'font-size:50px; background:red;');

// warning!
console.warn('Oh no');

// Error :|
console.error('Theres an error');

// Info
console.info('This is some information');

// Testing
console.assert(1 === 2, 'That is wrong');

// clearing
//console.clear();


// Viewing DOM Elements
const p = document.querySelector('p');
console.log(p);

// Grouping together
dogs.forEach(dog => {
    console.group(`${dog.name}`);
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.log(`${dog.name} is ${dog.age * 7} dog years`);
    console.groupEnd(`${dog.name}`);


});

// counting
console.count('harry');
console.count('harry');
console.count('harry');

// timing
console.time('fetching data');

fetch('https://api.github.com/users/HarryJonesdev')
    .then(data => data.json())
    .then(data => {
    console.timeEnd('fetching data');
    console.log(data);
});

console.table(dogs);