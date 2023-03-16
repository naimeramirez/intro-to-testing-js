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

