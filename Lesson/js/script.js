// // ES2015 - офіційна назва, що відповідає офф. угоді про найменування
// //ES6 - старіша назва, широко вживана бо до неї звикли, коротша, означає перехід до сучасного JS.

// // variables ⭐⭐⭐⭐⭐
// // let x = 10;
// // x = 20;
// // const y = 30; //cannot reassign
// //Тимчасова мертва зона - до оголошення змінної до неї немає ніякого доступу для let i const

// //Arrow function ⭐⭐⭐⭐⭐
// const sum = (a, b) => a + b;

// const diff = (a, b) => {
//   return a - b;
// };

// console.log(sum(5, 3));
// //Лексичне прив'язування this - від найближчої області видимості,
// // там де вона присвоюється, зазвичай має глобальний контекст
// // не можна переприсвоїти this (bind call apply -)

// // Класи ⭐⭐⭐⭐

// //Template Literals ⭐⭐⭐⭐⭐
// // ``(backtick) - можна переносити на наступний рядок
// const username = "Alice";
// const greeting = `Hello ${username}`;
// const longMsg = `Lorem sdgj sdjhgsd hgasdl hgsdds ga;sdgj.
// Loregdsmgmsd gmsd gsdg jsdg sd`;

// console.log("Template literal", greeting);

// //Enhanced Object Literals ⭐⭐⭐⭐⭐
// // Скорочення назв методів, параметрів
// const a = 1,
//   b = 2;
// const obj = {
//   a,
//   b,
//   myMethod() {
//     return this.a + this.b;
//   },
//   ["1" + 2]: a,
// };
// console.log("Enchanced Object Literal", obj.myMethod());

// // Деструктуризація (Desctucturing) ⭐⭐⭐⭐⭐++
// const { a: first, b: second } = obj;
// console.log("Destructuring", first, second); // Destructuring 1 2

// const arr = [1, 2, 3];
// const [one, two, three] = arr;
// console.log("Array Destructuring", one, two, three); // Array Destructuring 1 2 3
// //Можна дестрктуризувати параметри в функції

// //Default parameters ⭐⭐⭐⭐⭐
// function greet(name = "Guest") {
//   console.log(`Hello, ${name}`);
// }
// greet();
// greet("Bob");

// //Rest Parameters ⭐⭐⭐⭐⭐
// //Це можливість приймати невизначену кількість аргументів у вигляді масиву
// function sum1(...numbers) {
//   console.log(numbers);
//   return numbers.reduce((acc, num) => acc + num, 0);
// }
// console.log("Rest parameters Sum", sum1(1, 2, 3, 4));

// //Spread Operator ⭐⭐⭐⭐⭐ ...
// //Швидке розширення, поверхнева копія об'єкта
// //Не працює з функціями як параметрами об'єктів, або з об'єктами в об'єктах
// const arr2 = [...arr, 4, 5];
// console.log("Spread Operator Object", arr2); // [1, 2, 3, 4, 5]
// console.log("Spread Operator Object", ...arr2); // 1 2 3 4 5 (черга)

// const obj2 = { ...obj, c: 3 };
// console.log("Spread Operator Object", obj2);

// // for...of Loop ⭐⭐⭐⭐
// //Перебирає об'єкти, які ітеруються (масиви, рядки, Maps, Sets, тощо).
// for (const num of arr) {
//   console.log("for...of loop element: ", num);
// }

// //Symbol ⭐⭐⭐
// //Новий тип даних, унікальний і незмінний
// // Часто використовується як ключі в об'єктах для уникнення колізій імен
// const sym = Symbol("mySymbol");
// const obj3 = { [sym]: "Symbol value" };
// console.log("Symbol example", obj3[sym]);

// //Iterators and Generators ⭐⭐
// function* myGenerator() {
//   yield 1;
//   yield 2;
//   yield 3;
// }

// const gen = myGenerator();
// console.log("Generator: ", gen.next().value);

// //Map and Set ⭐⭐⭐⭐
// // Map: набір пар ключ-значення, де ключі можуть мати будь-який тпип даних.
// // Set: колекція унікальних значень.

// const myMap = new Map();
// myMap.set("key", "value");
// console.log("Map: ", myMap.get("key")); //value

// const mySet = new Set([1, 2, 2, 3]);
// console.log("Set: ", mySet.size); // 3

// //Promises ⭐⭐⭐⭐⭐
// //Об'єкти що представляють остаточне завершення асинхронної операції
// // Альтернатива до callback, більш читабельні

// // const myPromise = new Promise((resolve, reject) => {
// //   setTimeout(() => resolve("Promise Resolved!"), 5);
// // });
// // let result;
// // myPromise.then((result) => console.log("Promise then: "), result);

// //Modules ⭐⭐⭐⭐⭐
// //import, export

// //Proxies ⭐⭐
// //Об'єкти які дозволяють перехоплювати операції з іншими об'єктами
// // const target = {};

// // const handler = {
// //   get: function (obj, prop) {
// //     return prop in obj ? obj[prop] : "Property does not exist";
// //   },
// // };

// // const proxy = new Proxy(target, handler);
// // console.log("Proxy Example: ".proxy.nonExistenProperty);

// //Typed Array ⭐⭐⭐⭐
// //Масиви які містять значення певного числового типу (наприклад, Int32Array, Float64Array)
// //Кращий перфоманс при роботі з бінарними даними
// const typedArray = new Int32Array([1, 2, 3]);
// console.log("Typed Array", typedArray[0]);

// // ------------------------------NEW VERSION ES7 (ES 2016) Features ------------------------

// // Array.prototype.includes() ⭐⭐⭐⭐⭐
// //Перевіряє тільки прості значення
// console.log("Includes", arr.includes(2));

// // Exponentiation Operator ⭐⭐⭐⭐
// console.log("Exponentiation operator", 2 ** 3);

// // ------------------------------NEW VERSION ES8 (ES 2017) Features ------------------------

// //async and await ⭐⭐⭐⭐⭐+++
// //Синтаксичний цукор для роботи з Promises

// // async function myAsyncFunction() {
// //   const result = await myPromise;
// //   console.log("Async/Await: ", result);
// // }
// // myAsyncFunction();

// //Object.entries(), Object.values(), Object.keys() ⭐⭐⭐⭐⭐
// console.log("Object Entries ", Object.entries(obj));
// console.log("Object Values ", Object.values(obj));
// console.log("Object Keys ", Object.keys(obj));

// //String.prototype.padStart(), String.prototype.padEnd() ⭐⭐⭐
// //Доповнює рядок іншим рядком (за потреби повторює), доки він не досягає певної довжини.
// console.log("padStart", "5".padStart(3, "0"));
// console.log("padEnd", "5".padEnd(3, "0"));

// // ------------------------------NEW VERSION ES9 (ES 2018) Features ------------------------

// //Rest/Spread Properties for Objects ⭐⭐⭐⭐⭐
// const { a: first2, ...rest2 } = obj2;
// console.log("Rest Properties: ", rest2);

// const obj4 = { ...obj2, d: 4 };
// console.log("Spread Properties Object 2", obj4);

// //Promise.prototype.finally() ⭐⭐⭐⭐
// //Метод який завжди виконується, незалежно від того, вирішується чи відхиляється Promise
// // Корисно для завдань з очищення змінних та стеку

// // myPromise
// //   .then(() => console.log("Promise finished"))
// //   .finally(() => console.log("Promise cleanup"));

// //Asynchronous Iteration ⭐⭐⭐
// // async function asyncIteration() {
// //   async function* asyncGenerator() {
// //     yield Promise.resolve(1);
// //     yield Promise.resolve(2);
// //   }

// //   for await (const num of asyncGenerator()) {
// //     console.log("Async Iteration", num);
// //   }
// // }

// // asyncIteration();

// // ------------------------------NEW VERSION ES10 (ES 2019) Features ------------------------

// //Array.prototype.flat(), Array.prototype.flatMap() ⭐⭐⭐+
// const nestedArray = [1, [2, [3, 4]]];
// console.log("first array", nestedArray.flat(2)); // [1, 2, 3, 4]

// const numbers = [1, 2, 3];
// const flatMapResult = numbers.flatMap((x) => [x * 2]);
// console.log("Flat Map Array: ", flatMapResult); // [2, 4, 6]

// //String.prototype.trimStart(), String.prototype.trimEnd() ⭐⭐⭐
// //Обрізає пробіли
// const stringWithWhitespace = "   Hello   ";
// console.log("Trim Start: ", stringWithWhitespace.trimStart());
// console.log("Trim End: ", stringWithWhitespace.trimEnd());
// console.log("Trim All: ", stringWithWhitespace.trim());

// //Object.fromEntries() ⭐⭐⭐+
// // Робить з масиву об'єкт
// // const entries = [["name"], "Charlie", ["age", 30]];
// // const newObject = Object.fromEntries(entries);
// // console.log("Object.fromEntries", newObject);

// //Optional catch binding ⭐⭐⭐
// //Використовується коли змінна catch (err) не потрібна
// try {
//   throw new Error("Test Error");
// } catch /*err*/ {
//   console.log("Error caught without binding");
// }

// // ------------------------------NEW VERSION ES11 (ES 2020) Features ------------------------

// // BigInt ⭐⭐⭐⭐⭐
// // Представляє великі числа, не завжди сумісний (див. caniuse.com)
// const bigInt = 123123123124124124124124n;
// console.log("BigInt: ", bigInt);

// //Nullish Coalescing Operator (??) ⭐⭐⭐⭐⭐
// //Повертає правий операнд, якщо ліва частина дорівнює null або undefined

// const nullValue = null;
// const defaultValue = nullValue ?? "Default";
// console.log("Nullish Coalescing ", defaultValue);

// //Optional Chaining Operator (?.) ⭐⭐⭐⭐⭐
// //Безпечний доступ до властивості
// const user = { address: { street: "Main St" } };
// const street = user?.address?.street;
// console.log("optional Chaining", street);

// //Promise.allSettled() ⭐⭐⭐⭐⭐
// //Виконується коли всі Promise виконано
// // const promise1 = Promise.resolve(2);
// // const promise2 = Promise.reject(2);

// // Promise.allSettled([promise1, promise2]).then((results) => {
// //   console.log("Promise.allSettled", results);
// // });

// //import() Function (Dynamic Import) ⭐⭐⭐⭐⭐

// // globalThis ⭐⭐
// // спосіб доступу до глобального об'єкту
// console.log("globalThis", globalThis);

// //String.prototype.replaceAll() ⭐⭐⭐⭐
// //Простий спосіб змінити конкретне значення в конкретному рядку
// const text = "This is a test test";
// console.log("String ReplaceAll", text.replaceAll("test", "success"));

// // ------------------------------NEW VERSION ES12 (ES 2021) Features ------------------------

// //Numeric Separators⭐⭐
// // const largeNumber = 1_000_000;
// // console.log("Numeric Separators", largeNumber);

// // // Promise.any() ⭐⭐⭐⭐
// // //Виконується коли будь-який з Promis-ів повертає результат
// // const promise3 = Promise.resolve("Error Promise 3");
// // const promise4 = Promise.reject("Error Promise 4");

// // Promise.any([promise3, promise4])
// //   .then((value) => console.log("Promise.any"), value)
// //   .catch((err) => console.error("Promise.any Rejected", err));

// //Logical Assignment Operators ⭐⭐⭐⭐
// let a1 = null;
// a1 ??= "Default Value"; // ??= Перевіряє лише значення null або undefined.
// console.log("Nullish Assignment", a1);

// let b1 = true;
// b1 &&= "Truthy Value";
// console.log("Truthy Assignment", b1);

// let c1 = false;
// c1 ||= "Falsy Value";
// console.log("Falsy Assignment", c1);

// // ------------------------------NEW VERSION ES13 (ES 2022) Features ------------------------

// // Top-Level Await (Requires module context) ⭐⭐⭐⭐⭐

// //Class static Blocks ⭐⭐⭐⭐⭐

// // .at() Method ⭐⭐⭐
// //Дозволяє взяти значення під певним індексом
// const myArray3 = [10, 20, 30];
// console.log("Array .at()", myArray3.at(-1));

// const myString3 = "Hello";
// console.log("String .at()", myString3.at(-1));

// //Error Cause ⭐⭐⭐⭐
// const originalError = new Error("Original Error");
// try {
//   throw new Error("Secondary Error", { cause: originalError });
// } catch (error) {
//   console.log("Error Cause", error.cause.message);
// }

// // Object.hasOwn() ⭐⭐⭐⭐⭐
// // Чи є у об'єкта параметр з певним ключем або значенням

// class CircleBox {
//   constructor(selector) {
//     this.$el = document.querySelector(selector);
//   }

//   hide() {
//     this.$el.style.display = "none";
//   }

//   show() {
//     this.$el.style.display = "block";
//   }
// }

// class CircleItem extends CircleBox {
//   constructor(options) {
//     super(options.selector);
//     this.$el.style.width = options.size + "px";
//     this.$el.style.height = options.size + "px";
//     this.$el.style.borderRadius = "50%";
//     this.$el.style.background = options.color;
//   }
// }

// const CircleRed = new CircleItem({
//   selector: "#circleRed",
//   color: "red",
//   size: 50,
// });

// const CircleGreen = new CircleItem({
//   selector: "#circleGreen",
//   color: "green",
//   size: 80,
// });

// const CircleBlack = new CircleItem({
//   selector: "#circleBlack",
//   color: "black",
//   size: 30,
// });

// function Car(name, color) {
//   this.name = name;
//   this.color = color;
// }

// Car.prototype.message = function () {
//   console.log(`${this.name} is ${this.color} color`);
// };

// Car.prototype.start = function () {
//   console.log(`${this.name} is start!!!`);
// };

// const BMW = new Car("bmw", "red");
// const opel = new Car("opel", "green");

// let message = {
//   messageHello() {
//     console.log(`Hello, ${this.name}`);
//   },

//   messageBey() {
//     console.log(`Bye, ${this.name}`);
//   },
// };

// class User {
//   constructor(name) {
//     this.name = name;
//   }
// }

// Object.assign(User.prototype, message);

// new User("Іван").messageHello();
