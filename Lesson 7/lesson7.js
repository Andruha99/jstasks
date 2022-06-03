/*### 1

Написать функцию, которая принимает любое количество чисел(не массив)и возвращает их сумму.

---*/

function anyNum (...args) {
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
        sum = sum + args[i];
    }
    return sum;
}

console.log(anyNum(1, 2, 3));

/*### 2

Написать функцию, которая принимает первым аргументом условие, вторым и третьим аргументом функции(функции могут делать все что угодно на ваш выбор).  
Внутри функции если условие равно true, то выполнить первую функцию, если false, то выполнить вторую функцию.

---*/

function twoFunc (task, firstF, secondF) {
    
    if (task == true) {
        return firstF;
    } else {
        return secondF;
    }
}

function fir (a, b) {
    return a * b;
}

function sec (a, b) {
    return b - a;
}

console.log(twoFunc(5 > 6, fir(5, 6), sec(5, 6)));

/*### 3

Cоздайте ф-цию конструктор, с помощью которой можно создавать домашних питомцев. У которых могут быть разные имена и возраст, и которые смогу подавать голос.

---*/

function ConstrPets (name, age, voice) {
    this.name = name;
    this.age = age;
    this.voice = voice;
}

let shepherd = new ConstrPets("Butler", 1, "ГАВ ГАВ");
let cat = new ConstrPets("Timok", 3, "Мяу мяу");

console.log(shepherd.name);
console.log(cat.age);

/*### 4

- Сделать функцию, которая вычисляет разность между двумя числами и вернет разность.
- Выполнить используя замыкание, результат должен выглядеть примерно так
  ```javascript
  let sub = substract(a)(b); // a - b
  ```

---*/

function substract(a) {
    return function num4 (b) {
        return a - b;
    }
}

let sub = substract(108)(31);
console.log(sub);

/*### 5

- Написать функцию, возвращающую нувую функцию, которая в свою очередь будет возвращать количество вызовов этой функции в квадрате.
- (Использовать замыкание)

---*/

function numCalls () {
    let i = 0;
    
    return function doubleCalls () {
        let j = 0;
        i++;
        return j = i*i;
    }
}

let num = numCalls();

num();
num();
console.log(num());
 
/*### 6

- Создайте замыкание: функция makePassword получает пароль в аргументе и возвращает
- внутреннюю функцию, которая принимает введенную строку и возвращает булево значение true,
- если введенная строка совпадает с паролем и false – если не совпадает.
- Пример выполнения функции:
  ```javascript
  let checkPassword = makePassword("somePassword"); //задаем пороль
  checkPassword("password"); // возвращает false
  checkPassword("somePassword");
  ```

---*/

function makePassword (pass) {
    return function passwordRight (str) {
        if (str === pass) {
            return true;
        } else {
            return false;
        }
    }
}

let checkPassword = makePassword("somePassword"); 
console.log(checkPassword("somePassword")); 
console.log(checkPassword("sdgdfgj"));

/*### 7

Напишите функцию, которая принимает сколько угодное количество массивов и возвращает массив состоящий из элументов, повторяющихся во всех массивах.  
Пример:

```javascript
createIntersectionArray([1, 2], [2, 3], [2, 5]) => [2]
createIntersectionArray([1, 2, 3], [2, 3], [2, 3, 5]) => [2, 3]
createIntersectionArray([1, 3], [2, 3], [2, 3, 5]) => [3]
```

---*/

function createIntersectionArray (...arrs) {
    const unArr = [];
    for (let i = 0; i < arrs.length; i++) {
        for (let j = 0; j < arrs[i].length; j++) {
            console.log(arrs[i][j] + "=" + arrs[i][j]);
            
        }
    }
}

createIntersectionArray([1, 2], [2, 3], [2, 5]);

/*### 8

Создайте функцию, которая возвращает массив функций, которые возвращают свой индекс в массиве.  
Для лучшего понимания вот пример:

```javascript
const callbacks = createFunctions(5); // создает массив, который содержит 5 ф-ций

callbacks[0](); // "Мой индекс 0"
callbacks[3](); // "Мой индекс 3"
```

---*/
function createFunctions(num) {
    const arr = new Array(num).fill(function () {});
    
    return arr.map (function (item, index) {
        return function () {
            return index;
        }
    }) 
}


const callbacks = createFunctions(5);

console.log(callbacks[0]()); 
console.log(callbacks[3]()); 


/*### 9

Реализуйте функцию createSecretHolder (secret), которая принимает любое значение как секретное и возвращает объект ТОЛЬКО c двумя методами.

- setSecret (), который устанавливает секрет
- getSecret (), который возвращает секрет

```javascript
const obj = createSecretHolder(5);

obj.getSecret(); // возвращает 5
obj.setSecret(2);
obj.getSecret(); // возвращает 2
```

---*/

function createSecretHolder (secret) {
    let sec = secret;

    return {
        getSecret: function () {
            return sec;
        },
        setSecret: function (secret) {
            sec = secret;
        }
    }
}

const obj = createSecretHolder(5);

console.log(obj.getSecret()); // возвращает 5
obj.setSecret(2);
console.log(obj.getSecret()); // возвращает 2

/*### 10

Ваша задача - создать класс под названием Song.
Новая песня будет иметь два параметра: название и исполнителя.

```javascript
const mountMoose = new Song('Mount Moose', 'The Snazzy Moose');

mountMoose.title => 'Mount Moose'
mountMoose.artist => 'The Snazzy Moose'
```

Вам также нужно будет создать метод экземпляра с именем **howMany()**.

Метод принимает в качесстве аргумента группу людей, которые слушали песню в тот день.-  
И возвращает чесло, показывающее сколько новых слушателей песня набрала в этот день из всех слушателей.  
Имена следует обрабатывать без учета регистра, т.е. «John» - это то же самое, что «john».

Если один и тот же человек уже слушал песню, метод howMany не должен его учитывать.

Пример:

```javascript
const mountMoose = new Song('Mount Moose', 'The Snazzy Moose');

//day 1
mountMoose.howMany(['John', 'joHN', 'carl']); => 2

//day 2
mountMoose.howMany(['John', 'Fred', 'BOb', 'carl', 'RyAn']); => 3
// John и Сarl уже слушали песню.

// day 3
mountMoose.howMany(['JoHn', 'Luke', 'AmAndA']); => 2
// John уже слушал эту песню.

```*/

class Song {
    constructor (title, artist) {
        this.title = title;
        this.artist = artist;
    }

    howMany () {
        
    }
}

function memorized () {
    let cacheMap = new Map ();
    return function (x) {
        let y = x.length;
        for (let j = 0; j < x.length; j++) {
            x[j] = x[j].toLowerCase();
            if (cacheMap.has(x[j])) {
                console.log (x[j] + " уже слушал эту песню");
                y--;
            } else {
                cacheMap.set(x[j]);
            }
        }
        console.log("Количество новых слушателей за день: " + y);
        console.log("Общее количество новых слушателей: " + cacheMap.size);
    }
}

const mountMoose = new Song('Mount Moose', 'The Snazzy Moose');

mountMoose.howMany = memorized(mountMoose.howMany);


console.log(mountMoose.title); //=> 'Mount Moose'
console.log(mountMoose.artist); //=> 'The Snazzy Moose'
mountMoose.howMany(['John', 'joHN', 'carl']);
mountMoose.howMany(['John', 'Fred', 'BOb', 'carl', 'RyAn']);
mountMoose.howMany(['JoHn', 'Luke', 'AmAndA']);
