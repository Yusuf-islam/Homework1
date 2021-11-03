class Customer{

    constructor(id, customerNumber){

        this.id = id;//instens a karşılık gelir
        this.customerNumber = customerNumber;
    }

}

let customer = new Customer(1,"123456");
customer.name="John";//PROTOTYPING
console.log(customer.name)

console.log(customer.id)
console.log(customer.customerNumber)

class InviditualCustomer extends Customer{//implemantasyon

    constructor(firstName, id, customerNumber){

        super(firstName, id, customerNumber)//super base oluyor yani Costumer
        this.firstName = firstName;
    }
}
class CorporateCustomer extends Customer{
    constructor(company, id, customerNumber){
        super( id, customerNumber)
        this.company = company;

    }

}

