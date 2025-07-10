//Uygulama Döngüler

let sayilar = [3,5,7,8,12,23,45,66];

// for(let index=0; index<sayilar.length; index++){
//   console.log(index*index);
// }


// for(let i = 0; i < sayilar.length; i++){
//   if(sayilar[i] % 5 == 0){
//     console.log(sayilar[i]);
//   }
// }

// for(let i = 99; i>=50; i--){
//   console.log(i);
// }



//let urunler = ["iphone 16","samsung 25","iphone 17","samsung s26"];

// for(let i=0; i<urunler.length; i++){
//   console.log(urunler[i].toUpperCase());
// }

// let adet= 0;
// for(let i=0; i<urunler.length; i++){
//   if(urunler[i].includes("samsung")){
//     adet++;
//     console.log(urunler[i]);
//   }
// }
// console.log(adet);



let ogrenciler = [
  {"ad":"Yiğit","soyad":"Bilgi","notlar":[60,70,80]},
  {"ad":"Ada","soyad":"Bilgi","notlar":[80,50,80]},
  {"ad":"Çınar","soyad":"Turan","notlar":[70,70,80]}
]

for(let i=0; i<ogrenciler.length; i++){
  let not_toplam=0;
  let adet = 0;
  let ortalama = 0;
  for(let x=0; x<ogrenciler[i].notlar.length; x++)
  {
    not_toplam += ogrenciler[i].notlar[x];
    adet++;
  }

  ortalama = not_toplam/adet;

  console.log(`${ogrenciler[i].ad} ${ogrenciler[i].soyad} isimli öğrencinin not ortalaması ${ortalama}.`)
}

