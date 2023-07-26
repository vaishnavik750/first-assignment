//Assignment 1: Array Operations
let fruits = ['apple','banana','orange']
fruits.splice(0,1)
fruits.push('grape')
fruits.splice(1,1,'pear')
console.log(fruits)

//Assignment 2: Object Operations
let person = {
    name : 'John',
    age : 30,
    city : 'New York'
}
delete person.age
person.job = 'Engineer'
person.city = 'San Francisco'
console.log(person)

//Assignment 3: Array of Objects Operations
//Create an empty array called 'cars'.
let cars =[]
//Add three car objects to the 'cars' array.
cars.push({
    make:'Toyota',
    model:'Camry',
    year:2018
})
cars.push({
    make:'Toyota',
    model:'Camry',
    year:2018
})
cars.push({
    make:'Toyota',
    model:'Camry',
    year:2018
})
//Remove the first car object from the 'cars' array.
cars.shift()
//Add new car object to the 'cars' array.
cars.push({
    make: 'Honda',
    model: 'Civic',
    year: 2020
})
//Update the model property of second car object to 'Accord'.
cars[1].model = 'Accord'
console.log(cars)