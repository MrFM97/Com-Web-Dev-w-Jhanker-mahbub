const kodomAli = {
    name: 'Kodom ALi',
    money: 5000,
    study: 'Math',
    subjects: ['Calculus', 'algebra', 'geometry'],
    exam: function () {
        console.log(this);
        return this.name + ' is perticipating in an exam';
    },
    examArrow: () => {
        console.log(this);
    },
    examNested: () => { 
        const arrow = () => {
            console.log(this);
        }
    },
    improveExam: function (subject) {
        this.exam();
        return `${this.name} is taking improvement exam on ${subject}`;
    },
    treatDey: function (amount, tips) {
        this.money = this.money - amount - tips;
        return this.money;
    }
}
kodomAli.exam();

const badamAli = {
    name: 'Kacha badam',
    money: 8000,
}

badamAli.exam = kodomAli.exam;
badamAli.exam();

function clickHandler() {
    console.log('Inside clickHandler', this);
}

document.getElementById('btn-click2').addEventListener('click', function () { 
    console.log(this);
})      