// let nacionalidade = prompt("digite aqui a nacionalidade").toLowerCase();

// if(nacionalidade === "brasileira"){
//     console.log("a pessoa é do Brasil!");
// } else if(nacionalidade === "argentina"){
//     console.log("a pessoa é da Argentina!");
// } else if(nacionalidade === "uruguaia"){
//     console.log("a pessoa é do Uruguai!");
// } else if(nacionalidade === "chilena"){
//     console.log("a pessoa é do Chile!");
// } else if(nacionalidade === "colombiana"){
//     console.log("a pessoa é da Colômbia!");
// } else{
//     console.log("nacionalidade não encontrada")


// }


let nacionalidade = prompt("digite aqui a nacionalidade").toLowerCase()


switch(nacionalidade){
    case "brasil":
    console.log("a pessoa é do Brasil!");
    break

    case "argentina":
    console.log("a pessoa é da Argentina!");
    break

    case "aruguai":
    console.log("a pessoa é do Uruguai!");
    break

    case "chile":
    console.log("a pessoa é do Chile!");
    break

    case "colômbia":
    console.log("a pessoa é da Colômbia!");
    break

    default:
    console.log("nacionalidade não encontrada")

    }