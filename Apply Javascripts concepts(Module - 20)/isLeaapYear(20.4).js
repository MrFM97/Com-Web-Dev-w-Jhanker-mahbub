function isleapYear(year) {
    const remainder = year % 4;
    if(remainder === 0){
        // console.log('Your year is leap year: ', year);
        return true;
    }
    else{
        // console.log('Your year is not leap year', year);
        return false;
    } 
}
var isMyYearLeapYear = isleapYear(1960);
console.log('my year ', isMyYearLeapYear);