// enum ContractStatus {
//     Permanent = 1,
//     Temp,Apprentice
// }

// let employeeStatus: ContractStatus = ContractStatus.Temp
// console.log(employeeStatus)
// console.log(ContractStatus[employeeStatus])

// let randomValue: any = 10;
// randomValue = true;      // OK
// randomValue = 'Mateo';   // OK

// console.log(randomValue.name);  // Logs "undefined" to the console
// randomValue();                  // Returns "randomValue is not a function" error
// randomValue.toUpperCase();      // Returns "randomValue is not a function" error

// let randomValue: unknown = 10;
// randomValue = true;
// randomValue = 'Mateo';

// console.log(randomValue.name);  // Error: Object is of type unknown
// randomValue();                  // Error: Object is of type unknown
// randomValue.toUpperCase();      // Error: Object is of type unknown

// let randomValue: unknown = 10;

// randomValue = true;
// randomValue = 'Mateo';

// if(typeof randomValue === 'string') {
//     console.log((randomValue as string).toUpperCase());
//     console.log((<string>randomValue).toUpperCase());
// }

// interface Employee {
//     employeeID: number,
//     age: number
// }

// interface Manager {
//     stockPlan: boolean
// }

// type ManagementEmpoyee = Employee & Manager

// let newManager : ManagementEmpoyee = {
//     employeeID: 10,
//     age: 26,
//     stockPlan: true
// }

// let person1: [string, number] = ['rohit', 1]
// let person2: [string, number] = [1, 'rohit']
// let person3: [string, number] = ['rohit', 10,]

// interface Employee {
//     firstName: string;
//     lastName: string;
//     fullName(): string;
// }

// let employee: Employee = {
//     firstName : "Emil",
//     lastName: "Andersson",
//     fullName(): string {
//         return this.firstName + " " + this.lastName;
//     }
// }

// console.log(employee.fullName())

// interface IceCream {
//     flovor: string;
//     scoops: number;
//     instructions?: string;
// }

// interface Sundae extends IceCream {
//     sauce: 'chocolate' | 'caramel' | 'strawberry';
//     nuts? : boolean;
//     whippedCream?: boolean;
//     instructions?: string;
// }

// let iceCream : Sundae = {
//     flovor: 'vanilla',
//     scoops: 3,
//     sauce: 'chocolate',
//     nuts: true
// }
// console.log(iceCream.flovor)

// function tooManyScoops(dessert: Sundae) {
//     if(dessert.scoops >= 4) {
//         return dessert.scoops + ' are lot of scoops'
//     } else {
//         return 'Your order will be ready soon'
//     }
// }

// console.log(tooManyScoops({scoops: 5,flovor: 'mango',sauce: 'chocolate'}))

// interface IceCreamArray {
//     [index: number]: string;
// }

// let myIceCream : IceCreamArray;
// myIceCream = ['vanilla', 'choco', 'milk'];
// let myStr: string = myIceCream[0]
// console.log(myStr)

// const fetchURL = 'https://jsonplaceholder.typicode.com/posts'
// // Interface describing the shape of our json data
// interface Post {
//     userId: number;
//     id: number;
//     title: string;
//     body: string;
// }
// async function fetchPosts(url: string) {
//     let response = await fetch(url);
//     let body = await response.json();
//     return body as Post[];
// }
// async function showPost() {
//     let posts = await fetchPosts(fetchURL);
//     // Display the contents of the first item in the response
//     let post = posts[0];
//     console.log('Post #' + post.id)
//     // If the userId is 1, then display a note that it's an administrator
//     console.log('Author: ' + (post.userId === 1 ? "Administrator" : post.userId.toString()))
//     console.log('Title: ' + post.title)
//     console.log('Body: ' + post.body)
// }

// showPost();

// function addNumbers (x: number, y: number): number {
//    return x + y;
// }
// addNumbers(1, 2);

// function displayAlert(message: string) {
//     alert('The message is ' + message);
// }

// function sum(input: number[]): number {
//     let total: number =  0;
//     for(let count = 0; count < input.length; count++) {
//         if(isNaN(input[count])){
//             continue;
//         }
//         total += Number(input[count]);
//     }
//     return total;
// }

// console.log(sum([5,10,20]))

// let addAllNumbers = (firstNumber: number, ...restOfNumbers: number[]): number => {
//    let total: number =  firstNumber;
//    for(let counter = 0; counter < restOfNumbers.length; counter++) {
//       if(isNaN(restOfNumbers[counter])){
//          continue;
//       }
//       total += Number(restOfNumbers[counter]);
//    }
//    return total;
// }

// addAllNumbers(1, 2, 3, 4, 5, 6, 7);  // returns 28
// addAllNumbers(2);                    // returns 2
// addAllNumbers(2, 3, "three");        // flags error due to data type at design time, returns 5

// interface Message {
//     text: string;
//     sender: string;
// }

// function displayMessage({sender,text}: Message): void {
//     console.log('Message from ' + sender + ': ' + text)
// }

// displayMessage({text:'welcome to the universe',sender: 'John'})

// let addThreeNumbers = (x: number, y: number, z: number): number => x + y + z;

// addThreeNumbers(10, 20)
// addThreeNumbers(10, 20, 30, 40)

// let subtractThreeNumbers = (x: number, y: number, z: number = 100): number => x - y - z;

// subtractThreeNumbers(10, 20);       // returns -130 because 'z' has been assigned the value 100
// subtractThreeNumbers(10, 20, 15);   // returns -45

// type calculator = (x: number, y: number) => number;
// interface Calculator {
//     (x: number, y: number) : number
// }

// let addNumbers: Calculator = (x: number, y: number): number => x + y;
// let subtractNumbers: Calculator = (x: number, y: number): number => x - y;

// console.log(addNumbers(1, 2));
// console.log(subtractNumbers(1, 2));

// let doCalculation = (operation: 'add' | 'subtract'): Calculator => {
//     if(operation === 'add') {
//         return addNumbers
//     }
//     return subtractNumbers
// }

// console.log(doCalculation('add')(1, 2))

// class Car {
//     // Properties
//     private static numberOfCars: number = 0;
//     private _make: string;
//     private _color: string;
//     private _doors: number;

//     // Constructor
//     constructor(make: string, color: string, doors = 4) {
//         this._make = make;
//         this._color = color;
//         if ((doors % 2) === 0) {
//             this._doors = doors;
//         } else {
//             throw new Error('Doors must be an even number');
//         }
//         Car.numberOfCars++;
//     }

//     public static getNumberOfCars(): number {
//         return Car.numberOfCars;
//     }

//     // Accessors
//     get make() {
//         return this._make;
//     }
//     set make(make) {
//         this._make = make;
//     }

//     get color() {
//         return 'The color of the car is ' + this._color;
//     }
//     set color(color) {
//         this._color = color;
//     }

//     get doors() {
//         return this._doors;
//     }
//     set doors(doors) {
//         if ((doors % 2) === 0) {
//             this._doors = doors;
//         } else {
//             throw new Error('Doors must be an even number');
//         }
//     }

//     // Methods
//     accelerate(speed: number): string {
//         return `${this.worker()} is accelerating to ${speed} MPH.`
//     }
//     brake(): string {
//         return `${this.worker()} is braking with the standard braking system.`
//     }
//     turn(direction: 'left' | 'right'): string {
//         return `${this.worker()} is turning ${direction}`;
//     }
//     // This function performs work for the other method functions
//     protected worker(): string {
//         return this._make;
//     }

// }

// let myCar1 = new Car('Cool Car Company', 'blue', 2);  // Instantiates the Car object with all parameters
// console.log(myCar1.color);
// console.log(myCar1.accelerate(35));
// console.log(myCar1.brake());
// console.log(myCar1.turn('right'));

// let myCar2 = new Car('Galaxy Motors', 'red', 4);

// let myCar3 = new Car('Galaxy Motors', 'gray');
// console.log(myCar3.doors);  // returns 4, the default value

// console.log(Car.getNumberOfCars());


// class ElectricCar extends Car {
//     // Properties unique to ElectricCar
//     private _range: number;
//     // Constructor
//     constructor(make: string, color: string, range: number, doors = 2) {
//         super(make, color, doors);
//         this._range = range;
//     }

//     // Accessors
//     get range() {
//         return this._range;
//     }
//     set range(range) {
//         this._range = range;
//     }

//     // Methods
//     charge() {
//         console.log(this.worker() + " is charging.")
//     }

//     brake(): string {
//         return this.worker() + ' is braking with the regenerative braking system.';
//     }
// }

// let spark = new ElectricCar('Spark Motors', 'silver', 124, 2);
// let eCar = new ElectricCar('Electric Car Co.', 'black', 263);
// console.log(eCar.doors);         // returns the default, 2
// spark.charge();                  // returns "Spark Motors is charging"
// console.log(spark.brake())

// interface Vehicle {
//     make: string;
//     color: string;
//     doors: number;
//     accelerate(speed: number): string;
//     brake(): string;
//     turn(direction: 'left' | 'right'): string;
// }


// class Carro implements Vehicle {
//     // Properties
//     private static numberOfCars: number = 0;
//     private _make: string;
//     private _color: string;
//     private _doors: number;

//     // Constructor
//     constructor(make: string, color: string, doors = 4) {
//         this._make = make;
//         this._color = color;
//         if ((doors % 2) === 0) {
//             this._doors = doors;
//         } else {
//             throw new Error('Doors must be an even number');
//         }
//         Carro.numberOfCars++;
//     }

//     public static getNumberOfCars(): number {
//         return Carro.numberOfCars;
//     }

//     // Accessors
//     get make() {
//         return this._make;
//     }
//     set make(make) {
//         this._make = make;
//     }

//     get color() {
//         return 'The color of the car is ' + this._color;
//     }
//     set color(color) {
//         this._color = color;
//     }

//     get doors() {
//         return this._doors;
//     }
//     set doors(doors) {
//         if ((doors % 2) === 0) {
//             this._doors = doors;
//         } else {
//             throw new Error('Doors must be an even number');
//         }
//     }

//     // Methods
//     accelerate(speed: number): string {
//         return `${this.worker()} is accelerating to ${speed} MPH.`
//     }
//     brake(): string {
//         return `${this.worker()} is braking with the standard braking system.`
//     }
//     turn(direction: 'left' | 'right'): string {
//         return `${this.worker()} is turning ${direction}`;
//     }
//     // This function performs work for the other method functions
//     protected worker(): string {
//         return this._make;
//     }

// }

// function getArray(items : any[]) : any[] {
//     return new Array().concat(items);
// }

// using Generics
// function getArray<T>(items : T[]) : T[] {
//     return new Array<T>().concat(items);
// }

// let numberArray = getArray<number>([5, 10, 15, 20]);
// numberArray.push(25);                      // OK
// numberArray.push('This is not a number');  // Generates a compile time type check error

// let stringArray = getArray<string>(['Cats', 'Dogs', 'Birds']);
// stringArray.push('Rabbits');               // OK
// stringArray.push(30);                      // Generates a compile time type check error


// function identity<T, U>(value: T, message: U) : T {
//     console.log(message);
//     return value
// }

// let returnNumber = identity<number, string>(100, 'Hello!');
// let returnString = identity<string, string>('100', 'Hola!');
// let returnBoolean = identity<boolean, string>(true, 'Bonjour!');
// returnNumber = returnNumber * 100;   // OK
// returnString = returnString * 100;   // Error: Type 'number' not assignable to type 'string'
// returnBoolean = returnBoolean * 100; // Error: Type 'number' not assignable to type 'boolean'

// function identity<T, U> (value: T, message: U) : T {
//     let result: T = value + value;    // Error
//     console.log(message);
//     return result
// }
// type ValidTypes = string | number;

// function identity<T extends ValidTypes, U>(value: T, message: U): T {
//     let result: T = value + value;
//     console.log(message);
//     return result;
// }

// let returnNumber = identity<number, string>(100, 'Hello!');      // OK
// let returnString = identity<string, string>('100', 'Hola!');     // OK
// let returnBoolean = identity<boolean, string>(true, 'Bonjour!'); // Error: Type 'boolean' does not satisfy the constraint 'ValidTypes'.


// function getPets<T, K extends keyof T>(pet: T, key: K) {
//     return pet[key]
// }

// let pets1 = {cats: 3, dogs: 4, parrot: 8, fish: 1}
// let pets2 = { 1: "cats", 2: "dogs", 3: "parrots", 4: "fish"}

// console.log(getPets(pets1, 'cats'))
// console.log(getPets(pets2, 1))

// type ValidTypes = string | number;
// function identity<T extends ValidTypes, U> (value: T, message: U) {   // Return type is inferred
//     let result: ValidTypes = '';
//     let typeValue: string = typeof value;

//     if (typeof value === 'number') {           // Is it a number?
//         result = value + value;                // OK
//     } else if (typeof value === 'string') {    // Is it a string?
//         result = value + value;                // OK
//     }

//     console.log(`The message is ${message} and the function returns a ${typeValue} value of ${result}`);

//     return result
// }

// let numberValue = identity<number, string>(100, 'Hello');
// let stringValue = identity<string, string>('100', 'Hello');

// console.log(numberValue);       // Returns 200
// console.log(stringValue);       // Returns 100100

// interface Identity<T, U> {
//     value: T;
//     message: U
// }

// let returnNumber: Identity<number, string> = {
//     value: 25,
//     message: "Hello world!"
// }

// let returnString: Identity<string, number> = {
//     value: "Hello world!",
//     message: 25
// }

// interface ProcessIdentity<T, U> {
//     (value: T, message: U): T;
// }

// function processIdentity<T, U>(value: T, message: U): T {
//     console.log(message);
//     return value;
// }

// let processor: ProcessIdentity<number, string> = processIdentity;
// let returnNumber1 = processor(100, 'Hello!');   // OK
// let returnString1 = processor('Hello!', 100);   // Type check error

// interface ProcessIdentity<T, U> {
//     value: T;
//     message: U;
//     process(): T;
// }

// class processIdentity<X, Y> implements ProcessIdentity<X, Y> {
//     value: X;
//     message: Y;
//     constructor(val: X, msg: Y) {
//         this.value = val;
//         this.message = msg;
//     }

//     process(): X {
//         console.log(this.message);
//         return this.value;
//     }
// }

// let processor = new processIdentity<number, string>(100, 'Hello');
// processor.process();           // Displays 'Hello'
// processor.value = '100';       // Type check error

// class processIdentity<X, Y> {
//     private _value: X;
//     private _message: Y;

//     constructor(value: X, message: Y) {
//         this._value = value;
//         this._message = message;
//     }

//     getIdentity(): X {
//         console.log(this._message);
//         return this._value
//     }
// }

// let processor = new processIdentity<number, string>(100, 'Hello');
// processor.getIdentity();      // Displays 'Hello'

// class Car {
//     make: string = 'Generic Car';
//     doors: number = 4;
// }
// class ElectricCar extends Car {
//     make = 'Electric Car';
//     doors = 4
// }
// class Truck extends Car {
//     make = 'Truck';
//     doors = 2
// }
// function accelerate<T extends Car> (car: T): T {
//     console.log(`All ${car.doors} doors are closed.`);
//     console.log(`The ${car.make} is now accelerating!`)
//     return car
// }

// let myElectricCar = new ElectricCar;
// accelerate<ElectricCar>(myElectricCar);
// let myTruck = new Truck;
// accelerate<Truck>(myTruck);