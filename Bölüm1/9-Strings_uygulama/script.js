//String Uygulamaları

let url = "https://www.sadikturan.com";
let kursAdi = "Komple Web Geliştirme Kursu";

let sonuc1=url.length;

let sonuc2=kursAdi.split(' ');

let sonuc3=url.startsWith("https");

let sonuc4=kursAdi.indexOf("Eğitimi");

kursAdi =kursAdi.toLowerCase();
kursAdi = kursAdi.replaceAll(' ', '-');
kursAdi = kursAdi.replace('ş','s');
let sonuc5=`${url}/${kursAdi};`

console.log(sonuc1);
console.log(sonuc2);
console.log(sonuc3);
console.log(sonuc4);
console.log(sonuc5);