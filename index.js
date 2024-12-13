// const talaba = {
//   matem: 5,
//   jt: 4,
//   ts: 5,
//   bahoniHisobla: function () {
//     console.log("O'rtacha bahosi", (this.jt + this.matem + this.ts) / 3);
//   },
// };

 // talaba.bahoniHisobla();



// Uyishi masala 1 O'quvchi Ob'ekti
// function student(name, course) {
//   (this.name = name),
//     (this.course = course),
//     (this.introduce = function () {
//       console.log(
//         "My name is " + this.name + ", I am in course " + this.course
//       );
//     });
// }
 
// const student1 = new student("Suxrob", 3);
// student1.introduce();

// masala 2 AVTOULOV OB'EKTI
// function avtoulov(make, model, year, ) {
//     this.make = make,
//     this.model = model,
//     this.year = year,

//     this.getinfo = function () {
//         console.log(this.make + this.model + this.year);
//     };
// }

// const damas = new avtoulov("CHevrolet ", "Damaz ", 1985 );
// damas.getinfo();
// const bmw = new avtoulov("BMW ", "M5F90 ", 2017 );
// bmw.getinfo();


// masala 3 TALABALAR OB'EKTI
// function talaba(ismi, yoshi, bahosi) {
//     this.ismi = ismi;
//     this.yoshi = yoshi;
//     this.bahosi = bahosi;
  
//     this.isPassed = function () {
//       if (bahosi >= 60) {
//         console.log("true");
//       } else {
//         console.log("false");
//       }
//     };
//   }
  
//   const talaba2 = new talaba("Suxrob ", 20, 60);
//   talaba2.isPassed();
  
//   const talaba3 = new talaba("Olim", 19, 50);
//   talaba3.isPassed();

// masala 4 Avtomobiklni boshqarish

// function Car(brand, speed) {
//     this.brand = brand;
//     this.speed = speed; 

//     this.accelerate = function(amount) {
//         this.speed += amount;
//     };

//     this.brake = function(amount) {
//         this.speed = Math.max(this.speed - amount, 0);
//     };
//     this.getSpeed = function() {
//         return this.speed;
//     };
// }
// const myCar = new Car("BMW", 100);
// console.log(myCar.getSpeed());
// myCar.accelerate(50);
// console.log(myCar.getSpeed()); 
// myCar.brake(30);
// console.log(myCar.getSpeed());


// masala 5 Ob-havo Ma'lumoti

// function Weather(city, temperature, unit) {
//     this.city = city;
//     this.temperature = temperature;
//     this.unit = unit;

//     this.convertToCelsius = function() {
//         if (this.unit === "F") {
//             this.temperature = (this.temperature - 32) / 1.8;
//             this.unit = "C";
//         }
//     };

//     this.convertToFahrenheit = function() {
//         if (this.unit === "C") {
//             this.temperature = this.temperature * 1.8 + 32;
//             this.unit = "F";
//         }
//     };
//     this.getTemperature = function() {
//         return this.city + this.temperature.toFixed(2) + "°" + this.unit;
//     };
// }

// let weather = new Weather("Tashkent",21, "F");

// console.log(weather.getTemperature());
// weather.convertToCelsius();
// console.log(weather.getTemperature()); 
// weather.convertToFahrenheit();
// console.log(weather.getTemperature()); 

// masala 6 Bank Hisob Raqami
// function BankAccount(accountNumber, balance) {

//     this.accountNumber = accountNumber;
//     this.balance = balance;
 
//     this.deposit = function (amount) {
//       if (amount > 0) {
//         this.balance += amount;
//         console.log(amount + "so'm hisobingizga qo'shildi.");
//       } else {
//         console.log("Miqdor musbat bo'lishi kerak.");
//       }
//     };

//     this.withdraw = function (amount) {
//       if (amount > 0) {
//         if (amount <= this.balance) {
//           this.balance -= amount;
//           console.log(amount + "so'm hisobingizdan yechildi.");
//         } else {
//           console.log("Yetarli mablag' mavjud emas.");
//         }
//       } else {
//         console.log("Miqdor musbat bo'lishi kerak.");
//       }
//     };
//   }

//   const account = new BankAccount("123456789", 1000);
  
//   account.deposit(500); 
//   console.log(account.balance);
//   account.withdraw(1700); 
//   console.log(account.balance); 

// masala 7 O'zgaruvchini Kvadratga oshirish

// Number.prototype.kvadrati = function() {
//     return "Kiritilgan sonning kvadrati: " + this * this;
// };

// const a = 12;
// console.log(a.kvadrati());

// const b = 2;
// console.log(b.kvadrati());

// masala 8 

// Array.prototype.yigindisi = function () {
//     return "Yig'indi: " + this.reduce((acc, current) => acc + current, 0);
//   };
  
//   const a = [1, 3, 2];
//   console.log(a.yigindisi());
  
//   const b = [1, 2];
//   console.log(b.yigindisi());
