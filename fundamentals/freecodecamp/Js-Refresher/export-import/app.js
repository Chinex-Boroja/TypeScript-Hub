import person from "./person.js";
import prs from './person.js'
import { baseData} from '.utility.js'
import { clean } from '.utility.js'


class Human {
    constructor() {
        this.gender = "male"
    }

    printGender() {
        console.log(this.gender)
    }
}

class Person extends Human {
    constructor() {
        super()
        this.name = "Max"
    }

    printMyName() {
        console.log(this.name)
    }
}

const person = new Person()
person.printMyName()
person.printGender()