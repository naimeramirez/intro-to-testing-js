// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

//Unit tests for sayHello function
describe('sayHello', function () {
    it('should be a defined function', function () {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function () {
        expect(typeof sayHello()).toBe('string');
    });
    it('should should return the string "Hello, Jane!" when executed', function () {
        expect(sayHello("Jane")).toBe("Hello, Jane!")
    });
    it('should should return the string "Hello, Alex!" when executed', function () {
        expect(sayHello("Alex")).toBe("Hello, Alex!")
    });
    it('should should return the string "Hello, Pat!" when executed', function () {
        expect(sayHello("Pat")).toBe("Hello, Pat!")
    });
    it('should return the string "Hello, World!" when passed a value of true or false', function() {
        expect(sayHello(true)).toBe("Hello, World!");
        expect(sayHello(false)).toBe("Hello, World!");
    });
});

describe('isFive', function () {
    it('should be a defined function', function () {
        expect(typeof isFive).toBe('function');
    });
    it('should return a boolean when called', function () {
        expect(typeof isFive()).toBe('boolean');
    });
    it('should return true when passed a value of 5', function () {
        expect(isFive(5)).toBe(true);
    });
    it('should return false when passed a string', function () {
        expect(isFive("5")).toBe(false);
    });
});

describe('isEven', function () {
    it('should be a defined function', function () {
        expect(typeof isEven).toBe('function');
    });
    it('should return a boolean when called', function () {
        expect(typeof isEven()).toBe('boolean');
    });
    it('should return true when passed the value of 2', function () {
        expect(isEven(2)).toBe(true);
    });
    it('should return true when passed the value of -4', function () {
        expect(isEven(-4)).toBe(true);
    });
    it('should return false when passed the value of 3', function () {
        expect(isEven(3)).toBe(false);
    });
    it('should return false when passed the value of "banana"', function () {
        expect(isEven("banana")).toBe(false);
    });
    it('should return true when passed the value of "8"', function () {
        expect(isEven("8")).toBe(true);
    });
    it('should return false when passed the value of Infinity', function () {
        expect(isEven(Infinity)).toBe(false);
    });
    it('should return false when called with a boolean input of true or false', function () {
        expect(isEven(true)).toBe(false);
        expect(isEven(false)).toBe(false);
    });
    it('should return false when called without an argument', function () {
        expect(isEven()).toBe(false);
    });
});

describe('isVowel', function() {
    it('should be a defined function', function() {
        expect(typeof isVowel).toBe('function');
    });
    it('should return a boolean when called', function() {
        expect(typeof isVowel()).toBe("boolean");
    });
    it('should return true when passed a value of "a"', function() {
        expect(isVowel("a")).toBe(true);
    });
    it('should return true when passed a value of "A"', function() {
        expect(isVowel("A")).toBe(true);
    });
    it('should return false when passed a value of "y"', function() {
        expect(isVowel("y")).toBe(false);
    });
    it('should return false when passed a value of 4', function() {
        expect(isVowel(4)).toBe(false);
    });
    it('should return false when passed a value of "banana"', function() {
        expect(isVowel("banana")).toBe(false);
    });
    it('should return false when called without an argument', function() {
        expect(isVowel()).toBe(false);
    });
    it('should return false when called with a boolean input of true or false', function () {
        expect(isVowel(true)).toBe(false);
        expect(isVowel(false)).toBe(false);
    });
});

describe('add', function() {
    it('should be a defined function', function() {
        expect(typeof add).toBe('function');
    });
    it('should return 5 when passed the values 2, 3', function() {
        expect(add(2, 3)).toBe(5);
    });
    it('should return -12 when passed the values -3, -9', function() {
        expect(add(-3, -9)).toBe(-12);
    });
    it('should return 11 when passed the values "5", 6', function() {
        expect(add("5", 6)).toBe(11);
    });
    it('should return 6 when passed the values "-4", "10"', function() {
        expect(add("-4", "10")).toBe(6);
    });
    it('should return "NaN" when passed the values "banana", "split"', function() {
        expect(add("banana", "split")).toBe("NaN");
    });
    it('should return "NaN" when passed the values 2, "apples"', function() {
        expect(add(2, "apples")).toBe("NaN");
    });
    it('should return "NaN" when called without an argument', function() {
        expect(add()).toBe("NaN");
    });
});