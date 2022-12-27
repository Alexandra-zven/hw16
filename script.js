const database = [
    {name:"John", country:"Israel", age:19, isMarried:true},
    {name:"Mary", country:"Israel", age:29, isMarried:false},
    {name:"Bill", country:"Belgium", age:10, isMarried:false},
    {name:"Jane", country:"France", age:30, isMarried:true},
    {name:"Hanna", country:"France", age:9, isMarried:false},
    {name:"George", country:"Israel", age:80, isMarried:true}
];
const initialValue = 0;
let quantity = 0;


// Task 1
console.log(database.filter(e => {return e.isMarried == true}));

// Task 2
console.log(database.sort(function compare (a, b){
    return a.age - b.age;
}))

// Task 3
database.forEach(() => {return quantity++});
const temp = database.reduce((accumulator, currentValue, initialValue) => accumulator + currentValue.age, initialValue);
console.log(temp/quantity);

// Task 4
const countries = {};
for(const el of database){
    countries[el.country] = countries[el.country] ? countries[el.country] + 1 : 1;
}
console.log(countries);

// Task 5
let married = database.filter(e => {return e.isMarried == true});
let notmarried = database.filter(e => {return e.isMarried == false});
console.log(married.sort((a, b) => a.name > b.name ? 1 : -1));
console.log(notmarried.sort((a, b) => a.age < b.age ? 1 : -1));
let agemarried = married.reduce((accumulator, currentValue, initialValue) => accumulator + currentValue.age, initialValue);
quantity = 0;
married.forEach(() => {return quantity++});
console.log(agemarried/quantity);

// Task 6
let position = 0;
database.splice(position,1);
console.log(database);