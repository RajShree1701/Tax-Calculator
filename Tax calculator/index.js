

// // const form = document.querySelector('#tax-form');

// // function calculatorIncomeTax(income){
// //     let tax= 0;
// //     if(income <= 300000){
// //         tax = 0;
// //     }else if(income > 300000 && income <= 600000){
// //         tax = (income - 300000) *0.05;
// //     }else if(income > 600000 && income <= 900000){
// //         tax = (300000) * 0.05 + (income - 600000) * 0.10
// //     }else if(income > 900000 && income <= 1200000){
// //         tax = (300000) * 0.05 + (300000) * 0.10 + (income - 900000) * 0.15
// //     }else if(income > 1200000 && income <= 1500000){
// //         tax = (300000) * 0.05 + (300000) * 0.10 + ( 300000) * 0.15 + (income - 1200000) * 0.20
// //     }else{
// //         tax = (300000 * 0.05) + (300000 * 0.10) +  (300000 * 0.15) + (300000 * 0.20) + (income - 1500000) * 0.30
// //     }
// //     return tax;
// // }

// // form.addEventListener('submit', (event)=>{
// //     event.preventDefault();

// //     const income = Number(form.income.value);
// //     const tax = calculatorIncomeTax(income);

// //     alert(`The income tax of an income of ${income} is: ${tax}`);
// // })

// // Add your JavaScript code here
// document.getElementById('tax-form').addEventListener('submit', function(event) {
//     event.preventDefault();

//     var grossIncome = parseFloat(document.getElementById('grossIncome').value);
//     var extraIncome = parseFloat(document.getElementById('extraIncome').value);
//     var deductions = parseFloat(document.getElementById('deductions').value);
//     var ageGroup = document.getElementById('ageGroup').value;

//     if (!isNaN(grossIncome) && !isNaN(extraIncome) && !isNaN(deductions)) {
//         var totalIncome = grossIncome + extraIncome - deductions;
//         var taxRate = 0;

//         switch(ageGroup) {
//             case '<40':
//                 taxRate = totalIncome <= 800000 ? 0 : (totalIncome - 800000) * 0.3;
//                 break;
//             case '≥40 & <60':
//                 taxRate = totalIncome <= 800000 ? 0 : (totalIncome - 800000) * 0.4;
//                 break;
//             case '≥60':
//                 taxRate = totalIncome <= 800000 ? 0 : (totalIncome - 800000) * 0.1;
//                 break;
//         }

//         document.getElementById('result').innerHTML = 'Tax Amount: ' + taxRate.toFixed(2);
//     } else {
//         alert('Please enter valid numbers for gross income, extra income, and deductions.');
//     }
// });

document.getElementById('tax-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var grossIncome = parseFloat(document.getElementById('grossIncome').value);
    var extraIncome = parseFloat(document.getElementById('extraIncome').value);
    var deductions = parseFloat(document.getElementById('deductions').value);
    var ageGroup = document.getElementById('ageGroup').value;

    if (!isNaN(grossIncome) && !isNaN(extraIncome) && !isNaN(deductions)) {
        var totalIncome = grossIncome + extraIncome - deductions;
        var taxAmount = 0;

        if (totalIncome <= 800000) {
            // No tax for income under 8 Lakhs
            taxAmount = 0;
        } else {
            // Calculate tax amount for income over 8 Lakhs
            var taxableIncome = totalIncome - 800000;

            switch(ageGroup) {
                case '<40':
                    taxAmount = taxableIncome * 0.3; // 30% tax for age < 40
                    break;
                case '≥40 & <60':
                    taxAmount = taxableIncome * 0.4; // 40% tax for age ≥ 40 but < 60
                    break;
                case '≥60':
                    taxAmount = taxableIncome * 0.1; // 10% tax for age ≥ 60
                    break;
            }
        }

        document.getElementById('result').innerHTML = 'Tax Amount: ' + taxAmount.toFixed(2) + ' Lakhs';
    } else {
        alert('Please enter valid numbers for gross income, extra income, and deductions.');
    }
});
