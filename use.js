import JSUtils from "./index.js";

function fakeSimulator() {
    const multiply = (x, y) => x * y;
    const add = (x) => x + x;
    const minus = (x, y) => x - y;

    const call =  JSUtils.curry(multiply);

    console.log(call(3)(2))
}

fakeSimulator()