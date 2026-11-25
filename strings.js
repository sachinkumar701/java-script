const gameName = new String('sachin');
console.log(gameName[0]); // s
console.log(gameName.length); // 6
console.log(gameName.toUpperCase()); // SACHIN
console.log(gameName.charAt(0)); // s
console.log(gameName.indexOf('a')); // 1

const newString =gameName.substring(0, 3);
console.log(newString); // sac

const newString2 = gameName.slice(-5, 3);
console.log(newString2); 

const newString3 = "    sachin     "
console.log(newString.trim()); // sachin

const url = "https://www.sachin.com";
const newurl = url.replace("sachin", "ram");
console.log(newurl); // https://www.ram.com

const name = "sumit";
const repoCount= 50;
console.log(`Hello my name is ${name} and i have repo count is ${repoCount}`);

