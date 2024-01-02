let num = [2, 3, 4, 5, 6, 6, 7];
let names = ["pratham", "pooja", "vidya", "namdev"];

// map
Array.prototype.myMap = function (callback) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(callback(this[i], i, this));
  }
  return arr;
};
//foreach
Array.prototype.myForEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};
// reduce
Array.prototype.myReduce = function (callback, initVal = null) {
  let acc = initVal;
  for (let i = 0; i < this.length; i++) {
    acc = callback(acc, this[i], i, this);
  }
  return acc;
};
// filter
Array.prototype.myFilter = function (callback) {
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    if (callback.call(this, this[i], i, this)) {
      newArr.push(this[i]);
    }
  }
  return newArr;
};

//  polyfill for find array method
Array.prototype.myfind = function (callback) {
  let result = undefined;
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return this[i];
    }
  }
  return result;
};

// bind
Function.prototype.myBind = function (obj, ...arg) {
  obj.fn = this;
  return function (...newArgs) {
    return obj.fn(...arg, ...newArgs);
  };
};

let obj = {
  name: "pratham",
  namee: function (id) {
    console.log(`${this.name} and my ID is ${id}`);
  },
};

function namee(id) {
  return `${this.name} and my ID is ${id}`;
}

let log = namee.myBind(obj, "89765");
