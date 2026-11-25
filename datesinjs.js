// let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());// 2023-02-23T00:00:00.000Z print krega
// console.log(myDate.toDateString());// 2023-02-23 print krega
// console.log(myDate.toTimeString());// 00:00:00 GMT+0530 (India Standard Time) print krega
// console.log(myDate.toLocaleString());// 23/2/2023, 12:00:00 AM print krega
// console.log(myDate.toLocaleDateString());// 23/2/2023 print krega
// console.log(myDate.toLocaleTimeString());// 12:00:00 AM print krega

// console.log(typeof myDate); // object print krega

// let mycreatedate = new Date(2023,1,23)// 0 se start h month ka index
// console.log(mycreatedate.toDateString()); // 23/1/2023 print krega

// let myTimestamp = Date.now();
// console.log(myTimestamp); // 1677072000000 print krega ye timestamp h
// console.log(Math.floor(myTimestamp/1000)); // 1677072000 print krega ye timestamp h in seconds or milliseconds me h 1000 ko hta do

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()); // 0 se start h month ka index
console.log(newDate.getDate()); // 1 se start h date ka index
console.log(newDate.getFullYear()); // 2026 print krega
console.log(newDate.getDay()); // 0 se start h day ka index


