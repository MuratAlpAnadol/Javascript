//Objects

//Person,Product,Comment

const product = {
    //properties
    title:"Samsung S25",
    description:"Güzel bir telefon",
    price : 70000,
    stock:100,

    //methods
    display: function(){
        return `Ürün başlığı: ${this.title} ürün açıklaması ${this.description} ürün değeri:${this.price}`;
    },
    is_active: function(){
        return (this.stock > 0)?"satışta":"stok yok";
    }
};

console.log(product.title);
console.log(product.description);
console.log(product.price);
console.log(product.display());


console.log(product.is_active());