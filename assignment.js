// https://github.com/Lightsas/assignment-3

function kilometerToMeter (kilometer){
    // (We know that 1 kilometer is equal to 1000 meters)
    var meter = kilometer * 1000;
    return meter;
}

function budgetCalculator (num1, num2, num3) {
    // The first num1 is the clock
    // The second num2 is mobile
    // The third numb3 is the laptop
    var wactch = 50;
    var mobile = 100;
    var lapto = 500;
    var totalProduct = (num1 * wactch) + (num2 * mobile) + (num3 * lapto);
    pize = totalProduct;
    return pize;
}
// budgetCalculator(2, 6, 9); You have to write.


function hotelCost (hotelvara) {
var day = 0;
// [Since I don't know yet how long he will stay, the value of the day is 0]
// [frist10 is the first 10 days]
// [secound10 is the Seconds 10 days]
// [thirddays is the Seconds As long as]
if(hotelvara <= 10) {
    day = hotelvara * 100;
} else if (hotelvara <= 20) {
    var frist10 = 10 * 100;
    var remaing = hotelvara - 10;
    var secound10 = remaing * 80;
    day = frist10 + secound10;
}
else{
    var frist10 = 10 * 100;
    var secound10 = 10*80;
    var remaing = hotelvara - 20;
    var thirddays = remaing * 50;
    day = frist10 + secound10 + thirddays;
}
    return day;
}


function megaFriend (name) {
    var words = name.split(" ");
    var longest = ""
    for (var word of words) {
        if(word.length > longest.length) 
        longest = word;
    }
    return [longest];
    // [You have to take a few names inside a sting.]
}
