let x = 10;
function mudaX(x){
    x++;
    console.log("Dentro da função:", x);
    return x;
}

x = mudaX(x);
console.log("Fora da função:", x);


