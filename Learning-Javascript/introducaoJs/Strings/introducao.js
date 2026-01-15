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

let str3 = "0123456789";
console.log(str3.padStart(20, "-"));
console.log(str3.padEnd(20, "-"));
console.log(str3);

let telefone = "8399999-9999";
mascararTelefone(telefone);
// Saída esperada: "******9-9999"

function mascararTelefone(numero) { 
    let parteVisivel = numero.slice(7);
    let parteMascarada = numero.slice(0, 7).replace(/\d/g, "*");
    let telefoneMascarado = parteMascarada + parteVisivel;
    console.log(telefoneMascarado);
}