// object destructuring 

const band = {
    bandName : "cold play",
    famousSong : " hymn for the weekend"
}

// const bandName = band.bandName;
// const famousSong = band.famousSong;
// console.log (bandName, famousSong);
const {bandName , famousSong} = band ;
console.log(bandName);
console.log(famousSong);

const band2 = {
    bandName : " Imagine Dragons",
    FamousSong : "enemy",
    year : 2005,
    anotherFamousSong : "thunder"
}

let {bandName: var1 , FamousSong: var2, ...restProps} = band2 ;
console.log(var1);
console.log(var2);
console.log(restProps); // this will return an object
