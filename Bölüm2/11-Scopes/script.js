//Scopes => let,const:sabit tanımlama

//global scope

var isim = "Ahmet";
const tc ="12345666"// sabit değiştirelemeyen atamadır

function yazdır() { // function scope
    var isim="Can";
    var yas = 18;
    console.log(isim);
    console.log(yas);
}

if(true){
    let isim = "Canan";  // let ile block scope oluşturmuş oldum.
    let cinsiyet = "Kadın";
    console.log(isim);
    console.log(cinsiyet);
}

//fonksiyonlar kendi scope alanlarını oluşturur.
//block içerisinde yeni bir scope oluşmaz.(let,const)

// console.log(cinsiyet);

//yazdir();
console.log(isim);