/*
let word1 = "Lưu Lê Thanh"
let word2 = "Tú"
const fullName = word1 + ' ' + word2 // const fullName = `${word1} ${word2}`;
console.log(fullName);

let num1 = 2;
let num2 = 19;
const Age = `${word2} năm nay đã ${num1 + num2} tuổi roài`;
console.log(Age);
*/
/*
let example = 'Hello \n' + 'world';
let example = `${word1}  ${word2}`;
console.log(example)
document.getElementById('example').innerText = example;
*/
//3. Destructuring Objects
/*
const personalInformation = {
    firstName: 'Lưu Lê Thanh',
    lastName: 'Tú',
    city: 'Thành Phố Huế',
    state: 'Thừa Thiên Huế',
    zipCode: 530000-539999
};
//const {firstName, lastName} = personalInformation;
//console.log(`${firstName} ${lastName}`);
const {firstName: fn, lastName: ln} = personalInformation;
console.log(`${fn} ${ln}`);
*/
//4. Destructuring Array: tách mảng
/*
let [firstName, middleName, lastName] = ['Lưu', 'Lê Thanh', 'Tú',];

//console.log(lastName);
//console.log(middleName);
//console.log(firstName);

firstName = 'Đặng';
console.log(lastName);

console.log(firstName, middleName, lastName)
*/
//5.Object Literal
/*
function addressMarker(city, state, country) {
    //const newAddress = {newCity: city,newState: state,newCountry: country};

    const newAddress =  {city, state, country}; //Cách viết này giúp chúng ta tối ưu được code, không cần lặp lại những thứ vốn đã có sẵn nhưng vẫn rất được kết quả ban đầu
    console.log(newAddress);
}

addressMarker('Huế', 'TT-Huế', 'Việt Nam');
*/
//6. Object Literal (Challenge)
/*
function addressMarker(address) {
    const {city, state} = address;
    
    const newAddress = {
        city: address.city,
        state: address.state,
        country: "Việt Nam"
    };
    console.log(`${newAddress.city}, ${newAddress.state}, ${newAddress.country}`);
}

addressMarker({city: 'Huế', state: 'TT-Huế'});
*/
//7. For of Loop
/*
let fullName = "Lưu Lê Thanh Tú học yếu quá trời";

for (const char of fullName) {
    console.log(char);
}
*/
//8.For of Loop (Challenge)
/*
let incomes = [5000, 7500, 10000];

for (let income of incomes) {
    income += 10000;
}

console.log(incomes);
*/
//9.Spread Operator
/*
let example1 = [1,2,3,4,5,6];
let example2 = [... example1]; //Chúng ta sẽ tạo ra 1 ex2 với những giá trị từ ex1
example2.push(true); 

console.log(example2);
*/
//10.Rest Operator
/*
function add(nums) {

    console.log(arguments);
}

add(4, 5, 7, 8, 12)
function add(...nums) {

    console.log(nums);
}

add(4, 5, 7, 8, 12)
*/
//11.Arrow functions
/*
function add(...nums) {
    let total = nums.reduce((x, y) => x + y);

    console.log(total);
}

add(4, 5, 7, 8, 12)
*/
//12.Default Params
/*
function add(numArray =[]) {
    let total = 0;
    numArray.forEach((Element) => {
        total += Element;
    });

    console.log(total);
}

add();
*/
//13.Inclues();
/*
let numArray = [1,2,3,4,5];

console.log(numArray.includes(2));
*/
//14.Let & Const
/*
const example = {};
example.firstName = 'Lưu';

console.log(example);
*/
//15.Import $ Export
/*
import { data } from "./example";
let updatedData = data;

updatedData.push(5);
console.log(data);
console.log(updatedData);
*/
//16. padStart() & padEnd()
/*
let example = 'Dylan';

console.log(example.padEnd(10, 'a'));
*/
//17.padStart() & padEnd() (Challenge)
/*
let example = 'YouTube.com/CodingTutorials360';

console.log(example.padStart(100).length);
console.log(example.padEnd(1));
*/
//18. Classes
import {Animal } from './Animal.js';

let cat = new Animal("Cat", 4);
console.log(cat.legs)