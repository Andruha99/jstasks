/*### 1

- написать ф-цию, которая принимает в качестве параметра массив чисел и возвращает массив их квадратов // [1, 2, 3, 4] -> [1, 4, 9, 16]
- написать функцию, которая в качестве параметра принимает массив с разными типами данных. возвращает true, если в массиве есть строка, возвращает false, если в массиве строк нет

---*/

let array = [1, 2, 3, 4];
let array2 = [1, "sdkjf", true];
console.log(array);

function inSquare (arr) {
    for (let i = 0; i<arr.length; i++) {
        arr[i] = arr[i]*arr[i];
    }
    console.log(arr);
}

function hasString (arr2) {
    for (let i = 0; i < arr2.length; i++) {
        if (typeof arr2[i] === "string") {
            return true;
        }
    }
    return false;
}

inSquare(array);
console.log(hasString(array2));


/*### 2

- Написать функцию, которая принимает первым аргументом массив, а вторым любое значение. Функция должна вернуть индекс если такое значение есть в массиве и -1 если его нет. (indexOf, findIndex не использовать)

- написать ф-цию, которая принимает в качестве параметра массив чисел, фильтрует его и возвращает массив нечетных чисел [1, 2, 3] -> [1, 3]

---*/


let array3 = [1, 2, 3, 4, 5];

function returnIndex (arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            return i;
        }
    }
    return -1;
}


function arrayOddsNumbers (arr) {
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 == 0) {
            arr.splice(i, 1);
        }
    }
    return arr;
}


console.log(returnIndex (array3, 8));
console.log(arrayOddsNumbers (array3));


/*### 3

- Написать функцию, которая приобразуем любую строку в строку написанную кебаб кейсом (все буквы с маленькой буквы и на месте пробелов - тире)
- Например:
- 'Hello World' -> 'hello-world';
- 'Hello dear hell' -> 'hello-dear-hell'

---*/


let newString = "HeLlo WoRlD";

function kebabCase (str) {
    let arr = str.split(" ");
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].toLowerCase();
    }
    console.log(arr);
    arr = arr.join("-");
    console.log(arr);
}

kebabCase(newString);
kebabCase("Hello dEAr hell");


/*### 4

Написать функцию, которая принимает параметрами два массива и сливает их в объект так, что элементы первого массива становятся ключами, а второго - значениями.

```javascript
const arr1 = ["a", "c"];
const arr2 = ["x", "y"];

objectCreator(arr1, arr2); // => { a: "x", c: "y" }
```

---*/


const arr1 = ["a", "c"];
const arr2 = ["x", "y"];

function objectCreator(arr1, arr2) {
    const obj = {};
    for ( let i = 0; i < arr1.length; i++) {
        obj[arr1[i]] = arr2[i];
    }
    console.log(obj);
}

objectCreator(arr1, arr2);


/*### 5

Напишите код, который добавит символ двоеточие(':') между нечетными числами.  
Например, число 556 результат должен быть '5:56', 566 -> 566, 655 -> 65:5.

---*/


function colonBetweenOdd (num) {
    num = String(num);
    let arr = num.split('');
    let check = 0;
    let arr2 = [];
    console.log(arr2);
    

    for (let i = 0; i < arr.length; i++) {
        if (+arr[i] % 2 != 0) {
            check++;
        } else {
            check = 0;
        }
        if (check >= 2) {
            arr2.push(":", arr[i]);
        } else {
            arr2.push(arr[i]);
        }
    }
    console.log(arr2.join(""));
}

colonBetweenOdd(655);


/*### 6

Написать ф-цию, которая принимает массив объектов типа {name: 'Jonh', age: 20} и вторым параметром ключ, по которому надо собрать массив

```javascript
function getAges(array, key) {}

getAges(
  [
    { name: "Sergey", age: 33 },
    { name: "Daria", age: 33 },
  ],
  "name"
); // => ['Sergey', 'Daria']

getAges(
  [
    { name: "Sergey", age: 33 },
    { name: "Daria", age: 33 },
  ],
  "age"
); // => [33, 33]
```

---*/

function getAges(array, key) {
    const newArr = []
    for (let i = 0; i < array.length; i++) {
        for (let keyO in array[i]) {
            if (key == keyO) {
                newArr.push(array[i][keyO]);
            }
        }
    }
    console.log(newArr);
}

getAges(
    [
      { name: "Sergey", age: 33 },
      { name: "Daria", age: 33 },
    ],
    "name"
  );

getAges(
    [
      { name: "Sergey", age: 33 },
      { name: "Daria", age: 33 },
    ],
    "age"
  );


/*### 7

- Написать ф-цию, которая принимает массив объектов.
- Значения этих объектов - числа.
- Вернуть объект с суммами ключей

```javascript
function calculate(array) {}

calculate([
  { x: 1, z: 2, y: 3 },
  { x: 10, z: 21, y: 4 },
  { x: 2, z: 3, y: 4 },
  { a: 1, b: 2 },
]);
// => { x: 13, z: 26, y: 11, a: 1, b: 2 }
```

---*/


function calculate (arr) {
    let obj = {};
    let xTotal = arr.reduce(function(prev, cur) {
        return prev + cur.x;
    }, 0);
    let yTotal = arr.reduce(function(prev, cur) {
        return prev + cur.y;
    }, 0);
    let zTotal = arr.reduce(function(prev, cur) {
        return prev + cur.z;
    }, 0)

    obj.x = xTotal;
    obj.z = zTotal;
    obj.y = yTotal;
    
    console.log(obj);
}

calculate([
    { x: 1, z: 2, y: 3 },
    { x: 10, z: 21, y: 4 },
    { x: 2, z: 3, y: 4 },
    /*{ a: 1, b: 2 },*/
]);



/*### 8

Напишите функцию, которая в качестве аргумента принимает массив и уберет повторяющиеся элементы, возвращая массив уникальных значений.

```javascript
    [1, 2, 3, 1, 7, 8, 5, 2, 4, 5, 7, 7, 7] -> [1, 2, 3, 7, 8, 5, 4]
```

---*/

function deleteRep (arr) {
    let uniqueNum = arr.filter(function(item, index) {
        if (arr.indexOf(item) === index) {
            return item;
        }
    });
    console.log(uniqueNum);
}

deleteRep([1, 2, 3, 1, 7, 8, 5, 2, 4, 5, 7, 7, 7]);


/*### 9

Напишите функцию, которая разделит массив на части заданного размера и вернет двумерный массив элементы которого будут массивы длинной равной второму аргументу ф-ции.  
Пример:

```javascript
    splitArray([1, 2, 3, 4, 5], 2) => [[1, 2], [3, 4], [5]]
```

---*/


function splitArray (arr, key) {
    let arr4 = [];
    for (let i = 0; i < arr.length; i = i + key) {
        let till = i + key;
        arr4.push(arr.slice(i, till));
    }
    console.log(arr4);
}

splitArray([1, 2, 3, 4, 5], 2);


/*### 10

Арифметический тренажер:

- пользователю выводится 10 примеров, которые содержат по 2 случайных положительных числа (от 1 до 10) и знак (+, -, \*, /).  
  Пример ввода:

```javascript
    5, 2, *
    12, 4, /
    и т.д.
```

- пользователь вводит ответы
- после 10 ответов выводится оценка и примеры, в которых была совершена ошибка (правильный ответ Х, а вы ввели У).

---*/


function arithmSim (arr) {
    let examples = [];
    let answArr = [];
    let rightAnsw = [];
    let count = 0;
    
    for (let a = 0; a < arr.length; a++) {
        examples.push(arr[a]);

        let answ = +prompt(arr[a]);

        answArr.push(answ);

        if (arr[a][2] == "+") {
            rightAnsw.push(arr[a][0] + arr[a][1]);
        } else if (arr[a][2] == "-") {
            rightAnsw.push(arr[a][0] - arr[a][1]);
        } else if (arr[a][2] == "*") {
            rightAnsw.push(arr[a][0] * arr[a][1]);
        } else if (arr[a][2] == "/") {
            rightAnsw.push(arr[a][0] / arr[a][1]);
        }
    }

    for (let i = 0; i < rightAnsw.length; i++) {
        if (answArr[i] === rightAnsw[i]) {
            count++;
        } else {
            document.write("Вы ошиблись в примере: (" + examples[i] +"). Правильный ответ: " + rightAnsw[i] + ", а Вы ввели " + answArr[i] + "</br>");
        }
    }
    
    document.writeln("Ваша отметка: " + count);
}

arithmSim([[5, 2, "*"], 
            [12, 4, "/"], 
            [8, 4, "-"], 
            [2, 2, "+"],
            [3, 4, "-"]
]);


/*### 11

Написать сортировку пyзырьком, от большего значения к меньшему.  
Решение нужно не просто скопировать, а разобраться как она работает и уметь обьяснить алгоритм.

---*/


const arr5 = [7, 2, 1, 5, 8, 4, 0, 6, 45, 10, 3, -2, 9, 100];

function bubbleSort(arr) {
    for (let j = 0; j < arr.length; j++) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i+1]) {
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
            }
        } 
    }
    console.log(arr);
}

bubbleSort(arr5);