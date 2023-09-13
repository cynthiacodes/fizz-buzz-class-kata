export class FizzBuzzer {
    value: number;
    constructor() {
        this.value = 0;
    }

    next() {
        this.value++;
        if (this.value % 3 === 0 && this.value % 5 === 0) {
            return "FizzBuzz";
        } else if (this.value % 3 === 0) {
            return "Fizz";
        } else if (this.value % 5 === 0) {
            return "Buzz";
        } else {
            return this.value;
        }
    }

    reset() {
        this.value = 0;
    }
}

export class BizzFuzzer {
    firstWord: string;
    secondWord: string;
    firstNum: number;
    secondNum: number;
    value: number;
    constructor(
        firstWord: string,
        secondWord: string,
        firstNum: number,
        secondNum: number
    ) {
        this.firstWord = firstWord;
        this.secondWord = secondWord;
        this.firstNum = firstNum;
        this.secondNum = secondNum;
        this.value = 0;
    }

    next() {
        this.value++;
        if (
            this.value % this.firstNum === 0 &&
            this.value % this.secondNum === 0
        ) {
            return `${this.firstWord}${this.secondWord}`;
        } else if (this.value % this.firstNum === 0) {
            return this.firstWord;
        } else if (this.value % this.secondNum === 0) {
            return this.secondWord;
        } else {
            return this.value;
        }
    }

    reset() {
        this.value = 0;
    }
}

const myBizzFuzzer = new BizzFuzzer("Boop", "Schnoop", 2, 3);
console.log(myBizzFuzzer.next()); //1
console.log(myBizzFuzzer.next()); //"Boop"
console.log(myBizzFuzzer.next()); //"Schnoop"
console.log(myBizzFuzzer.next()); //"Boop"
console.log(myBizzFuzzer.next()); //5
console.log(myBizzFuzzer.next()); //"BoopSchnoop"

myBizzFuzzer.reset();
console.log(myBizzFuzzer.next()); //1...
