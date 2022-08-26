class TeamMember{
    name;
    location; //instantiate
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }

    provideFeedback() {
        console.log(`${this.name} thank you for your feedback`);
    }
}

class Student extends TeamMember{
    designation = 'web learner'
    team = 'batch six'
    constructor(name, location) {
        super(name, location);
    }
    startSupportSession(time) {
        console.log(`Join the support session at ${time}`)
    }
    createQuiz(module) {
        console.log(`Please attend quiz for module ${module}`)
    }

}

class Developer extends TeamMember{
    designation = 'web developer'
    team = 'neptune'
    tech;
    constructor(name, location, tech) {
        super(name, location);
        this.tech = tech;
    }
    developFeature(feature) {
        console.log(`Please develop the ${feature}`)
    }
    release(version) {
        console.log(`Please release the version ${version}`)
    }

}

class JobPlacement extends TeamMember{
    designation = 'Job placement commandos'
    team = 'Job placement'
    region;
    constructor(name, location, region) {
        super(name, location);
        this.region = region;
    }
    sendResume(resume) {
        console.log(`Please send the resume at ${resume}`)
    }
    motivateStudent(motivate) {
        console.log(`Please help the depressed student named ${motivate}`)
    }

}

const alia = new Developer('Alia Bhatt', 'Dhaka', 'React');
console.log(alia);
alia.provideFeedback();
const bipasha = new JobPlacement('bipasha basu', 'kolkata', 'india');
console.log(bipasha);
bipasha.sendResume('india');
bipasha.motivateStudent('murta');
bipasha.provideFeedback();