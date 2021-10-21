console.log("Merhaba Kodlama.io")
//PascalCase
//camelCase
var dolarDun = 9.20
var dolarBugun = 9.50
const dolar= 3.14
let price = ["Home Price","Car Price","Total Price",
["Lessons Price","Book Price"]]


console.log("<ul>")
for (var i=0; i<price.length; i++){
    console.log("<li>",price[i],"</li>")
}

console.log("</ul>")
console.log(dolarDun)

function Dunya(){
    let number = "Hello World!"
    return number
} 

//LET vs VAR
//let(local değişken) tanımlandığı blok içerisinde geçerli olur.
//var(global değişken) ise bütün bloklarda geçerlidir. 
//const read-only dir
console.log(Dunya())
