/*
let user = {
    age: 40,
    doubleAge:function () {
        return user.age * 2;
    },
};
console.log(user);
console.log(user.age);
console.log(user.doubleAge());

let obj = Object.create(user);

console.log(obj);
console.log(obj.age);
console.log(obj.doubleAge());
*/
/////////////////////////////////////////

let obj1 = {
    prop1: 1,
    meth1: function () {
        return this.prop1;
    },
};

let obj2 = {
    prop2: 2,
    meth2: function () {
        return this.prop2;
    },
};

let targetObject = {
    prop1: 2,
    prop3: 3,
};

let finalObject = Object.assign(targetObject, obj1);
console.log(finalObject);

let newObject = Object.assign({}, obj1, {prop5: 5, prop6: 6 });
console.log(newObject);