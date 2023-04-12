/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    let sum = num;
    while(1){
        if(sum<10) break;
        num = sum;
        sum = 0;
        while(1){
            if(num == 0) break;
            sum += num%10;
            num = parseInt(num/10);
        }
    }
    return sum;
};