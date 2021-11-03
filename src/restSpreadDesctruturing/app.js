console.log("Merhaba Kodlama.io")
//PascalCase
//camelCase


var dolarDun = 9.20
var dolarBugun = 9.50
const dolar= 3.14
let price = ["Home Price","Car Price","Total Price",
["Lessons Price","Book Price"]]
var student = {
    id : 1,
    name:"Ali"

}

function Save( puan = 10,student){
    console.log(puan+" : "+student.name)

}
Save(undefined,student)


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


//rest: geriye kalanlar(c# params) önemli bir konudur. 
let showProducts = function (id,...products){
//üç nokta kullanımı(rest): products aslında bir arraydir
    console.log(id)
    console.log(products[0])

}



// showProducts(10,"ahmet","mehmet","cevdet")
// console.log(typeof(showProducts))

//Spread : diziyi ayırır. üç nokta ile kullanıldı
let points = [1,2,3,4,5,6,7,8,9,60]
console.log(Math.max(...points))

//DESTRUCTURING : Elimizdeki arrayin değerlerini değişkene atamak
let populations = [10000,20000,30000,[40000,100000]]
let [small , medium, high,[veryHigh,maximum]] = populations //let kullanarak bu değişkenlere populationsdaki değerleri sırasıyla atadık
console.log(small)
console.log(medium)
console.log(high)
console.log(veryHigh)//destructuring içinde destructuring yaptık
console.log(maximum)


function someFunction([small1],number){
    console.log(small1)

}
someFunction(populations)//burda populationın ilk elemanını DESTRUCTURİNG yapacak ve small1 e atayacak


console.log(student.name)
console.log(Dunya())




