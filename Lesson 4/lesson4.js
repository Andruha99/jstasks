/*### 1

Написать функцию, которая принемает любое число и определяет четное ли оно.  
Если да, то возвращает **true**, иначе **false**.  
0 считать за четное.

---*/

function evenNumber (num1) {
  if (num1 % 2 == 0) {
    console.log (true)
  } else {
    console.log (false)
  }
}

evenNumber(2);


/*### 2

Напишите функцию, которая принимает в качестве имени один аргумент, а затем выводит приветствие с данным именем с заглавной буквы и заканчивается восклицательным знаком.

```javascript
"riley" --> "Hello Riley!"
"JACK"  --> "Hello Jack!"
```

---*/


function sayHello (yourName) {
  console.log ("Hello " + yourName.charAt(0).toUpperCase() + yourName.substring(1).toLowerCase() + "!");
}

sayHello(prompt ("Введите имя"));


/*### 3

Написать функцию, которая принемает высоту и ширину прямоуголинка и находит его площадь. После чего возвращает полученное занчение.

---*/


function square(h, w) {
  let rect = h * w;
  console.log("Площадь прямоугольника равна: " + rect);
}

square (15, 19);


/*### 4

Написать функцию, которая будет высчитывать сумму чисел от нуля, до параметра, который мы в неё передаем.  
Например: getSum(100) должна возвращать сумму чисел от 0 до 100.

---
*/


function getSum (num4) {
  let sumAll = 0;
  for (let i = 0; i <= num4; i++) {
    sumAll = sumAll + i;
  }
  console.log(sumAll)
}

getSum(100);


/*### 5

Напишите функцию для вашего автомобиля.  
Она должна определять сможете ли вы проехать заданное расстояние на оставшемся топливе.  
Функция должна принимать 3 параметра:

- растояние в киллометрах
- остаток топлива в литрах
- расход топлива вашей машины в литрах на 100 км

Функция должна вернуть **true** если автомобиль сможет проехать это расстояние и **false** если нет.  
Написать **дополнительную** функцию, которая определяет расход топлива автомобиля на 1 киллометр и использовать ее в первой функции.  
Обратите внимание на нейминг функций и переменных.

---*/

function passDistance (distance, fuel, fuelConsumption) {
  let pass;
  if (fuel/fuelConsumption*100 >= distance) {
    pass = true;
  } else {
    pass = false;
  }
  console.log(pass);
  console.log("Расход топлива на 1 км: " + fuelConsumptionKm(fuelConsumption));
}

function fuelConsumptionKm (fuelConsumption) {
  let consKm = fuelConsumption/100;
  return consKm;
}

passDistance (100, 6, 10);


/*### 6

Уловка, чтобы определить, делится ли число на три, состоит в том, чтобы сложить все целые числа в числе и разделить полученную сумму на три. Если от деления суммы на три нет остатка, то исходное число также делится на три.

Учитывая серию цифр в виде строки, напишите функцию которая определяет, делится ли число, представленное строкой, на три.

Вы можете ожидать, что все аргументы тестового примера будут строками, представляющими значения больше 0.

```javascript
"123"      -> true
"8409"     -> true
"100853"   -> false
"33333333" -> true
"7"        -> false
```

---*/


function devideThree (num6) {
  let sumStr = 0;
  for (let i = 0; i <= num6.length; i++) {
    sumStr = sumStr + +num6.charAt(i);
  }
  console.log("Задание с тройкой " + sumStr);
  if (sumStr % 3 == 0) {
    console.log("Число делится на три " + true);
  } else {
    console.log("Число не делится на три " + false);
  }
}

devideThree("225");


/*### 7

Известно:

- размер кредита — 10 тыс.бел.руб,
- процентная ставка — 10% годовых,
- количество лет — 5.

Написать функцию, которая принимает три этих значения в качестве параметров функции и находит сумму переплаты по кредиту.  
Для упрощения подсчетав будем считать, что працент начисляется в начале года от оставшейся суммы:  
1 год - 10% от 10 тыс.бел.руб,  
2 год - 10% от 8 тыс.бел.руб,  
и т.д.

---*/


function overpayCredit (creditMoney, interestRate, years) {
  let overpay = 0;
  let overPayPerYear = 0;
  let sumForPercent = creditMoney/years;
  for (let i = 1; i <= years; i++) {
    overPayPerYear = creditMoney*((100 + interestRate)/100) - creditMoney;
    overpay = overpay + overPayPerYear;
    creditMoney = creditMoney - sumForPercent;
    console.log ("В " + i + " год необходимо доплатить " + overPayPerYear);
  }
  console.log ("Сумма переплаты составила " + overpay + " бел. руб.")
}

overpayCredit(10000, 10, 5);


/*### 8

- Напишите функцию, который считает количество секунд в неделе и показывает это количество в модальном окне(alert).
- Сообщение в модальном окне должно быть таким: 'Сегодня (здесь вставить день выполнения задания 10.11.2021) я узнал что колиство секунд одной неделе составляет (высчитанное количество)'

---*/


function numberOfSeconds () {
  let todayDate = new Date (2022, 04, 06);
  const seconds = 60*60*24*7;
  console.log ("Сегодня (" + todayDate +") я узнал что колиство секунд одной неделе составляет " + seconds);
}

numberOfSeconds();


/*### 9

Напишите скрипт, который:

- запрашивает у пользователя число от 1 до 10
- генерирует рандомное число от 1 до 10(именно целое число, чтобы без десятых, сотых и т.д.)
- выводит в алерт юзеру сообщение о том, что он угадал число, если числа совпали. и, соответственно - нет, если не угадал

Требования к выполнению этой задачи:

- генерирование числа должно быть реализовано в функции - getRandomNumber
- сравнение числа введенного юзера и сгенерированное программой должно происходить в функции - areNumbersEqual
- если юзер ввел некорректно число (> 10, или какую-нибудь строку) - сказать ему об этом и предложить сыграть еще раз

---*/

function getRandomNumber () {
  let yourNumber = prompt ("Введите число от 1 до 10");
  let check = false;

  while (check == false) {
    if (yourNumber < 1 || yourNumber > 10) {
      yourNumber = prompt ("Введите новое число, которое больше 1  и меньше 10");
    } else (
      check = true
    )
  }
  areNumbersEqual (yourNumber);
}

function areNumbersEqual (yourNumber) {
  let compNumber = Math.floor(Math.random()*10 + 1);
  let gameOn = true;
  while (gameOn == true) {
    if (yourNumber == compNumber) {
      alert("Вы победили");
      gameOn = false;
    } else {
      yourNumber = prompt("Введите число");
      if (yourNumber < 1 || yourNumber > 10) {
        prompt ("Вы ввели некорректное число. Введите новое!");
      }
    }
  }
  console.log (compNumber);
}

getRandomNumber();


/*### 10 (Дополнительная. Для тех,кто хочет попробовать свои силы)

Добавление чаевых к счету в ресторане может быть непростым делом, поэтому вам нужно сделать для этого функцию.

Функция получит счет ресторана (всегда положительное число) в качестве аргумента.  
Вам нужно:

- добавить 15% чаевых,
- округлить это число до элегантного значения и вернуть его.

Что такое элегантный номер? Это зависит от величины округляемого числа. Числа меньше 10 следует просто округлить до целых чисел. Числа от 10 и выше следует округлить следующим образом:

```javascript
10 - 99,99 ... ---> Округлить до числа, кратного 5

100 - 999,99 ... ---> Округлить до числа, кратного 50

1000 - 9999,99 ... ---> Округлить до числа, кратного 500
```

---*/


function addToOfficiant (money) {
  let addCost = money*(15/100);
  let ostatok;

  if (addCost < 10) {
    addCost = Math.round(addCost);
  }

  if (addCost >= 10 && addCost < 100) {
    ostatok = addCost % 5;
    addCost = addCost - ostatok + 5;
  }

  if (addCost >= 100 && addCost < 1000) {
    ostatok = addCost % 50;
    addCost = addCost - ostatok + 50;
  }

  if (addCost >= 1000 && addCost < 10000) {
    ostatok = addCost % 500;
    addCost = addCost - ostatok + 500;
  }

  console.log (addCost);
  console.log (ostatok);
}

addToOfficiant(1456);  