function calculateSalary(basicSalary, benefits){
    //const of rates//
    const nhifRate = 0.03;
    const taxRate = 0.0432;
    const nssfRate = 0.06;
    //salary before deductions//
    const grossSalary = basicSalary + benefits
   //rates//
    const nhif = grossSalary * nhifRate;
    const tax = grossSalary * taxRate;
    const nssf = grossSalary * nssfRate;
  
    const netSalary = grossSalary - (nhif + tax + nssf);
    return{
        grossSalary,
        nhif,
        tax,
        nssf,
        netSalary
    }
}
const input= calculateSalary(2000,5000);
calculateSalary(input);
console.log("grossSalary is:", input.grossSalary);
console.log("nhif is:", input.nhif);
console.log("tax is:", input.tax);
