function deci2bin(num)
{
    let decimalNumber = num;
    let binaryString = decimalNumber.toString(2);
    return binaryString;
}

console.log(deci2bin(Number("7")));