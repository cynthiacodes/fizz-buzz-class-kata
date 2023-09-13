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
