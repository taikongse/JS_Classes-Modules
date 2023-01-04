// class Person {
//   // TODO: Add a constructor which takes a name and age
//   constructor(name, age=0) { // init() __init
//     this._name = name
//     this._age = age
//   }
//   // TODO: Create a getter for name and age
//   get name() {
//     return this._name
//   }

//   get age() {
//     return this._age
//   }
//   // TODO: Create a setter for age
//   set age(newAge) {
//     this._age = newAge // self._age
//   }
//   // TODO: Write a method that makes the age increment
//   incrementAge(number=1) {
//     this._age += number
//   }

//   decrementAge(number=1) {
//     this._age -= number
//   }
//   // TODO: Make a static function that takes a person as an argument and console.log all keys
//   static logOut(person) {
//     const keys = Object.keys(person)
//     // ['_name', '_age']
//   console.log('=============\n\tPerson\n=============')
//     keys.forEach(key => {
//       console.log(`${key}:`, person[key])
//     })
//     console.log('=============')
//   }
// }

// //

// //

// const gawee = new Person('Gawee')

// console.log('gawee.name', gawee.name)
// console.log('gawee.age', gawee.age)

// // gawee.age = 4
// gawee.incrementAge(19)
// gawee.incrementAge(6)
// gawee.decrementAge(6)

// console.log('gawee.age', gawee.age)

// Person.logOut(gawee)

// const Person = require("./model/person/index.js")
// // import Person from './model/person'
// class Employee extends Person {
// constructor(name, age, position, salary, totalVacationDays=20) {
//   super(name, age)
//   this._position = position
//   this._salary = salary
//   this._totalVacationDays = totalVacationDays
// }
// }
// TODO: For the employee class add a decrementVacationDays method which decrease totalVacationDays by days specified

// class Person {
// //   // TODO: Add a constructor which takes a name and age
// constructor(name, age=0) { // init() __init
//  this._name = name
//  this._age = age
//   }

const Person = require("./model/person/index.js")

class Employee extends Person {
  constructor(name, age, position, salary, totalBonus = 50000) {
    super(name, age)
    this._position = position
    this._salary = salary
    this._totalBonus = totalBonus
  }
  // TODO: Create a getter for name and age
  get totalBonus() {
    return this._totalBonus
  }

  get salary() {
    return this._salary
  }

  set salary(newSalary) {
    if(typeof newSalary !== 'number')
      return ;
    this._salary = newSalary
  }
  
  increaseSalary(amount) {
    this._salary += amount
  }

  decreaseSalary(amount) {
    this._salary -= amount
  }

  // TODO: Create a setter for age
  set bonus(newBonus) {
    this._totalBonus = newBonus // self._age
  }

  // set salary(newSalary) {
  //   this._salary = newSalary
  // }
  
  // TODO: Write a method that makes the age increment

  // incrementSalary(number = 1) {
  //   this._salary += number
  // }

  // decrementSalary(number = 1) {
  //   this.salary -= number
  // }
  
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

console.log(Employee)

const gawee = new Employee('Prawit', 60, 'King of Mairoo', 30000, 10000)
// console.log('gawee.name :', gawee.name)
// console.log('gawee.age :', gawee.age)
console.log('gawee info', gawee)

gawee.incrementBonus(2000)
gawee.increaseSalary(10000)
gawee.decrementBonus(10000)
// gawee.incrementAge(20)
// gawee.incrementSalary(20000)
// gawee.decrementSalary(10000)


console.log('gawee performance', gawee)
gawee.decreaseSalary(200)
console.log('gawee.salary: ', gawee.salary)

gawee.salary = 'high'
console.log('gawee.salary: ', gawee.salary)

gawee.incrementAge(3)
console.log('gawee.age :' , gawee.age)

// เพิ่มตังน้อยจังครับ
//น่าจะรันได้แล้วนะคะ 
// นับโบนัสเป็นเดือนค่ะ 555555
// ลองปรับเงินเดือนดูหน่อยครับจากตอนแรก 30000 เป็น 40000
// ขึ้นเงินเดือนให้ละค่า

// ***ต่อไปอธิบายให้เพื่อนในห้องฟังนะ***
// ทำไปเรื่อยอะ ไม่รู้เหมียนกัน ก๊อปเค้ามา

//กินข้าวก่อนๆๆๆค่อยมาทำ เดี๋ยวรอดู
//โอเคค่า

//ขอบคุณคนแก้บัคได้ค้าบ ^^


// const employee = new Employee('Gawee', 19, 'Instructor', 0)

// Person.logOut(employee)

// TODO: Create a new class named Employee which takes more properties such as position and salary and totalVacationDays