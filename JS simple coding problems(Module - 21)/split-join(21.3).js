const lyrics = 'tumi bondhu kala pakhi, ami jeno ki? bosonto kal e tomay dekhte perechi';
const parts = lyrics.split(' ');
const sentences = lyrics.split('.');
const chars = lyrics.split('');
// console.log(parts);

const partial = lyrics.slice(5, 8);
console.log(partial);

//substring
const partial2 = lyrics.substring(5,8);

console.log(partial2);

const lines = [
    'tumi bondhu kala pakhi, ami jeno ki?', 
    'bosonto kal e tomay dekhte perechi',
];

const newSong = lines.join(':')
console.log(newSong);