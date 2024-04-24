// function generateTable() {
//     // Get the user-entered number

//     var decimalNumber = document.getElementById("numberInput").value;

//     var decimalNumber2 = document.getElementById("numberInput2").value;
//     let A = deci2bin(Math.abs(decimalNumber)).toString();
//     let B = deci2bin(Math.abs(decimalNumber2)).toString();




//     var datahtml = '<p class="meow" >1) Represent the numbers in Binary :</p>';




//     if (decimalNumber < 0) {
//         A = convert(A);
//         datahtml += "<p>MULTIPLICANT(A) = " + decimalNumber + " (<span style='text-decoration: underline; color: red;'>1"  + "</span>"+ A+")</p>";
//         A = "1" + A;
//     } else {
//         datahtml += "<p>MULTIPLICANT(A) = " + decimalNumber + " (<span style='text-decoration: underline; color: red;'>0"  + "</span>"+ A+")</p>";
//         A = "0" + A;
//     }

//     if (decimalNumber2 < 0) {
//         B = convert(B);
//         datahtml += "<p>MULTIPLIER(B) = " + decimalNumber2 + " (<span style='text-decoration: underline; color: red;'>1"  + "</span>"+ B+")</p>";
//         B = "1" + B;
//     } else {
//         datahtml += "<p>MULTIPLIER(B) = " + decimalNumber2 + " (<span style='text-decoration: underline; color: red;'>0"  + "</span>"+ B+")</p>";
//         B = "0" + B;
//     }

//     datahtml += '<p class="meow" >2)Perform sign extension to make the number of bits of the operands equal.</p>';

    

//     if (A.length !== B.length) {
//         if (A.length > B.length) {
//             if (decimalNumber2 > 0) {
//                 while (A.length !== B.length) {
//                     B = "0" + B;
//                 }
//             } else {
//                 while (A.length !== B.length) {
//                     B = "1" + B;
//                 }
//             }
//         }
//         if (B.length > A.length) {
//             if (decimalNumber > 0) {
//                 while (A.length !== B.length) {
//                     A = "0" + A;
//                 }
//             } else {
//                 while (A.length !== B.length) {
//                     A = "1" + A;
//                 }
//             }
//         }
//     }




//     datahtml += "<p>MULTIPLICANT(A) = " + A +"</p>";
//     datahtml += "<p>MULTIPLIER(B)   = " + B +"</p>";

//     datahtml += "<p>Length(n)  = " + A.length +"</p>";

//     let count = B.length;

//     datahtml += '<p class="meow" >3)Append 0 to the least significant bit.</p>';

//     datahtml += "<p>MULTIPLIER(B) = (<span style='text-decoration: underline; color: red;'>0"  + "</span>"+ B+")</p>";


//     B = B + "0";

//     datahtml += '<p class="meow" >4)If the multiplier has an odd number of bits (n is odd), perform sign extension(sign of multiplier).</p>';


//     if (count % 2 === 1) {
//         if (decimalNumber2 < 0) {
//             datahtml += "<p>MULTIPLIER(B) = (<span style='text-decoration: underline; color: red;'>1"  + "</span>"+ B+")</p>";
//             B = "1" + B;
//         } else {
//             datahtml += "<p>MULTIPLIER(B) = (<span style='text-decoration: underline; color: red;'>0"  + "</span>"+ B+")</p>";

//             B = "0" + B;
//         }
//     }
//     else
//     {
//         datahtml += "<p>Not needed in this problem because n is even</p>";
//     }

//     datahtml += '<p class="meow" >5)Bitpair Table</p>';
//     document.getElementById("data").innerHTML = datahtml;



//     var tableHTML = "<table border='1'><tr><th style='color: black;'>B(i)B(i+1)B(i+2)</th><th style='color: black;'>Recoding</th></tr>";
   

   


//     const bitpair = [];

//     for (let i = 0; i < B.length - 2; i += 2) {
//         const temp = B.substring(i, i + 3);
//         switch (temp) {
//             case "000":
//                 bitpair.push(0);
//                 tableHTML += "<tr>  <td>" +temp  + "</td>  <td>" + 0 +"</td>    </tr>";
//                 break;
//             case "001":
//                 bitpair.push(1);
//                 tableHTML += "<tr>  <td>" +temp  + "</td>  <td>" + 1 +"</td>    </tr>";
//                 break;
//             case "010":
//                 bitpair.push(1);
//                 tableHTML += "<tr>  <td>" +temp  + "</td>  <td>" + 1 +"</td>    </tr>";
//                 break;
//             case "011":
//                 bitpair.push(2);
//                 tableHTML += "<tr>  <td>" +temp  + "</td>  <td>" + 2 +"</td>    </tr>";
//                 break;
//             case "100":
//                 bitpair.push(-2);
//                 tableHTML += "<tr>  <td>" +temp  + "</td>  <td>" + -2 +"</td>    </tr>";
//                 break;
//             case "110":
//                 bitpair.push(-1);
//                 tableHTML += "<tr>  <td>" +temp  + "</td>  <td>" + -1 +"</td>    </tr>";
//                 break;
//             case "101":
//                 bitpair.push(-1);
//                 tableHTML += "<tr>  <td>" +temp  + "</td>  <td>" + -2 +"</td>    </tr>";
//                 break;
//             case "111":
//                 bitpair.push(0);
//                 tableHTML += "<tr>  <td>" +temp  + "</td>  <td>" + 0 +"</td>    </tr>";
//                 break;
//         }
//     }

//     tableHTML += "</table>";

//     document.getElementById("bit_table").innerHTML = tableHTML;

//     const setsize = A.length + 2 ** (bitpair.length - 1);
//     const matrix = [];

//     for (let i = 0; i < bitpair.length; i++) {
//         const bit = bitpair[bitpair.length - i - 1];
//         let data = '';

//         if (bit === 1) {
//             data = A;
//         } else if (bit === -1) {
//             data = convert(A);
//         } else if (bit === -2) {
//             data = convert(A + "0");
//         } else if (bit === 2) {
//             data = A + "0";
//         }

//         for (let j = 0; j < i; j++) {
//             data += "XX";
//         }

//         if (bit === 0) {
//             while (data.length < setsize) {
//                 data = "0" + data;
//             }
//         }

//         const sign = decimalNumber * bit;

//         while (data.length < setsize) {
//             if (sign > 0) {
//                 data = "0" + data;
//             } else {
//                 data = "1" + data;
//             }
//         }

//         matrix[i] = data;
//     }






    
//     const new_matrix =[]

//     // for (let i = 0; i < setsize; i++) 
//     // {
//     //     new_matrix[i] = matrix[i].replace('X','0');
//     // }

//     for (let i = 0; i < matrix.length; i++) {
//         new_matrix[i] = matrix[i].replace(/X/g, '0');
//     }
    


//     let sum = "0".repeat(setsize);

//     for (let i = 0; i < bitpair.length; i++) {
//         sum = addBinaryStrings(sum, new_matrix[i]);
//     }

//     datahtml = "";

//     datahtml += '<p class="meow" >6)Bitpair Multiplication</p>';
//     document.getElementById("data2").innerHTML = datahtml;


//     const tableHtml = printCharactersAsRows(A,sum.length,bitpair,matrix,sum);

//     // Inject the generated table HTML into an element with id "table-container"
//     document.getElementById('tableContainer').innerHTML = tableHtml;



    



//     const ans = sum.substring(sum.length - setsize);

//     if( decimalNumber * decimalNumber2 <0)
//     {
//         sum = convert(sum);
//     }

//     // var final_ans="";

//     // if(decimalNumber*decimalNumber2 >0)
//     // {
//     //     final_ans = parseInt(ans, 2);
//     // }
//     // else
//     // {
//     //     final_ans = convert(final_ans)
//     //     final_ans = parseInt(ans, 2);
//     // }

//     var final_ans = parseInt(ans , 2);
    

//     var finalhtml =  '<p id = "ans" >' +  + ans + " = " + final_ans+ "</p>";

//     document.getElementById("final").innerHTML = finalhtml;


//     if (final_ans === decimalNumber * decimalNumber2) {
//         console.log("CORRECT");
//     } else {
//         console.log("WRONG");
//     }








// }










// function printCharactersAsRows(A,setsize,bitpair,matrix,sum) {
//     let html = '<table border="1">';

//     //A

//     while(A.length < setsize)
//     {
//         A = " " + A;
//     }
//     html += '<tr>';
//     for (let i = 0; i < A.length; i++) {
        
//         html += `<td >${A[i]}</td>`;
//     }
//     html += '</tr>';

//     //B

//     // while(bitpair.length < setsize-1)
//     // {
//     //     bitpair = " " + bitpair;
//     // }

//     // bitpair = "X" + bitpair;

//     html += '<tr>';
//     html += `<td  style="border-bottom: 1px solid red;"  >X</td>`;

//     for (let i = 0; i <setsize-bitpair.length-1 ; i++)
//     {
//         html += `<td  style="border-bottom: 1px solid red;"  > </td>`;
//     }
    
//     for (let i = 0; i < bitpair.length; i++) {
        
//         html += `<td  style="border-bottom: 1px solid red;"  >${bitpair[i]}</td>`;
//     }
//     html += '</tr>';


    



//     // mul rowa

//     for( let j = 0; j < matrix.length; j++)
//     {
        
//         html += '<tr>';

//         while(matrix[j].length < setsize)
//         {
//             matrix[j] = " " + matrix[j];
//         }

//         let str = matrix[j];

//     for (let i = 0; i < str.length; i++) {
        
//         html += `<td>${str[i]}</td>`;
//     }
//     html += '</tr>';
//     }



//     //sum

//     html += '<tr>';
//     for (let i = 0; i < sum.length; i++) {
        
//         html += `<td  style="border-bottom: 1px solid red;"  >${sum[i]}</td>`;
//     }
//     html += '</tr>';



    
//     html += '</table>';
//     return html;
// }




// //.......................
// function deci2bin(num)
// {
//     let decimalNumber = Number(num);
//     let binaryString = decimalNumber.toString(2);
//     return binaryString;
// }
// //.........................





// //.......................
// function bin2deci(num)
// {
//     let binaryNumber = String(num);
//     let decimal =parseInt(binaryNumber, 2);
//     return decimal;
// }
// //.........................












// //.....................................................
// function addBinaryStrings(binaryString1, binaryString2) {
//     let result = "";
//     let carry = 0;

//     let i = binaryString1.length - 1;
//     let j = binaryString2.length - 1;

//     while (i >= 0 || j >= 0 || carry > 0) {
//         const digit1 = (i >= 0) ? parseInt(binaryString1.charAt(i--)) : 0;
//         const digit2 = (j >= 0) ? parseInt(binaryString2.charAt(j--)) : 0;

//         const sum = digit1 + digit2 + carry;
//         result = (sum % 2) + result;
//         carry = Math.floor(sum / 2);
//     }

//     return result;
// }
// //.....................................................













// //...................................................................

// //  convert num is to convert binary number to tos_complementary

// function convert(num) {
//     const binaryString = num; // Replace this with your binary string

//     const onesComplement = calculateOnesComplement(binaryString);
//     const twosComplement = calculateTwosComplement(onesComplement);

//     // Uncomment the lines below if you want to print the results
//     // console.log("Original Binary: " + binaryString);
//     // console.log("Ones Complement: " + onesComplement);
//     // console.log("Twos Complement: " + twosComplement);

//     return twosComplement;
// }

// function calculateOnesComplement(binaryString) {
//     let onesComplement = '';

//     for (let bit of binaryString) {
//         onesComplement += (bit === '0') ? '1' : '0';
//     }

//     return onesComplement;
// }

// function calculateTwosComplement(onesComplement) {
//     const length = onesComplement.length;
//     let twosComplement = onesComplement.split('');

//     // Add 1 to the least significant bit
//     for (let i = length - 1; i >= 0; i--) {
//         if (onesComplement.charAt(i) === '0') {
//             twosComplement[i] = '1';
//             break;
//         } else {
//             twosComplement[i] = '0';
//         }
//     }

//     return twosComplement.join('');
// }

// //.........................................................................







// function goToTheory() {
//     window.location.href = "restoring_theory.html";
// }


// window.addEventListener('popstate', function(event) {
//     window.location.href = '2_index.html'; // Replace with the URL of the website you want to link to
// });


function generateTable() {
    // Get the user-entered number

    var decimalNumber = document.getElementById("numberInput").value;

    var decimalNumber2 = document.getElementById("numberInput2").value;
    let A = deci2bin(Math.abs(decimalNumber)).toString();
    let B = deci2bin(Math.abs(decimalNumber2)).toString();




    var datahtml = '<p class="meow" >1) Represent the numbers in Binary :</p>';




    if (decimalNumber < 0) {
        A = convert(A);
        datahtml += "<p>MULTIPLICANT(A) = " + decimalNumber + " (<span style='text-decoration: underline; color: red;'>1"  + "</span>"+ A+")</p>";
        A = "1" + A;
    } else {
        datahtml += "<p>MULTIPLICANT(A) = " + decimalNumber + " (<span style='text-decoration: underline; color: red;'>0"  + "</span>"+ A+")</p>";
        A = "0" + A;
    }

    if (decimalNumber2 < 0) {
        B = convert(B);
        datahtml += "<p>MULTIPLIER(B) = " + decimalNumber2 + " (<span style='text-decoration: underline; color: red;'>1"  + "</span>"+ B+")</p>";
        B = "1" + B;
    } else {
        datahtml += "<p>MULTIPLIER(B) = " + decimalNumber2 + " (<span style='text-decoration: underline; color: red;'>0"  + "</span>"+ B+")</p>";
        B = "0" + B;
    }

    datahtml += '<p class="meow" >2)Perform sign extension to make the number of bits of the operands equal.</p>';

    

    if (A.length !== B.length) {
        if (A.length > B.length) {
            if (decimalNumber2 >= 0) {
                while (A.length !== B.length) {
                    B = "0" + B;
                }
            } else {
                while (A.length !== B.length) {
                    B = "1" + B;
                }
            }
        }
        if (B.length > A.length) {
            if (decimalNumber >= 0) {
                while (A.length !== B.length) {
                    A = "0" + A;
                }
            } else {
                while (A.length !== B.length) {
                    A = "1" + A;
                }
            }
        }
    }




    datahtml += "<p>MULTIPLICANT(A) = " + A +"</p>";
    datahtml += "<p>MULTIPLIER(B)   = " + B +"</p>";

    datahtml += "<p>Length(n)  = " + A.length +"</p>";

    let count = B.length;

    datahtml += '<p class="meow" >3)Append 0 to the least significant bit.</p>';
    datahtml += "<p>MULTIPLIER(B) = (" + B+"<span style='text-decoration: underline; color: red;'>0</span>)</p>";

    B = B + "0";

    datahtml += '<p class="meow" >4)If the multiplier has an odd number of bits (n is odd), perform sign extension(sign of multiplier).</p>';


    if (count % 2 === 1) {
        if (decimalNumber2 < 0) {
            datahtml += "<p>MULTIPLIER(B) = (<span style='text-decoration: underline; color: red;'>1"  + "</span>"+ B+")</p>";
            B = "1" + B;
        } else {
            datahtml += "<p>MULTIPLIER(B) = (<span style='text-decoration: underline; color: red;'>0"  + "</span>"+ B+")</p>";
            B = "0" + B;
        }
    }
    else
    {
        datahtml += "<p>Not needed in this problem because n is even</p>";
    }

    datahtml += '<p class="meow" >5)Bitpair Table</p>';
    document.getElementById("data").innerHTML = datahtml;



    var tableHTML = "<table border='1'><tr><th style='color: black;'>B(i)B(i+1)B(i+2)</th><th style='color: black;'>Recoding</th></tr>";
   

   


    const bitpair = [];

    for (let i = 0; i < B.length - 2; i += 2) {
        const temp = B.substring(i, i + 3);
        switch (temp) {
            case "000":
                bitpair.push(0);
                tableHTML += "<tr>  <td>" +temp  + "</td>  <td>" + 0 +"</td>    </tr>";
                break;
            case "001":
                bitpair.push(1);
                tableHTML += "<tr>  <td>" +temp  + "</td>  <td>" + 1 +"</td>    </tr>";
                break;
            case "010":
                bitpair.push(1);
                tableHTML += "<tr>  <td>" +temp  + "</td>  <td>" + 1 +"</td>    </tr>";
                break;
            case "011":
                bitpair.push(2);
                tableHTML += "<tr>  <td>" +temp  + "</td>  <td>" + 2 +"</td>    </tr>";
                break;
            case "100":
                bitpair.push(-2);
                tableHTML += "<tr>  <td>" +temp  + "</td>  <td>" + -2 +"</td>    </tr>";
                break;
            case "110":
                bitpair.push(-1);
                tableHTML += "<tr>  <td>" +temp  + "</td>  <td>" + -1 +"</td>    </tr>";
                break;
            case "101":
                bitpair.push(-1);
                tableHTML += "<tr>  <td>" +temp  + "</td>  <td>" + -1 +"</td>    </tr>";
                break;
            case "111":
                bitpair.push(0);
                tableHTML += "<tr>  <td>" +temp  + "</td>  <td>" + 0 +"</td>    </tr>";
                break;
        }
    }

    tableHTML += "</table>";

    document.getElementById("bit_table").innerHTML = tableHTML;

    const setsize = A.length + 2 ** (bitpair.length - 1);
    const matrix = [];

    for (let i = 0; i < bitpair.length; i++) {
        const bit = bitpair[bitpair.length - i - 1];
        let data = '';

        if (bit === 1) {
            data = A;
        } else if (bit === -1) {
            data = convert(A);
        } else if (bit === -2) {
            data = convert(A + "0");
        } else if (bit === 2) {
            data = A + "0";
        }

        for (let j = 0; j < i; j++) {
            data += "XX";
        }

        if (bit === 0) {
            while (data.length < setsize) {
                data = "0" + data;
            }
        }

        const sign = decimalNumber * bit;

        while (data.length < setsize) {
            if (sign > 0) {
                data = "0" + data;
            } else {
                data = "1" + data;
            }
        }

        matrix[i] = data;
    }






    
    const new_matrix =[]

    // for (let i = 0; i < setsize; i++) 
    // {
    //     new_matrix[i] = matrix[i].replace('X','0');
    // }

    for (let i = 0; i < matrix.length; i++) {
        new_matrix[i] = matrix[i].replace(/X/g, '0');
    }
    


    let sum = "0".repeat(setsize);

    for (let i = 0; i < bitpair.length; i++) {
        sum = addBinaryStrings(sum, new_matrix[i]);
    }

    datahtml = "";

    datahtml += '<p class="meow" >6)Bitpair Multiplication</p>';
    document.getElementById("data2").innerHTML = datahtml;


    const tableHtml = printCharactersAsRows(A,sum.length,bitpair,matrix,sum);

    // Inject the generated table HTML into an element with id "table-container"
    document.getElementById('tableContainer').innerHTML = tableHtml;



    



    var ans = sum.substring(sum.length - setsize);
    var final_ans = parseInt(ans, 2);


    if( decimalNumber*decimalNumber2 <0 )
    {
        final_ans= parseInt( convert(ans) , 2 );
        final_ans = -final_ans;
    }

    var finalhtml =  '<p id = "ans" >' +  + ans + " = " + final_ans+ "</p>";

    document.getElementById("final").innerHTML = finalhtml;


    if (final_ans === decimalNumber * decimalNumber2) {
        console.log("CORRECT");
    } else {
        console.log("WRONG");
    }








}










function printCharactersAsRows(A,setsize,bitpair,matrix,sum) {
    let html = '<table border="1">';

    //A

    while(A.length < setsize)
    {
        A = " " + A;
    }
    html += '<tr>';
    for (let i = 0; i < A.length; i++) {
        
        html += `<td >${A[i]}</td>`;
    }
    html += '</tr>';

    //B

    // while(bitpair.length < setsize-1)
    // {
    //     bitpair = " " + bitpair;
    // }

    // bitpair = "X" + bitpair;

    html += '<tr>';
    html += `<td  style="border-bottom: 1px solid red;"  >X</td>`;

    for (let i = 0; i <setsize-bitpair.length-1 ; i++)
    {
        html += `<td  style="border-bottom: 1px solid red;"  > </td>`;
    }
    
    for (let i = 0; i < bitpair.length; i++) {
        
        html += `<td  style="border-bottom: 1px solid red;"  >${bitpair[i]}</td>`;
    }
    html += '</tr>';


    



    // mul rowa

    for( let j = 0; j < matrix.length; j++)
    {
        
        html += '<tr>';

        while(matrix[j].length < setsize)
        {
            matrix[j] = " " + matrix[j];
        }

        let str = matrix[j];

    for (let i = 0; i < str.length; i++) {
        
        html += `<td>${str[i]}</td>`;
    }
    html += '</tr>';
    }



    //sum

    html += '<tr>';
    for (let i = 0; i < sum.length; i++) {
        
        html += `<td  style="border-bottom: 1px solid red;"  >${sum[i]}</td>`;
    }
    html += '</tr>';



    
    html += '</table>';
    return html;
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












//.....................................................
function addBinaryStrings(binaryString1, binaryString2) {
    let result = "";
    let carry = 0;

    let i = binaryString1.length - 1;
    let j = binaryString2.length - 1;

    while (i >= 0 || j >= 0 || carry > 0) {
        const digit1 = (i >= 0) ? parseInt(binaryString1.charAt(i--)) : 0;
        const digit2 = (j >= 0) ? parseInt(binaryString2.charAt(j--)) : 0;

        const sum = digit1 + digit2 + carry;
        result = (sum % 2) + result;
        carry = Math.floor(sum / 2);
    }

    return result;
}
//.....................................................













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







function goToTheory() {
    window.location.href = "restoring_theory.html";
}


window.addEventListener('popstate', function(event) {
    window.location.href = '2_index.html'; // Replace with the URL of the website you want to link to
});