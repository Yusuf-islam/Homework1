function findPrime(...numbers){
    for(let i=0; i<numbers.length; i++){
        let counter=0
        if(numbers[i]<=2){
            console.log(numbers[i]+" is prime number")
        }
        else{

            for(let j=2; j<numbers[i];j++){
                if(numbers[i]%j==0)
                    counter++;              
                
            }
            if(counter==0){
                console.log(numbers[i]+" is prime number")
            }
            else
                console.log(numbers[i]+" isn't prime number")
        }
    }


}


function findPrimeUpTo1000(){
    for(let i=0; i<1000; i++){
        let counter=0
        if(i<=2){
            console.log(i+" is prime number")
        }
        else{

            for(let j=2; j<i;j++){
                if(i%j==0)
                    counter++;              
                
            }
            if(counter==0){
                console.log(i+" is prime number")
            }
            else
                console.log(i+" isn't prime number")
        }
    }


}

function friendNumber(number1,number2){
   let number1DivisibleSum = findDivisibleSum(number1)
   let number2DivisibleSum = findDivisibleSum(number2)
    console.log(number1DivisibleSum)
    console.log(number2DivisibleSum)
    if(number1DivisibleSum==number2 && number2DivisibleSum==number1)
        console.log("These number is friends number ")
    else
        console.log("These number isn't friends number")
}

function findDivisibleSum(number){
   let sum=0
    for(var i=2;i<number;i++){
        if(number%i==0)
            sum+=i
    }
    return sum+1
}

function findPerfectNumber(){
    for(let i=2; i<=1000;i++){

        let numberDivisibleSum = findDivisibleSum(i)
        if(numberDivisibleSum==i){
            console.log(i+" is perfect number")
        }
        else
            console.log(i+" isn't perfect number")
    }
}

findPrime(2,15,11,17,93)
friendNumber(220,284)
findPerfectNumber()
findPrimeUpTo1000()