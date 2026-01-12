const oi = {
    name: "sim, eu sou um objeto",
    idade: 50,
    cpf: "123"
}

console.log(oi)

const oi3 = new Object()
oi3.tnc = "sou um objeto tbm"
oi3["idade"] = 100

console.log(oi3)

const oiStr = new String("sou uma string")
console.log(oiStr)
console.log(typeof oiStr)
console.log(oiStr.length)

const date = Date();
console.log(date)
console.log(typeof date)

const date2 = new Date();
console.log(date2)
console.log(typeof date2)