let employee = [5]
employee[0] = {
    'fname': 'ก',
    'lname': 'นามสมมุติ',
    'age': 68,
    'salary': 75900,
}
employee[1] = {
    'fname': 'ข',
    'lname': 'นามสมมุติ',
    'age': 35,
    'salary': 55400,
}
employee[2] = {
    'fname': 'ค',
    'lname': 'นามสมมุติ',
    'age': 51,
    'salary': 81000,
}
employee[3] = {
    'fname': 'ง',
    'lname': 'นามสมมุติ',
    'age': 76,
    'salary': 111000,
}
employee[4] = {
    'fname': 'จ',
    'lname': 'นามสมมุติ',
    'age': 22,
    'salary': 20500,
}
let salsum = 0;
for (let i = 0; i < employee.length; i++) {
    salsum = salsum + employee[i].salary;
}
let avgage = 0;
for (let i = 0; i < employee.length; i++) {
    avgage = avgage + employee[i].age;
}
avgage = avgage / employee.length;
let avgtax = 0;
for (let i = 0; i < employee.length; i++) {
    let netIncome = (employee[i].salary) * 12;
    let tax = 0;
    if (netIncome > 150000) {
        if (netIncome > 300000) {
            if (netIncome > 500000) {
                if (netIncome > 750000) {
                    if (netIncome > 1000000) {
                        if (netIncome > 2000000) {
                            if (netIncome > 5000000) {
                                tax = ((netIncome - 5000000) * (35 / 100)) + 1265000;

                            } else {
                                tax = ((netIncome - 2000000) * (30 / 100)) + 365000;
                            }

                        } else {
                            tax = ((netIncome - 1000000) * (25 / 100)) + 115000;
                        }

                    } else {
                        tax = ((netIncome - 750000) * (20 / 100)) + 65000;
                    }
                } else {
                    tax = ((netIncome - 500000) * (15 / 100)) + 27500;
                }
            } else {
                tax = ((netIncome - 300000) * (10 / 100)) + 7500;
            }
        } else {
            tax = (netIncome - 150000) * (5 / 100);
        }
    } else {
        tax = 0;
    }
    avgtax = (avgtax + tax);
}
avgtax = avgtax / employee.length;
console.log('Salary sum(no function use): ' + salsum)
console.log('Age average(no function use): ' + avgage)
console.log('Tax average(no function use): ' + avgtax)
function findSum(array,key){
    sum = 0;
    for(let i=0; i<array.length;i++){
        sum += array[i][key];
    }
    return sum;
}
function findAvg(array,key){
    sum = findSum(array,key);
    avg = sum/array.length;
    return avg;
}
function findTaxAvg(array,key){
    for (let i = 0; i < employee.length; i++) {
        let netIncome = (employee[i].salary) * 12;
        let tax = 0;
        if (netIncome > 150000) {
            if (netIncome > 300000) {
                if (netIncome > 500000) {
                    if (netIncome > 750000) {
                        if (netIncome > 1000000) {
                            if (netIncome > 2000000) {
                                if (netIncome > 5000000) {
                                    tax = ((netIncome - 5000000) * (35 / 100)) + 1265000;
    
                                } else {
                                    tax = ((netIncome - 2000000) * (30 / 100)) + 365000;
                                }
    
                            } else {
                                tax = ((netIncome - 1000000) * (25 / 100)) + 115000;
                            }
    
                        } else {
                            tax = ((netIncome - 750000) * (20 / 100)) + 65000;
                        }
                    } else {
                        tax = ((netIncome - 500000) * (15 / 100)) + 27500;
                    }
                } else {
                    tax = ((netIncome - 300000) * (10 / 100)) + 7500;
                }
            } else {
                tax = (netIncome - 150000) * (5 / 100);
            }
        } else {
            tax = 0;
        }
        sum = (sum + tax);
    }
    sum = sum/array.length; 
    return sum;
}
salsum = findSum(employee,'salary');
avgage = findAvg(employee,'age');
avgtax = findTaxAvg(employee,'salary');
console.log('Salary sum: ' + salsum)
console.log('Age average: ' + avgage)
console.log('Tax average: ' + avgtax)
