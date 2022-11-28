function salaryCalculator(basicSalary, benefits) {
    const grossPay = basicSalary + benefits;

    const net = grossPay - (calculatePaye(grossPay) + calculateNhif(grossPay) + calculateNssf(grossPay));
    return net;
}

const calculatePaye = function(gross) {
    let paye;
    if(gross <= 24000)
    paye = 0.1 * gross;
    else if(gross >= 24001 && gross <= 32,333)
    paye = 0.25 * gross;
    else
    paye = 0.3 * gross;

    return paye;
}

const calculateNhif = function(gross) {
    let deduction;
    if(gross <= 5,999)
    deduction = 150;
    else if(gross >= 6000 && gross <= 7,999)
    deduction = 300;
    else if(gross >= 8,000 && gross <= 11,999)
    deduction = 400;
    else if(gross >= 12000 && gross <= 14,999)
    deduction = 500;
    else if(gross >= 15000 && gross <= 19,999)
    deduction = 600;
    else if(gross >= 20000 && gross <= 24,999)
    deduction = 750;
    else if(gross >= 25000 && gross <= 29,999)
    deduction = 850;
    else if(gross >= 30000 && gross <= 34,999)
    deduction = 900;
    else if(gross >= 35000 && gross <= 39,999)
    deduction = 950;
    else if(gross >= 40,000 && gross <= 44,999)
    deduction = 1000;
    else if(gross >= 45,000 && gross <= 49,999)
    deduction = 1100;
    else if(gross >= 50,000 && gross <= 59,999)
    deduction = 1,200;
    else if(gross >= 60000 && gross <= 69,999)
    deduction = 1300;
    else if(gross >= 70000 && gross <= 79,999)
    deduction = 1400;
    else if(gross >= 80000 && gross <= 89999)
    deduction = 1500;
    else if(gross >= 90000 && gross <= 99999)
    deduction = 1600;
    else deduction = 1,700;

    return deduction;

}

const calculateNssf = function (gross) {
    let deduction;
    if(gross >= 6000)
    deduction = 0.06 * gross;

    return deduction;

}
console.log(`PAYE: ${calculatePaye(90000)}
NHIF: ${calculateNhif(90000)}
NSSF: ${calculateNssf(90000)}
`);
console.log(`Your net pay is: ${salaryCalculator(90000, 0)}`);