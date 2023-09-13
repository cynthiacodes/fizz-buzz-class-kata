import { BizzFuzzer, FizzBuzzer } from "./fizzBuzzer";

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

test("BizzFuzzer, which takes two words to be used in place of “fizz” and “buzz”, and two numbers to be used in place of 3 and 5", () => {
    const myBizzFuzzer = new BizzFuzzer("Boop", "Schnoop", 2, 3);

    expect(myBizzFuzzer.next()).toBe(1);
    expect(myBizzFuzzer.next()).toBe("Boop");
    expect(myBizzFuzzer.next()).toBe("Schnoop");
    expect(myBizzFuzzer.next()).toBe("Boop");
    expect(myBizzFuzzer.next()).toBe(5);
    expect(myBizzFuzzer.next()).toBe("BoopSchnoop");

    myBizzFuzzer.reset();
    expect(myBizzFuzzer.next()).toBe(1);
});
