import { FizzBuzzer } from "./fizzBuzzer";

test(".next() method in FizzBuzzer returns Fizz for numbers divisible by 3", () => {
    const myFizzBuzzer = new FizzBuzzer();

    expect(myFizzBuzzer.next()).toBe(1);
    expect(myFizzBuzzer.next()).toBe(2);
    expect(myFizzBuzzer.next()).toBe("Fizz");
});
