import { FizzBuzzer } from "./fizzBuzzer";

test(".next() method in FizzBuzzer returns Fizz for numbers divisible by 3", () => {
    const myFizzBuzzer = new FizzBuzzer();

    expect(myFizzBuzzer.next()).toBe(1);
    expect(myFizzBuzzer.next()).toBe(2);
    expect(myFizzBuzzer.next()).toBe("Fizz");
});

test(".reset() method in FizzBuzzer resets this.value back to zero so the next() method returns 1", () => {
    const myFizzBuzzer = new FizzBuzzer();

    expect(myFizzBuzzer.next()).toBe(1);
    expect(myFizzBuzzer.next()).toBe(2);
    expect(myFizzBuzzer.next()).toBe("Fizz");
    myFizzBuzzer.reset();
    expect(myFizzBuzzer.next()).toBe(1);
});
