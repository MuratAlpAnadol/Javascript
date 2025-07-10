//Uygulama-Fonksiyonlar

// function yazdır(x,a){

//   for(i=0;i<a;i++){
//   console.log(x)
//   }
// }

// yazdır("Selam",5);

//************************************* */

// function dikdortgenalan(x,y){
//   let A=x*y;
//   let B=x+y;

//   return `Alan:${A}, Çevre:${B}`;
// }

// console.log(dikdortgenalan(5,10));

//************************************* */

// function YazıTura(){
//   let random = Math.random();

//   if(random < 0.5){
//     console.log("yazı");
//   } else {
//     console.log("tura");
//   }
// }
// for(let i =0; i<10; i++){
// YazıTura();
// }

//************************************* */

// function tamBolenleriBul(sayi){
//   let sayilar = [];
//   for(let i=2 ;i<=sayi; i++){
//     if(sayi % i == 0){
//       sayilar.push(i);
//     }
//   }
//   return sayilar;
// }

// console.log(tamBolenleriBul(20));  //2,3,4,5,6,7..19
// console.log(tamBolenleriBul(45));  //2,3,4,5,6,7..19

//************************************* */

function toplam(){
  let sonuc = 0;
  for(let i = 0; i < arguments.length; i++){
    sonuc += arguments[i];
  }
  return sonuc;
}

let sonuc;
sonuc = toplam(10,20);
sonuc = toplam(10,20,30);

console.log(sonuc);