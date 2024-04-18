
function generateTable()
{
    var m1 = document.getElementById("numberInput").value;
    var m2 = document.getElementById("numberInput2").value;

    var datahtml = "<p>MULTIPLICANT(M) = " + m1  + " (" + deci2bin(m1)+ ")" +"</p>"
    datahtml += "<p>MULTIPLIER(Q) = " + m2 + " (" + deci2bin(m2)+ ")"+"</p>"

    datahtml += "<p>-M = "   + convert(deci2bin(m1))  +"</p>"

    datahtml += "<p>-Q = " +  convert(deci2bin(m2))  +"</p>"


    document.getElementById("data").innerHTML = datahtml;




    boothMultiplication(m1, m2);
}

// Function to perform binary Addition
function addition(a, b) {
    const n = a.length;
    const m = b.length;
    const l = Math.max(n, m);
    a = a.padStart(l, '0');
    b = b.padStart(l, '0');
    let carry = 0;
    let ans = '';

    for (let i = l - 1; i >= 0; i--) {
        const tem = carry + parseInt(a[i]) + parseInt(b[i]);
        if (tem < 2) {
            ans = tem + ans;
            carry = 0;
        } else if (tem === 2) {
            ans = '0' + ans;
            carry = 1;
        } else if (tem === 3) {
            ans = '1' + ans;
            carry = 1;
        }
    }

    ans = '0'.repeat(l - ans.length) + ans;
    return ans;
}

// Function to perform 1's Complement
function onesComplement(num) {
    let comp = '';
    for (const c of num) {
        comp += c === '0' ? '1' : '0';
    }
    return comp;
}

// Function to perform 2's Complement
function twosComplement(num) {
    const oneCom = onesComplement(num);
    return addition(oneCom, '1');
}

// Function to Convert number to binary
function setBin(num) {
    let binary = '';
    let decimal = Math.abs(num);
    while (decimal > 0) {
        binary = (decimal % 2 === 1 ? '1' : '0') + binary;
        decimal = Math.floor(decimal / 2);
    }
    return binary || '0';
}

// Function to set Binary as signed (by 2's complement)
function setSigned(d, num) {
    if (d >= 0) {
        return '0' + num;
    } else {
        return '1' + twosComplement(num);
    }
}

// // Main function to perform binary multiplication using Booth's algorithm
// function boothMultiplication(multiplicand, multiplier) {
//     let output = '';

//     let n1 = setBin(multiplicand);
//     let n2 = setBin(multiplier);
//     const m = Math.max(n1.length, n2.length);
//     n1 = n1.padStart(m, '0');
//     n2 = n2.padStart(m, '0');

//     let br = setSigned(multiplicand, n1);
//     let qr = setSigned(multiplier, n2);
//     let br1 = twosComplement(br);

//     output += `br                        : ${br}\n`;
//     output += `br' ( in 2's complement ) : ${br1}\n`;
//     output += `qr                        : ${qr}\n\n`;

//     let ac = '0'.repeat(m + 1);
//     let qn1 = '0';

//     output += "Qn\tQn+1\t\tAC\tQR\tQn+1\tSC\n";
//     output += "----------------------------------------------------\n";
//     output += `\t\tInitial\t${ac}\t${qr}\t${qn1}\t${m + 1}\n\n`;

//     for (let i = 0; i <= m; i++) {
//         const qn = qr.slice(-1);
//         let a = 0;

//         if (qn === '1' && qn1 === '0') {
//             a = 1;
//             ac = addition(ac, br1);
//             output += `${qn}\t${qn1}\tSub BR\t${br1}\n`;
//             output += `\t\t\t${ac}\t${qr}\n\n`;
//         } else if (qn === '0' && qn1 === '1') {
//             a = 1;
//             ac = addition(ac, br);
//             output += `${qn}\t${qn1}\tAdd BR\t${br}\n`;
//             output += `\t\t\t${ac}\t${qr}\n\n`;
//         }

//         qn1 = qr.slice(-1);
//         qr = ac.slice(-1) + qr.substring(0, m);
//         ac = ac.slice(0, 1) + ac.substring(0, m);

//         if (a === 1) {
//             output += `\t\tAshr\t${ac}\t${qr}\t${qn1}\t${m - i}\n`;
//         } else {
//             output += `${qn}\t${qn1}\tAshr\t${ac}\t${qr}\t${qn1}\t${m - i}\n`;
//         }
//     }

//     let ans = ac + qr;
//     if (ans.charAt(0) === '1') {
//         output += `Result : ${ans}\n`;
//         output += `Result in decimal: -${parseInt(twosComplement(ans), 2)}\n`;
//     } else {
//         output += `Result : ${ans}\n`;
//         output += `Result in decimal: ${parseInt(ans, 2)}\n`;
//     }

//     console.log(output);
// }


// Main function to perform binary multiplication using Booth's algorithm
function boothMultiplication(multiplicand, multiplier) {
    let output = '<table border="1">';
    output += '<tr><th>Qn</th><th>Qn+1</th><th>OPERATION</th><th>AC</th><th>Q</th><th>Qn+1</th><th>N</th></tr>';

    let n1 = setBin(multiplicand);
    let n2 = setBin(multiplier);
    const m = Math.max(n1.length, n2.length);
    n1 = n1.padStart(m, '0');
    n2 = n2.padStart(m, '0');

    let br = setSigned(multiplicand, n1);
    let qr = setSigned(multiplier, n2);
    let br1 = twosComplement(br);


    output += `<tr><td></td><td></td><td>Initial</td><td>${'0'.repeat(m + 1)}</td><td>${qr}</td><td>${'0'}</td><td>${m + 1}</td></tr>`;
    let ac = '0'.repeat(m + 1);
    let qn1 = '0';

    for (let i = 0; i <= m; i++) {
        const qn = qr.slice(-1);
        let a = 0;

        if (qn === '1' && qn1 === '0') {
            a = 1;
            ac = addition(ac, br1);
            output += `<tr><td>${qn}</td><td>${qn1}</td><td>Sub M</td><td>${br1}</td><td></td><td></td><td></td></tr>`;
            output += `<tr><td></td><td></td><td></td><td>${ac}</td><td>${qr}</td><td></td><td></td></tr>`;
        } else if (qn === '0' && qn1 === '1') {
            a = 1;
            ac = addition(ac, br);
            output += `<tr><td>${qn}</td><td>${qn1}</td><td>Add M</td><td>${br}</td><td></td><td></td><td></td></tr>`;
            output += `<tr><td></td><td></td><td></td><td>${ac}</td><td>${qr}</td><td></td><td></td></tr>`;
        }

        qn1 = qr.slice(-1);
        qr = ac.slice(-1) + qr.substring(0, m);
        ac = ac.slice(0, 1) + ac.substring(0, m);

        if (a === 1) {
            output += `<tr><td></td><td></td><td>SHIFT RIGHT</td><td>${ac}</td><td>${qr}</td><td>${qn1}</td><td>${m - i}</td></tr>`;
        } else {
            output += `<tr><td>${qn}</td><td>${qn1}</td><td>SHIFT RIGHT</td><td>${ac}</td><td>${qr}</td><td>${qn1}</td><td>${m - i}</td></tr>`;
        }
    }

    let ans = ac + qr;
    if (ans.charAt(0) === '1') {
        output += `<tr><td colspan="6">Result : ${ans}</td><td>Result in decimal: -${parseInt(twosComplement(ans), 2)}</td></tr>`;
    } else {
        output += `<tr><td colspan="6">Result : ${ans}</td><td>Result in decimal: ${parseInt(ans, 2)}</td></tr>`;
    }

    output += '</table>';

    document.getElementById("tableContainer").innerHTML = output;
}

























//.......................
function deci2bin(num)
{
    let decimalNumber = Number(num);
    let binaryString = decimalNumber.toString(2);
    return binaryString;
}
//.........................





//.......................
function bin2deci(num)
{
    let binaryNumber = String(num);
    let decimal =parseInt(binaryNumber, 2);
    return decimal;
}
//.........................





//...................................................................

//  convert num is to convert binary number to tos_complementary

function convert(num) {
    const binaryString = num; // Replace this with your binary string

    const onesComplement = calculateOnesComplement(binaryString);
    const twosComplement = calculateTwosComplement(onesComplement);

    // Uncomment the lines below if you want to print the results
    // console.log("Original Binary: " + binaryString);
    // console.log("Ones Complement: " + onesComplement);
    // console.log("Twos Complement: " + twosComplement);

    return twosComplement;
}

function calculateOnesComplement(binaryString) {
    let onesComplement = '';

    for (let bit of binaryString) {
        onesComplement += (bit === '0') ? '1' : '0';
    }

    return onesComplement;
}

function calculateTwosComplement(onesComplement) {
    const length = onesComplement.length;
    let twosComplement = onesComplement.split('');

    // Add 1 to the least significant bit
    for (let i = length - 1; i >= 0; i--) {
        if (onesComplement.charAt(i) === '0') {
            twosComplement[i] = '1';
            break;
        } else {
            twosComplement[i] = '0';
        }
    }

    return twosComplement.join('');
}

//.........................................................................




function goToTheory() 
{
    window.location.href = "restoring_theory.html";
}