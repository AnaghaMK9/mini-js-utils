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
            return function(...nextArgs){
                return curried(...args, ...nextArgs);
            }
        }
    }
}

export const bind = () => {

}

export const deepClone = () => {
    
}

const JSUtils = {
    debounce,
    throttle,
    executeOnce,
    compose,
    pipe,
    curry
}

export default JSUtils;