// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function sayHello(name) {
    if ((name === true) || (name === false)) {
        return "Hello, World!";
    } else {
        return "Hello, " + name + "!";
    }
}

function isFive(num) {
    if (num === 5) {
        return true;
    } else {
        return false;
    }
}

function isEven(num) {
    if ((typeof num !== "boolean") && (num % 2 === 0)) {
        return true;
    } else {
        return false;
    }
}

function isVowel(x) {
    if (typeof x !== "string") {
        return false;
    } else if (x.toLowerCase() === "a" || x.toLowerCase() === "e" || x.toLowerCase() === "i" || x.toLowerCase() === "o" || x.toLowerCase() === "u") {
        return true;
    } else {
        return false;
    }
}

