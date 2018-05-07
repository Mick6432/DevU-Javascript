let a, b, c, d, e;

let names = ['David', 'Eddie', 'Alex', 'Michael', 'Sammy'];

[a, b, c, e, d] = names;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e + '\n');



let others;

[a, b, ...others] = names;

console.log(a);
console.log(b);
console.log(others + '\n');


let year, model;

({year, model} = {
    make: 'BMW',
    model: '745li',
    year: 2010,
    value: 5000
});

console.log(year);
console.log(model);