name;
designation = 'web learner'
team = 'batch six'
location;
constructor(name, location){
    this.name = name;
    this.location = location;
}
startSupportSession(time) {
    console.log(`Join the support session at ${time}`)
}
createQuiz(module){
    console.log(`Please attend quiz for module ${module}`)
}
}