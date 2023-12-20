
var customerName = "bob";

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  bestCustomer = "not bob"
}

function overwriteBestCustomer() {
  bestCustomer = "maybe bob";
}

const leastFavoriteCustomer = "Alice";

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = "Bob";
}

console.log(returnsCustomerName()); 

upperCaseCustomerName();
console.log(returnsCustomerName()); 

setBestCustomer();
console.log(bestCustomer);

overwriteBestCustomer();
console.log(bestCustomer); 

console.log(leastFavoriteCustomer); 