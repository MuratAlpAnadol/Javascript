//Numbers
let sonuc;

sonuc = 10;
sonuc = "10";
sonuc = Number("10");
sonuc = parseInt(10.7);
sonuc = parseFloat(10.7);
sonuc = parseInt("105a");
sonuc = parseInt("a105");

sonuc = isNaN("a10"); //is not a number ?
sonuc = Number.isInteger(10.5);

let sayi =10.12345;

sonuc = sayi.toPrecision(5);
sonuc =sayi.toFixed(2);

sonuc = Math.round(2.6);
sonuc = Math.round(2.4);
sonuc = Math.ceil(2.4);
sonuc = Math.floor(2.6);
sonuc = Math.sqrt(25);
sonuc = Math.pow(2,3);

sonuc = Math.floor(Math.random()* 10);//rastgele sayılar vermesini sağlar








console.log(typeof sonuc);
console.log(sonuc);