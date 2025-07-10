let sonuc;

//document.getElementById()

// sonuc = document.getElementById("title");
// sonuc = document.getElementById("title").id;
// sonuc = document.getElementById("title").className;
// sonuc = document.getElementById("title").classList;

// document.getElementById("title").style.fontsize = "40px";
// document.getElementById("title").style.color = "red";
// document.getElementById("title").style.color = "none";

// document.getElementById("title").innerText = "Alışveriş Listesi";
// document.getElementById("title").innerHTML = "<p>Alışveriş Listesi<p>";

// 2- document.querySelector() => id,class,elemantName

// sonuc = document.querySelector("#title");
// sonuc = document.querySelector(".app-title");
// sonuc = document.querySelector("h1");
// sonuc = document.querySelector("input[type='submit'");


// sonuc = document.querySelector("li:nth-child(2)");
// sonuc = document.querySelector("li:nth-child(2)").innerText ="Eleman 3";
// sonuc = document.querySelector("li:nth-child(2)").computedStyleMap.color="red";

const parentElement = document.querySelector("ul");
console.log(parentElement);

const firstElement = parentElement.querySelector("li");
firstElement.style.color = "blue";

console.log(firstElement);






console.log(sonuc);