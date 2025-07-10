//For Döngüsü

// for(let i=1; i<=100; i++){
//     console.log(i);
// }


let sayilar = [1,2,3,4,5,6,7,8,0,12];
let toplam=0;

for(let index=0; index < sayilar.length; index++)
{
   console.log(sayilar[index]);
   toplam += sayilar[index];

}

console.log(toplam);