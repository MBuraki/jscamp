let sayi1 = 10;
sayi1 = "Burak Davun"
let student = {id:1, name:"Burak"}
//console.log(student);

function save(puan=10, ogrenci) {
    console.log(ogrenci.name + " : " + puan)
}
//save(undefined,student);

let students = ["Engin Demiroğ",
    "Burak Davun","Songül Ekinci"]

//console.log(students)

let students2 = [student, 
    {id:2, name:"Kadriye"},"Bursa",
    {city:"İstanbul"}]

//console.log(students2)

//Rest-Arta kalanlar
let showProducts = function (id,...products) {
    console.log(id)
    console.log(products)    
}

//console.log(typeof showProducts)
//showProducts(10,"Elma","Armut","Karpuz")

//Spread-Ayrıştırıcı

let points = [1,2,5,79,26]
console.log(...points)
console.log(Math.max(...points))
console.log(..."ABC","D",..."EFG","H")

//Destructuring-Parçalayıcı

let populations = [10000,20000,30000,[40000,50000]]
let [small,medium,high,[veryHigh,maximum]] = populations
console.log(small)
console.log(medium)
console.log(high)
console.log(veryHigh)
console.log(maximum)

function someFunction([small1],number) {
    console.log(small1)
}

someFunction(populations)


let category = {id:1, name: "İçecek"}
console.log(category.id)
console.log(category["name"])

let {id,name} = category
console.log(id)
console.log(name) 


class Customer{
    constructor(id,customerNumber){
        this.id = id;
        this.customerNumber = customerNumber;
    }
}

let customer = new Customer(1, "12345");
//prototyping
customer.name = "Burki Davun"
console.log(customer.name)

Customer.bisey = "Bi şey"
console.log(Customer.bisey)

console.log(customer.customerNumber)

class IndividualCustomer extends Customer{
    constructor(firstName,id,customerNumber){
        super(id,customerNumber)
        this.firstName = firstName
    }
}

class CorporatCustomer extends Customer{    
    constructor(companyName,id,customerNumber){
        super(id,customerNumber)
        this.companyName = companyName
    }
}









