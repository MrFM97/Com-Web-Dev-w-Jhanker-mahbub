const student = {
    name: 'kolim uddin',
    age: 15,
    class: 'Ten',
    // marks: 15,
    marks: {
        math: 78, 
        physics: 89,
        chemistry: 65
    },
}

const marks = student.marks;
const math = student.marks.math; //DOT NOTATION
// console.log(math);

const chemistry = student['marks']['chemistry']; //Bracket notation
console.log(chemistry);
const subject = 'math';
const subjectMarks = student.marks[subject];
/* const marks2 = student.marks.subject; Note: wrong way to fetch data, because marks doesn't contain subject. This is why you'll get undefined in result */
console.log(subjectMarks);