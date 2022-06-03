/*### 1

Написать ф-цию, которая принимает объект и меняет местами ключи и значения

```javascript
function convertObject(obj) {}

convertObject({ a: "x", c: "y" }); // => { x: 'a', y: 'c' }
```

---*/

const myObj = {
    a: "x", 
    c: "y"
}

function convertObject (obj) {
    const result = {};
    for(let key in obj) {
        let val = obj[key];
        result[val] = key;
    }
    console.log(result);
}

convertObject(myObj);



/*### 2

Написать ф-цию, которая принимает 3 объекта со свойствами примитивных типов(строка, число, логическое значение) и возвращает новый объект созданный на их основе.  
Если в обьектах есть повторяющиеся значения, то их сложить как строки через запятую.
Пример:

```javascript
ввод:
const objA = {x: 1, b: 'dog'};
const objB = {z: true, y: 'cat', x: false};
const objC = {b: 1};

вывод:
const newObj = {x: '1, false', b: 'dog, 1', z: true, y: 'cat'}
```

---*/


const objA = {x: 1, b: 'dog'};
const objB = {z: true, y: 'cat', x: false};
const objC = {b: 1};

/*function unionObj (obj1, obj2, obj3) {
    const objD = {};
    for (let key in obj1) {
        
    }
    
    /*Object.assign(objD, obj1, obj2,obj3);
    console.log(objD);*/
/*}

/*unionObj(objA, objB, objC);

/*### 3

Необходимо написать ф-цию, в которой вы получаете объект, содержащий некоторые языки и результаты вашего теста на этих языках.  
Верните список языков, на которых ваш тестовый балл составляет не менее 60, в виде строки.  
Если у вас нет ни одного языка выше 60 баллов, тогда необходимо показать строку "Изучите материал повторно"

```javascript
{"Java": 10, "Ruby": 80, "Python": 65}    -->  "Ruby, Python, "
{"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  "Hindi, Dutch, Greek, "
{"C++": 50, "ASM": 10, "Haskell": 20}     -->  "Изучите материал повторно"
```

---*/

const lang = {"Java": 10, "Ruby": 80, "Python": 65};
const lang2 = {};

function testScore (obj, obj4) {
    for (let key in obj) {
        if (obj[key] >= 60) {
            let val = key;
            obj4[key] = val;
        }
    }
    toString(console.log(obj4));
}
/*function testScore (obj) {
    for (let key in obj) {
        if (obj[key] > 60) {
            console.log(key);
        }
    }
}*/

testScore(lang, lang2);


/*### 4

Напишите функцию, которая принимает объект с именами и возрастом и выводит сообщение:
"В данном объекте <число людей> человек, суммарный возраст которых составляет <суммарный возраст всех людей> лет".  
Все свойства объекта, значения которых не являются числом игнорировать и не учитывать.  
Пример:

```javascript
const obj = {
  John: 19,
  Kate: 21,
  Alex: 30,
  car: 'peugeot'
}*/

const obj = {
    John: 19,
    Kate: 21,
    Alex: 30,
    car: 'peugeot'
  };

function nameAge (obj) {
    let sumAge = 0;
    let numOfPeople = 0;

    for (let key in obj) {
        if(typeof obj[key] == "number") {
            sumAge = sumAge + obj[key];
            numOfPeople++;
        }
    }
    console.log("В данном объекте " + numOfPeople + " человек, суммарный возраст которых составляет " + sumAge + " (Задание 4)");
}

nameAge(obj);

/*### 5

Используя решение из задания 4, добавьте эту функцию в качестве метода объекта. Метод должен называться **showPersonsInfo** и должен работать так же, как и в первом задании.  
Используйте **this**.

Пример вызова метода:

```javascript
obj.showPersonsInfo();
```

---*/

const newObj = {
    John: 19,
    Kate: 21,
    Alex: 30,
    car: 'peugeot',
    showPersonsInfo: function() {
        let sumAge = 0;
        let numOfPeople = 0;
    
        for (let key in obj) {
            if(typeof obj[key] == "number") {
                sumAge = sumAge + obj[key];
                numOfPeople++;
            }
        }
        console.log("В данном объекте " + numOfPeople + " человек, суммарный возраст которых составляет " + sumAge + " (Задание 5)");
    }
  };



newObj.showPersonsInfo();


/*### 6

Постарайтесь при помощи обьекта описать собаку. В обьекте должны быть свойства данного животного, оно должно уметь лаять и уметь пролаять свой возраст(если 3 года, тогда вывести в консоль 'Гав Гав Гав').  
После чего клонируйте данный обьект при помощи Object.assign и создайте новую собаку.

---*/

let dog1 = {
    dog: true,
    woof: "Гав ",
    years: 3,
    species: "German shepherd",
    color: "black",
    sayYears: function () {
        console.log(this.woof.repeat(this.years))
    }
}

dog1.sayYears();

let dog2 = {};
Object.assign(dog2, dog1);

dog2.species = "chao chao";

console.log(dog2);


/*### 7

Напишите функцию, которая очищает обькт от свойств с нежелательными значениями, таких как false, undefined, пустые строки, 0, null.  
Пример:

```javascript
const obj = {
  x: 1,
  b: 'hello',
  c: null,
  d: true,
  e: 0
}

-> const obj = {x: 1, b: 'hello', d: true}
```

---*/

const obj7 = {
    x: 1,
    b: 'hello',
    c: null,
    d: true,
    e: 0
  }

function deleteProperty (obj) {
    for (let key in obj) {
        if (obj[key] === null || obj[key] === undefined || obj[key] === 0 || obj[key] === false || obj[key] === "") {
            delete obj[key];
        }
    }
    console.log(obj);
}

deleteProperty(obj7);


/*### 8

Создайте объект **wordsAggregator**, который сохраняет как-то слова, добавленные через метод **addWord**.  
И может искать вхождения этих слова через метод **search**, который возвращает true, если такое слово было добавлено и false если нет.  
И добавте метод **showAddedWords** который покажет все добавленные слова.
Пример:

```javascript
wordsAggregator.addWord('dad')
wordsAggregator.addWord('mom')
wordsAggregator.addWord('mad')

wordsAggregator.search("pad") -> false
wordsAggregator.search("dad") -> true
wordsAggregator.search("ma") -> true
wordsAggregator.search("a") -> true

wordsAggregator.showAddedWords() -> выведет все добавленные слова
```

---*/


const wordsAggregator = {
    addWord: function () {

    },

    search: function () {

    },

    showAddedWords: function () {

    }
};


/*### 9

У нас есть список студентов: Вася, Зина, Катя, Петя, Вова.  
Они решали финальный тест и процент выполнения теста таков:  
 Вася - 80, Зина - 77, Катя - 88, Петя - 95, Вова - 57.

- Оценки рассчитываются следующим образом:
  - если процент > 90 - 5
  - если процент > 80 - 4
  - если процент > 70 - 3
  - если процент > 60 - 2

Создать объект и добавить тода эти данные.  
Создать отдельную ф-цию для определения оценок по процентам.
Создать метод объекта который определяет оценку всех участников использую ф-цию для определения оценок.  
Ответ вывести следующим образом:

```
  Вася - 3,
  Зина - 3
   ...
```

---*/

const student = {
    Вася: 80,
    Зина: 77,
    Катя: 88,
    Петя: 95,
    Вова: 57,
    studentMark: function () {
        for (let key in student) {
            if (typeof student[key] == "number") {
                console.log(key + " - " + mark(student[key]))
            }
        }
    }
}

student.studentMark();

function mark (percent) {
    let totalMark;
    if (percent > 90) {
        totalMark = 5;
    } else if (percent >= 80 && percent <= 90) {
        totalMark = 4;
    } else if (percent >= 70 && percent < 80) {
        totalMark = 3;
    } else if (percent < 70) {
        totalMark = 2;
    }
    return totalMark;
}

console.log(mark(92));


/*### 10

Написать функцию, которая выводит количество секунд с начала дня. За начало дня принимаем текущую дату и время 00:00.

---*/

function numOfSeconds () {
    let date = new Date();
    console.log(date);
    let hour = date.getHours();
    console.log(hour);
    let min = date.getMinutes();
    console.log(min);
    let sec = date.getSeconds();
    console.log(sec);
    let secFromBeginning = (hour * 3600) + (min * 60) + sec;
    console.log("Количество секунд с начала дня " + secFromBeginning);
}

numOfSeconds();