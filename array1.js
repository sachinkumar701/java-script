const myarr = [1,2,3,4,5,6,7]
console.log(myarr[0]); // 1 print krega


// array methods

// myarr.push(8) // array ke end me add krega
// console.log(myarr); // [1,2,3,4,5,6,7,8] print krega

// myarr.pop() // array ke end se remove krega
// console.log(myarr); // [1,2,3,4,5,6,7] print krega

// myarr.shift() // array ke start se remove krega
// console.log(myarr); // [2,3,4,5,6,7] print krega

// myarr.unshift(9) // array ke start me add krega
// console.log(myarr); // [1,2,3,4,5,6,7] print krega

// console.log(myarr.includes(9)); // true print krega

// console.log(myarr.indexOf(9)); // 0 print krega

// const newarr = myarr.join()
// console.log(myarr); // [1,2,3,4,5,6,7] print krega
// console.log(newarr); // 1,2,3,4,5,6,7 print krega
// console.log(typeof newarr); // string print krega

//slice method

console.log("A ", myarr);// [1,2,3,4,5,6,7] print krega
const myn1 = myarr.slice(1,3)

console.log(myn1); // [2,3] print krega

console.log("B ", myarr);     //// [1,2,3,4,5,6,7] print krega

const myn2 = myarr.splice(1,3)// 1 se start h index aur 3 elements remove krega

console.log("C ", myarr );// [1,5,6,7] print krega
console.log(myn2);




