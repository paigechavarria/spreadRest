//ES5 version

function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function(num) {
      return num % 2 === 0
    });
  }

//ES2015 version

const filterOutOdds = (...args) => args.filter((num) => {
    return num % 2 === 0;
})

//findMin

const findMin = (...nums) => {
    return Math.min(...nums);
}

//mergeObjects

const mergeObjs = (obj1, obj2) => {
    const newObj = {...obj1, ...obj2};
    return newObj;
}

//doubleAndReturnArgs

const doubleAndReturnArgs = (arr, ...args) => {
    return [...arr, ...args.map((num) => num * 2)];
}

//removeRandoms

const removeRandoms = (...items) => {
    let rando = Math.floor(Math.random() * items.length);
    return [...items.slice(0, rando), ...items.slice(rando + 1)];
}

//extend

const extend = (arr1, arr2) => {
    return [...arr1, ...arr2];
}

//addKeyVal

const addKeyVal = (object, key, val) => {
    const newObj = object[key] = val;
    return {...object, ...object[key] = val};
}

//removeKey

const removeKey = (obj, key) => {
    delete obj[key];
    return {...obj};
}

//combine

const combine = (obj1, obj2) => {
    return {...obj1, ...obj2}
}

//update

const update = (object, key, val) => {
    const newObj = object[key] = val;
    return {...object, ...object[key] = val};
}
