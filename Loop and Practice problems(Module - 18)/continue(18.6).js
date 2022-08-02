var numbers = [45, 87, 89, 56, 32, 51, 25, 188, 41, 98];

for(var i = 0; i < numbers.length; i++){
    var number = numbers[i];
    if(number > 100){
        continue;
    }
    console.log(number);
    console.log(i);
}