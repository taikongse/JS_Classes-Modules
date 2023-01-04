const Person = require("./model/person/index.js")
// import Person from './model/person'
class Employee extends Person {
  constructor(name, age, position, salary, totalVacationDays=20) {
    super(name, age)
    this._position = position
    this._salary = salary
    this._totalVacationDays = totalVacationDays
  }
// TODO: For the employee class add a decrementVacationDays method which decrease totalVacationDays by days specified


  class Employee extends Person {
  constructor(name, age, position, salary, totalBonus=0) {
    super(name, age)
    this._position = position
    this._salary = salary
    this._totalBonus = totalBonus
  }


  // TODO: Create a getter for name and age
  get bonus() {
    return this._totalBonus
  }

  // TODO: Create a setter for age
  set bonus(newBonus) {
    this._totalBonus = newBonus // self._age
  }
  
  // TODO: Write a method that makes the age increment
  incrementBonus(number = 1) {
    this._totalBonus += number
  }

  decrementBonus(number = 1) {
    this._totalBonus -= number
  }  
  
  static logOut(bonus) {
    const keys = Object.keys(bonus) // ['_name', '_age']
    console.log('=============\n\bonus\n=============')
    keys.forEach(key => {
      console.log(`${key}:`, bonus[key])
    })
    console.log('=============')
  }
}





const employee = new Employee('Gawee', 19, 'Instructor', 0)

Person.logOut(employee)

// TODO: Create a new class named Employee which takes more properties such as position and salary and totalVacationDays

