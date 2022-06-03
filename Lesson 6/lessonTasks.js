console.log("-----------------");

/*## 1

Написать код, который заменит регистр каждого символа на противоположный.
Например 'Hello world' -> 'hELLO WORLD'

---*/

let symb1 = "Hello world";
let symbArr = symb1.split("");

for (let i = 0; i < symbArr.length; i++) {
    if (symbArr[i] >= "a" && symbArr[i] <= "z") {
        symbArr[i] = symbArr[i].toUpperCase();
    } else if (symbArr[i] >= "A" && symbArr[i] <= "Z") {
        symbArr[i] = symbArr[i].toLowerCase();
    }
}
symbArr = symbArr.join("");

console.log(symbArr);

/*## 2

Создать массив из 20 чисел. Необходимо высчитать сумму всех элементов.(Используем reduce)

---*/

let arr8 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
let res = arr8.reduce(function(prev, cur) {
    return prev + cur;
}, 0);

console.log(res);

/*## 3

Создайте 2 массива с разной длинной.  
Необходимо написать код,который создаёт массив элементов представляющих собой сумму соответствующих элементов заданных массивов.

---*/

let arr10 = [1, 2, 3];
let arr20 = [1, 3, 5, 7];
let sumArr = [];
let sum = 0

if (arr10.length >= arr20.length) {
    for (let i = 0; i < arr20.length; i++) {
        sum = arr10[i] + arr20[i];
        sumArr.push(sum);
    }
} else {
    for (let i = 0; i < arr10.length; i++) {
        sum = arr10[i] + arr20[i];
        sumArr.push(sum);
    }
}

console.log(sumArr);

/*## 4

Напишите код, который разворачивает исходный массив и сохраняет это в новую переменную.  
Например: исходный массив - [1, 2, 3], результирующий массив - [3, 2, 1]

---*/

let arr11 = [1, 2, 3];
let arr12 = arr11.reverse();

console.log(arr12);