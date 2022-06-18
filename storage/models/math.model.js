function checkOddEven(num) {
    if (typeof num === "string") {
        throw new Error("n must be a number")
    }
    return num % 2 === 0 ? 'even' : 'odd';
}

function sum(a, b) {
    return a + b;
}

function is21Century() {
    return new Date().getFullYear() >= 2000 && new Date().getFullYear() < 2100;
}

function isWeekend() {
    dt = new Date()
    return dt.getDay() === 6 || dt.getDay() === 0;
}


function isLeapYear(input)
{
    let d = new Date (input)
    let year = d.getFullYear();   
return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}

module.exports = {
    checkOddEven,
    sum,
    is21Century,
    isWeekend,
    isLeapYear,
};
