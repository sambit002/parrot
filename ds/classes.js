//this is playground to write a few classes
// get warmed up
class Student {
    constructor (name, grade) {
        this.name = name
        this.grade = grade
    }
    
    static sayMyName() {
        console.log("My name is Sambit")
    }
    // static methods are known as class methods
    // they can be called on classes
    // they cannot be called on objects
    // they are often used to make utility functions
    static fullNames(...args) {
        for (let obj of args) {
            console.log(obj.name + " " + obj.grade)
        }
    }
}

const std = new Student("Sam", "X")
const std2 = new Student("Sammy", "Y")
const std3 = new Student("Sambit", "Z")

Student.sayMyName()
Student.fullNames(std, std2, std3)
// console.log(std.name)