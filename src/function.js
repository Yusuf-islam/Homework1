//npm run dev localhost açma

function addToCart(product,quantity=10) {//burada quantity default

    console.log(product + " added to cart."+ " Quantity : "+ quantity)

}
function removeFromCart(product="Personal Cart"){//burdaki default değerdir
//default değer eğer bir değer göderilezse default değer kullanılır.    
    console.log(product + " removed from cart")


}

addToCart("Smartphone",15)
addToCart()

let sayHello = () => {
    console.log("Hello")
}
sayHello()

function addToCart2(productName,quantity,unitPrice) {
    console.log(productName+" "+ quantity+ " "+ unitPrice)

}
addToCart2("elma",10,5);//object olmadan el ile girilmiş hal
function addToCart3(product){

    console.log(product.productName+" "+ product.quantity+" "+ product.unitPrice)
}
let product1 = {productName:"Elma",unitPrice:10,quantity:5}//object notation 
let product2 = {productName:"Karpuz",unitPrice:10,quantity:5}//object notation 
let product3 = {productName:"Armut",unitPrice:10,quantity:5}//object notation 
product2 = product3
product2.productName="Elma"

console.log(product3.productName)//reference type -> objectler , array

let say1=10
let say2=20
say1 = say2
say2 = 100
console.log(say1)//value type
addToCart3(product1)//object oluşturulmuş hali

function addToCart4(x ){

    console.log(products)//scoup: Süslü parantez bölümü, eğer ilk scroup da yoksa bi üste bakıyor orda olduğu için çalışıyor.

}

let products = [
    {productName:"Elma",unitPrice:10,quantity:5},
    {productName:"Karpuz",unitPrice:10,quantity:5},
    {productName:"Armut",unitPrice:10,quantity:5}
]

addToCart4(products)

function add(...numbers)//rest operatörü(array yapıyor),her zaman sondaki parametre olur
{
    let sum=0;
    for (let i = 0; i < numbers.length; i++){
        sum += numbers[i]     
    }
    console.log(sum)
}
add(20,50,40)

//spread: bir dizinin elemanlarını ayırmak için kullanılır.
let numbers = [1,2,3,4,5,6,7,15]
console.log(...numbers)


//destruck: çoklu atama , set etme
let [icAnadolu, marmara,karadeniz,[icAnadoluSehir,marmaraSehir,karadenizSehir]] = [
    {name: "Ic Anadolu", population:"20m"}, 
    {name: "Marmara", population:"30m"},
    {name: "Karadeniz", population:"10m"},
    [
        ["Ankara","Konya"],
        ["Istanbul","Bursa"],
        ["Karabuk","Trabzon"]
    ]
]
console.log(icAnadolu)
console.log(marmara)
console.log(icAnadolu.name)
console.log(marmara.name)
console.log(icAnadoluSehir)
console.log(marmara.nameSehir)
console.log(karadenizSehir)