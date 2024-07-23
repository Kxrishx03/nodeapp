 interface User {
    firstName:string,
    lastName:string,
    age:number,
    greet(phrase:string):void
}


function isLegal(user:User):boolean {
   
    if(user.age >= 18){
        return true;
    } else {
        return false;
    }
}

;

//Implementing a class

class Employee implements User {
    firstName: string;
    lastName: string;
    age: number;

    constructor(fn:string,ln:string,age:number) {
        this.firstName = fn;
        this.lastName  = ln,
        this.age       = age
    }

    greet(phrase: string): void {
        console.log(`${phrase} ${this.firstName}`);
    }

}

const e = new Employee("Karishma","Mandal",18);
console.log(e.greet("Hello everyone"));


//TYPES

type greetArg = number | string ;

function Greeetings ( id: greetArg):void{
    console.log("Hello" + id);
}

//Intersection

type Employees = {
    name: string,
    startDate:number
}
type Manager = {
    name : string,
    department :string
} 

type teamLeader = Employees & Manager;


//enums - virtual concepts

enum Direction {
    Up,
    Down,
    Left,
    Right
}

function dosmth(keywords:Direction){

    if(keywords == Direction.Up){
        console.log("Move up");
    }
}

dosmth(Direction.Up);


//Generics

function identity<T>(arg:T){
    return arg;
}

let output = identity<string>("Karishma");
let output1 = identity<number>(12);


function getFirstElement<T>(arr:T[]){
    return arr[0];
}

console.log(getFirstElement<string>(['Kar','Ish','Ma']));