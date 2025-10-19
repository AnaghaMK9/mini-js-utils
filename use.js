import JSUtils from "./index.js";

function fakeSimulator() {
    const multiply = (x, y) => x * y;
    const add = (x) => x + x;
    const minus = (x, y) => x - y;

    const original = { name: "Ana", address: { city: "Mumbai" } };
const clone = JSUtils.deepClone(original);

console.log(clone === original); // false ✅
console.log(clone.address === original.address); // false ✅
}

fakeSimulator()