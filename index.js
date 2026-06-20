// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };

function calculateTax(amount){
    let tax = (10/100) * amount;
    return tax;
}
console.log(calculateTax(500));



function convertToUpperCase(text){
    let name = text.toLowerCase();
    return name.toUpperCase();
}
console.log(convertToUpperCase("johnbrian"));



function findMaximum(num1, num2){
    if(num1 > num2){
        return num1;
    }else{
        return num2;
    }
}
console.log(findMaximum(87, 24));



function calculateDiscountedPrice(originalprice, discountpercentage){
    let discount = (discountpercentage/100) * originalprice;
    let discountedprice = originalprice - discount;
    return discountedprice;
}
console.log(calculateDiscountedPrice(5000, 10));



function isPalindrome(word) {
    let reversedWord = word.split("").reverse().join("");

    return word === reversedWord;
}

console.log(isPalindrome("john"));
console.log(isPalindrome("polygamist"));