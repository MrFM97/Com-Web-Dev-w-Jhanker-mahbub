const lyrics = 'tumi bondhu kala pakhi, ami jeno ki? bosonto kal e tomay dekhte perechi';

const searchString = 'Pakhi';
// const doesExist = lyrics.includes('pakhi');
// This is case sensitive
// const doesExist = lyrics.includes('Pakhi'); //return false
// const doesExist = lyrics.includes(searchString);

// const doesExist = lyrics.toLowerCase().includes(searchString);

const doesExistOneLine = lyrics.toLowerCase().includes(searchString.toLowerCase());

// console.log(doesExist);
console.log(doesExistOneLine);

// index of

console.log(lyrics.indexOf('kailla'));
console.log(lyrics.indexOf('Tumi'));

if(lyrics.indexOf('bondhu') !== -1){
    console.log('exist inside the string');
}
else{
    console.log('not found');
}

// startswith
console.log(lyrics.startsWith('2umi'));

// ends with
const fileName = 'mybiodata.pdf';
const otherFile = 'mypic.png';

fileName.endsWith('.pdf')