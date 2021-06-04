// https://www.youtube.com/watch?v=41GSinwoMYA
console.log(`=======================- Array -===============================`);
const names = ['Max', 'Manu', 'Julie', 'Max'];
// Index starts at zero
console.log(names.length);

const JulieIndex = names.findIndex(el => el === 'Julie');

names.splice(2, 1);
console.log(names);
console.log(`=======================- set -===============================`);
const ids = new Set();

ids.add('abc');
ids.add(1);
ids.add('bb2');
ids.add(1);

for (const el of ids) console.log(el, 'in ids');

console.log(ids.has('abc'));

ids.delete('bb2');

console.log(ids);
console.log(`=======================- Object -===============================`);
const person = {
    firstName: 'Max', age: 31, hobbies: ['Sports', 'Cooking'], age: 32, greet() {
        console.log(`Hi, I am ${this.firstName}`);
    }
};

person.lastName = 'Schwarz';
console.log(person.lastName);

delete person.age;

console.log(person);
// =======================- Maps -===============================
/*
Ordered key-value pairs of data
Element access via key
Iterable (you car use the (for-of loop))
Keys are unique, values are not
Keys can be anythin (INCL. REFERENCE values like arrays)
Pure data storage, optimized for data access
*/ 
const resultData = new Map();

resultData.set('average', 1.53);
resultData.set('lastResult', null);

const germany = {name: 'Germany', population: 82};

resultData.set(germany, 0.89);

for (const el of resultData) console.log(el);

resultData.set('average', 33.89)
console.log(resultData);
console.log(resultData.get('average'));
console.log(resultData.average);

resultData.delete(germany)
console.log(resultData);

// =======================- Objects vs Maps -===============================
/*
    Object - very versatile construce and data storage in JavaScript
    Object - Must-use if you want to add extra functionality
    Maps - Focused on data storage and access
    Maps - Can simplify and improve data access compared to objects
*/ 
