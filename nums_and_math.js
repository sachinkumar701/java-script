const score = 300
//console.log(score); // 300 print krega pr isme ye primitive number h

const balance = new Number(100);
// console.log(balance);// 100 print krega or btaega ki ye number object h
// console.log(balance.toString()); // 100 print krega
// console.log(balance.toString().length); // 3 print krega
// console.log(balance.toFixed(2)); // 100.00 print krega or

const ithernumber = 23.54849

// console.log(ithernumber.toPrecision(2)); // 24 print krega 

const hundreds = 1000000
// console.log(hundreds.toLocaleString("en-IN")); // 10,00,000 print krega or indian format me print krega




//====================MATHS===========================
console.log(Math);
console.log(Math.abs(-4)); // 4 print krega abs ka mtlb absolute value h negative ko positive me convert krega
console.log(Math.round(4.5));
console.log(Math.ceil(4.1)); // 5 print krega ceil ka mtlb h ki jo number h usse upar ke number me convert krega
console.log(Math.floor(4.9)); // 4 print krega floor ka mtlb h ki jo number h usse niche ke number me convert krega
console.log(Math.min(1, 2, 3, 4, 5)); // 1 print krega min ka mtlb h ki jo number h usme se minimum number ko print krega
console.log(Math.max(1, 2, 3, 4, 5)); // 5 print krega max ka mtlb h ki jo number h usme se maximum number ko print krega
console.log(Math.random()); // 0 to 1 ke beech ka koi bhi random number print krega
console.log(Math.random() * 10); // 0 to 10 ke beech ka koi bhi random number print krega
console.log( Math.floor(Math.random() * 10) +1); // 1 to 10 ke beech ka koi bhi random number print krega or floor ka mtlb h ki jo number h usse niche ke number me convert krega


const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min +1)) + min);
//
