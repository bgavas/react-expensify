//
// Object destructuring
//

const person = {
    // name: 'Bro',
    age: 26,
    location: {
        city: 'Istanbul',
        temp: '23'
    }
};

// const name = person.name;
// const age = person.age;
const {name: firstName = 'Anonymous', age} = person;
console.log(`${firstName} is ${age}`);

const {temp: temperature, city} = person.location;
// if (person.location.temp && person.location.city) {
//     console.log(`It's ${person.location.temp} in ${person.location.city}`);
// }
if (temperature && city) {
    console.log(`It's ${temperature} in ${city}`);
}


//
// Array destructuring
//

// const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
const address = ['1299 S Juniper Street', 'Philadelphia'];

const [, city2, state = 'New York'] = address;
// const [/*street*/, city2, state/*, zip*/] = address;

console.log(`You are in ${city2}, ${state}`);