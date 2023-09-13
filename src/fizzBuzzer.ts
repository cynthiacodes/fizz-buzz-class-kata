export class FizzBuzzer {
    value: number;
    constructor() {
        this.value = 0;
    }

    next() {
        this.value++;
        if (this.value % 3 === 0) {
            return "Fizz";
        } else {
            return this.value;
        }
    }

    reset() {
        this.value = 0;
    }
}
const myFizzBuzzer = new FizzBuzzer();
console.log(myFizzBuzzer.next()); //1
console.log(myFizzBuzzer.next()); //2
console.log(myFizzBuzzer.next()); //"Fizz"
console.log(myFizzBuzzer.next()); //4
console.log(myFizzBuzzer.next()); //5
console.log(myFizzBuzzer.next()); //"Fizz"
console.log(myFizzBuzzer.next()); //7

myFizzBuzzer.reset();
console.log(myFizzBuzzer.next()); //1...
