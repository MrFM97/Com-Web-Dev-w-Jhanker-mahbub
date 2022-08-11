function numberGot(marks) {
    if (marks >= 80) {
        return 'A+';
    }
    else if (marks >= 70 && marks <80) {
        return 'A';
    }
    else if (marks >= 60 && marks <70) {
        return 'A-';
    }
    else if (marks >= 50 && marks <60) {
        return 'B';
    }
    else if (marks >= 40 && marks <50) {
        return 'C';
    }
    else if (marks >= 30 && marks <40) {
        return 'D';
    }
    else{
        return 'fail'
    }
}

const result = numberGot(29)
console.log(result);