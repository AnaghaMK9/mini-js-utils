export const debounce = (fn, delay) => {
    let timer;

    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, args);
        }, delay)
    }
}

export const throttle = (fn, delay) => {
    let lastExecuted = 0;
    return function (...args) {
        let currentTime = Date.now();
        if (currentTime - lastExecuted >= delay) {
            fn.apply(this, args);
            lastExecuted = currentTime;
        }
    }
}

export const executeOnce = (fn) => {
    let functionCall = 0;
    return function (...args) {
        if (functionCall === 0) {
            fn.apply(this, args);
            functionCall++;
        }
        console.log(functionCall)
        return;
    }
}

export const compose = (...functions) => {
    return function (...args) {
        let fns = functions.reduceRight((acc, fn, index) => {
            if (functions.length - 1 === index) {
                return fn(...acc);
            }
            return fn(acc);
        }, args);

        return fns;
    }
}

export const pipe = (...functions) => {
    return function (...args) {
        let fns = functions.reduce((acc, fn, index) => {
            if (index === 0) {
                return fn(...acc);
            }
            return fn(acc);
        }, args);
        return fns;
    }
}

export const curry = (fn) => {
    return function curried(...args) {
        if (args.length === fn.length) {
            return fn(...args);
        } else {
            return function (...nextArgs) {
                return curried(...args, ...nextArgs);
            }
        }
    }
}

export const bind = (context, ...args) => {
    if (typeof this !== "function") {
        return new Error("Bind must be called on a function.");
    }

    const fn = this;

    return function (...args2) {
        return fn.apply(context, [...args, ...args2]);
    }
}

export const deepClone = (obj) => {
    if (obj === null || typeof obj !== "object") {
        return obj; //primitive types returned as they are
    }

    if (Array.isArray(obj)) {
        return obj.map((item) => deepClone(item))
    }

    const clone = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            clone[key] = deepClone(obj[key]);
        }
    }

    return clone;
}

const JSUtils = {
    debounce,
    throttle,
    executeOnce,
    compose,
    pipe,
    curry,
    bind,
    deepClone
}

export default JSUtils;