//String Metotları

var kursAdi = "Komple Uygulamalı Web Geliştirme Eğitimi";
var sonuc;

sonuc = kursAdi.toLowerCase();
sonuc = kursAdi.toUpperCase();
sonuc = kursAdi.length;
sonuc = kursAdi[0];
sonuc = kursAdi.slice(0,6);

sonuc = kursAdi.substring(0,6);
sonuc = kursAdi.substring(10);

sonuc = kursAdi.replace("Eğitimi", "Kursu");

sonuc = kursAdi.trim();//Baştaki ve sondaki boşlukları alır.

sonuc = kursAdi.indexOf("Komple");

sonuc = kursAdi.split(" ");
sonuc = kursAdi.split(" ")[1];



console.log(sonuc);