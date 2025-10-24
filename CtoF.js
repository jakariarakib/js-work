
const CtoF = (celsius) =>{
    const Ctemp = celsius;
    const CtoFr = Ctemp * 9 / 5 + 32;
    const massage = `${Ctemp} to is ${CtoFr}`
    console.log(massage);
}

const FtoC = (frenhit) =>{
    const Ftemp = frenhit;
    const FrtoC = Ftemp - 32 *5 / 9;
    const massage = `${Ftemp} to is ${FrtoC}`;
    console.log(massage);
}

CtoF(80);
FtoC(89);