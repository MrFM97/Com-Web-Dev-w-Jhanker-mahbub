// syntactic sugar
// Mould started
class instructor {
    name;
    designation = "web learner";
    team = "batch six";
    location;
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }
    startSupportSession(time) {
        console.log(`Join the support session at ${time}`);
    }
    createQuiz(module) {
        console.log(`Please attend quiz for module ${module}`);
    }
}
// Mould ending

const amir = new instructor("amir", "mumbai");
console.log(amir);
amir.startSupportSession("9:00");
amir.createQuiz(60);

const solaiman = new instructor("solaiman khan", "Dhaka");
console.log(solaiman);
solaiman.startSupportSession("4:00");
solaiman.createQuiz(10);
