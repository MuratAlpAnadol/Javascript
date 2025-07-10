// Object Properties

function Rectangle(name, width, height){
    this.name = name;
    this.width = width;
    this.height = height;
    this.area = function(){
        return this.width*this.height;
    }
}

const rect1 = new Rectangle("Rectangle 1", 10, 5);
const rect2 = new Rectangle("Rectangle 2", 20, 15);


//Add property
rect1.color="Red";

//Remove property
// delete rect1.color;

console.log(rect1.hasOwnProperty("color"));

rect2.perimeter = function(){
    return 2*(this.width + this.height)
}

console.log(rect1);
console.log(rect2);

console.log(rect1.area());
console.log(rect2.area());

console.log(rect2.perimeter());

//Get Keys
console.log(Object.keys(rect1));

//Get Values
console.log(Object.values(rect1));


//Get entities
console.log(Object.entries(rect1));

