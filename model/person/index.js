const person = {
  name: 'John Appleseed',
  age: 19,
}

// person.name // output: John Appleseed 

// // const newPerson = new Person('Adam Somgiet', 19)

// // newPerson.increaseAge(1)
// newPerson.name // output: Adam Somgiet


class Person {
  // TODO: Add a constructor which takes a name and age
  constructor(name, age = 0) { // init() __init
    this._name = name
    this._age = age
  }
  // TODO: Create a getter for name and age
  get name() {
    return this._name
  }

  get age() {
    return this._age
  }
  // TODO: Create a setter for age
  set age(newAge) {
    this._age = newAge // self._age
  }
  // TODO: Write a method that makes the age increment
  incrementAge(number = 1) {
    this._age += number
  }

  decrementAge(number = 1) {
    this._age -= number
  }
  // TODO: Make a static function that takes a person as an argument and console.log all keys
  static logOut(person) {
    const keys = Object.keys(person) // ['_name', '_age']
    console.log('=============\n\tPerson\n=============')
    keys.forEach(key => {
      console.log(`${key}:`, person[key])
    })
    console.log('=============')
  }
}


// const gawee = new Person('Gawee')

// console.log('gawee.name', gawee.name)
// console.log('gawee.age', gawee.age)

// // gawee.age = 4
// gawee.incrementAge(19)
// gawee.incrementAge(6)
// gawee.decrementAge(6)

// console.log('gawee.age', gawee.age)

// Person.logOut(gawee)

// TODO: Export person
module.exports = Person
// TODO: Create a new class named Employee which takes more properties such as position and salary and totalVacationDays
// TODO: For the employee class add an incrementVacationDays method which decrease totalVacationDays by days specified
