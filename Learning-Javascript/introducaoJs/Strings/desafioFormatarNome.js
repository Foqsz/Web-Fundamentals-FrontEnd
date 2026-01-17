function formatarNome(nomeCompleto)
{
    // nomeCompleto = nomeCompleto.trim();
    // let primeiroEspaco = nomeCompleto.indexOf(" ");
    // if(primeiroEspaco < 0)
    //     return nomeCompleto;
    
    // let primeiroNome = nomeCompleto.slice(0, primeiroEspaco);
    // let sobrenome = nomeCompleto.slice(primeiroEspaco + 1);
    // return sobrenome + ", " + primeiroNome;

//     return nomeCompleto.split(" ").length > 1 ?
//         nomeCompleto.slice(nomeCompleto.indexOf(" ") + 1) + ", " + 
//         nomeCompleto.slice(0, nomeCompleto.indexOf(" ")) :
//         nomeCompleto;

    let nomes = nomeCompleto.split(" ");
    if(nomes.length <= 1)
        return nomeCompleto;
    let primeiroNome = nomes.shift();
    let sobrenome = nomes.join(" ");
    return sobrenome + ", " + primeiroNome;
}

console.log(formatarNome("Pedro Alves Souza"))