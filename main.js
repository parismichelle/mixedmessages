/*
Sentence structure:
You are as --- as a --- preposition ---.
You are more --- than a --- preposition ---. 
You are --- like a --- preposition ---. 
*/

const shell = [['You are as ', 'ADJECTIVE', ' as a ', 'FIRSTNOUN', ' ', 'PREPOSITION', ' ', 'LASTNOUN', '.'], 
['You are more ', 'ADJECTIVE', ' than a ', 'FIRSTNOUN', ' ', 'PREPOSITION', ' ', 'LASTNOUN', '.'], 
['You are ', 'ADJECTIVE', ' like a ', 'FIRSTNOUN', ' ', 'PREPOSITION', ' ', 'LASTNOUN', '.']];

const adjective = ['beautiful', 'intelligent', 'smart', 'radiant', 'pretty', 'handsome', 'incredible', 'funny', 'magnificent', 
'gorgeous', 'amazing', 'attractive', 'awesome', 'brilliant', 'charming', 'courageous', 'delightful', 'elegant', 'enchanting', 
'exquisite', 'extraordinary', 'graceful', 'impressive', 'lovely', 'perfect', 'stunning', 'talented', 'trustworthy', 'strong', 'cute'];

const firstNoun = ['manatee', 'sunflower', 'rose', 'daisy', 'dolphin', 'kitten', 'giraffe', 'diamond', 'flamingo', 'bobcat', 
'lion', 'tiger', 'swan', 'cup of tea', 'mug of cocoa', 'cup of coffee', 'slice of cake', 'piece of pie', 'book', 
'bouquet of flowers', 'bear', 'bird', 'owl', 'butterfly', 'tree', 'fox', 'bumble bee', 'duck', 'goat', 'unicorn', 'hippo', 
'walrus', 'cupcake', 'mouse', 'rocket', 'palm tree', 'sailboat', 'bowl of icecream'];

const preposition = ['in the', 'at', 'on a'];

const lastNounIn = ['moonlight', 'sunlight', 'sunshine', 'ocean', 'wind', 'kitchen', 'garden', 'daytime', 'morning', 'summer',
'snow', 'winter', 'autumn', 'spring', 'sky', 'forest', 'bathtub', 'library', 'park', 'bedroom', 'jungle', 'desert'];

const lastNounAt = ['sunset', 'night', 'midday', 'bedtime', 'the beach', 'the lake', 'home', 'the library', 'a restaurant',
'tea time', 'a sleepover', 'breakfast', 'midnight', 'dawn', 'noon', 'daybreak', 'high tide', 'a party', 'the ballet', 'a picnic'];

const lastNounOn = ['Friday night', 'Sunday morning', 'Monday afternoon', 'summer evening', 'winter day', 'sunny morning', 
'vacation', 'table', 'shelf', 'Hawaiian island', 'holiday', 'boat', 'mountain', 'weekend', 'beach']


//generates a random number based on the length of an array
const randNumGen = arr => {
    let num = Math.floor(Math.random() * arr.length);
    return num;
}

let compliment = [];

//functions to assist in locating sentence elements
const isAdjective = (element) => element === 'ADJECTIVE';
const isFirstNoun = (element) => element === 'FIRSTNOUN';
const isPreposition = (element) => element === 'PREPOSITION';
const isLastNoun = (element) => element === 'LASTNOUN';

//generates a random compliment by randomly selecting components of arrays
const complimentGenerator = () => {
    //choose a sentence shell
    compliment = shell[randNumGen(shell)];
    //select adjective
    let adjectiveIndex = compliment.findIndex(isAdjective);
    compliment.splice(adjectiveIndex, 1, adjective[randNumGen(adjective)]);
    //select first noun
    let firstNounIndex = compliment.findIndex(isFirstNoun);
    compliment.splice(firstNounIndex, 1, firstNoun[randNumGen(firstNoun)]);
    //select preposition
    let prepositionIndex = compliment.findIndex(isPreposition);
    compliment.splice(prepositionIndex, 1, preposition[randNumGen(preposition)]);
    //select last noun based on preposition
    let lastNounIndex = compliment.findIndex(isLastNoun);
    if(compliment.includes('in the')){
        compliment.splice(lastNounIndex, 1, lastNounIn[randNumGen(lastNounIn)]);
    } else if (compliment.includes('at')){
        compliment.splice(lastNounIndex, 1, lastNounAt[randNumGen(lastNounAt)]);
    } else {
        compliment.splice(lastNounIndex, 1, lastNounOn[randNumGen(lastNounOn)]);
    };
    return compliment;
}

console.log(complimentGenerator().join(''));
