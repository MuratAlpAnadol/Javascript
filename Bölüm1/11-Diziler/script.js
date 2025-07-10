//Diziler

let urun1 = "Iphone 15";
let urun2 = "Iphone 16";
let urun3 = "Iphone 17";

let urunler = ["Iphone 15", "Iphone 16", "Iphone 17"];
let fiyatlar = [50000,60000,70000];
let renkler = ["gold","black","silver"];

let sonuc;

sonuc = `${urunler[0]} - ${fiyatlar[0]}- ${renkler[0]}`;
sonuc = `${urunler[1]} - ${fiyatlar[1]}- ${renkler[1]}`;
sonuc = `${urunler[2]} - ${fiyatlar[2]}- ${renkler[2]}`;

let urun4 = [
    "Iphone 15",
     50000,
      ["gold","black","silver"]
];
let urun5 = ["Iphone 16", 60000, "black"];
let urun6 = ["Iphone 17", 70000, "silver"];

//güncelleme yapmak istersek

urun4[0]="Iphone 17 Plus";

sonuc=`${urun4[0]} ${urun4[1]} ${urun4[2][2]}`;

console.log(sonuc);
