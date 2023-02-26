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
//13.Includes();
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
import { data } from "./example.js";
let updatedData = data;

updatedData.push(5);
console.log(data);
console.log(updatedData);

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

// Kiểu ni là nhập theo ES6+ nha
/*
import {Animal, Cat} from "./animal.js"

//khi có default thì ko có ngoặc nha

//import Animal from "./animal.js"
// Kiểu ni là nhập theo ES5 trở lui nha
// const {Animal} = require('./animal');
// const Animal = require('./animal');

// thêm 1 lưu ý nữa là 1 file chỉ cho mặc định 1 cái thôi nha
// còn lại cho export nhiều đc á
let cat = new Animal("Cat", 4);

cat.legs = 3;
cat.makeNoise('Meow');


console.log(cat.legs)
console.log(Animal.return10())

console.log(cat.metaData)

let cat2 = new Cat('Cat', 4);
cat2.makeNoise();
console.log(cat.metaData)
*/
//19.Trailing Commas
/*
function add(param1, )  {
    const example = {
        name: 'Dylan',
    };

    console.log(example)
}

add();
*/
//20.1 Async & Await
//Nếu theo youtube thì đường link đã bị lỗi, chúng ta nên kiếm 1 link khác để có thể lấy
//dữ liệu về để test 
/*
const apiUrl = 'https://jsonplaceholder.typicode.com/users';

function getTop100Campers() {
    fetch(apiUrl)
    .then((r) => r.json())
    .then((json) => {
        console.log(json[0])
    });
}
getTop100Campers();
*/
//20.2 Nếu như Url bị lỗi thì sẽ xuất hiện dòng chữ failed
/*
const apiUrl = 'https://jsonplaceholder.typicode.com/users';

function getTop100Campers() {
    fetch(apiUrl)
    .then((r) => r.json())
    .then((json) => {jv
        console.log(json[0])
    }).catch((error) => {
        console.log('failed');
    });
}
getTop100Campers();
*/
//20.3 Dùng function để tìm api không đồng bộ
/*
const apiUrl = 'https://jsonplaceholder.typicode.com/users';

async function getTop100Campers() {
    const response = await fetch(apiUrl);
    const json = await response.json();

    console,log(json[1]);
}

getTop100Campers();
*/
//21.Async & Await (Challenge)
// Dữ liệu sẽ xuất hiện sau 3000 mili  giây
/*
function resolvAftr3Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 3000);
    });
}

//resolvAftr3Seconds().then((date)   =>  {
//    console.log(date);
//});
//Khi sử dụng các chức năng không đồng bộ, sử dụng từ khóa async và get dữ liệu không đồng bộ
async function getAsyncData() {
    const result = await resolvAftr3Seconds();
    console.log(result);
}
//Thực hiện việc nhận dữ liệu từ các địa chỉ không đồng bộ và có thời gian chờ 
getAsyncData();
*/
//22. Sets
const exampleSet = new Set([1,1,1,1,2,2,2,2]);
console.log(exampleSet.has(2)); //Kiểm tra xem có đúng 2 phần tử trong Set không
//console.log(exampleSet);
console.log(exampleSet.size); //Kiểm tra số lượng phần tử
exampleSet.add(3); //Thêm 1 phần tử
console.log(exampleSet.size);
exampleSet.add(3);
console.log(exampleSet.size);
exampleSet.delete(3); //Xóa một phần tử
console.log(exampleSet.size);
console.log(exampleSet.delete(3));
exampleSet.clear(); //Xóa toàn bộ
console.log(exampleSet.size);
//23. Whast's Next
