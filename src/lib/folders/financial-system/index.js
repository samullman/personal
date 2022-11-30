const makeid = require("./helpers").makeid;
const Person = require("./person").Person;
const Bank = require("./bank").Bank;

let bank = new Bank();
let person = new Person("Shirley");

person.earn(100);

person.signUp( bank );
person.addCustomer( customer );

customer.deposit( bank.id, 50);
bank.receiveDeposit( customer, 50 );

console.log( customer )
console.log( bank )