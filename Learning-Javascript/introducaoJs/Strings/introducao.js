let str1 = "Hello, World!";
console.log(str1.replace("World", "JavaScript")); // "Hello, JavaScript!"

console.log(str1.indexOf("World"));
console.log(str1.includes("World"))

console.log(str1.slice(7, 12)); // "World"
console.log(str1.substring(7, 12)); // "World"

console.log(str1.toUpperCase()); // "HELLO, WORLD!"
console.log(str1.toLowerCase()); // "hello, world!"

let strAsObj = new String("minha string como objeto");
console.log(typeof strAsObj);
console.log(strAsObj.valueOf());
console.log(strAsObj.toString());

let str2 = "   Espaços em branco   ";
console.log(str2.trim()); // "Espaços em branco"
console.log(str2.trimStart()); // "Espaços em branco   "
console.log(str2.trimEnd()); // "   Espaços em branco"