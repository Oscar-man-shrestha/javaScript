//  016 Iteration_ The for Loop

for(let rep=1;rep<=10;rep++){
    console.log(`Lifting weights repetition ${rep} 🏋`)
}

//  017 Looping Arrays, Breaking and Continuing


const oscarArray = [
    'Oscar',
    'Man Shrestha',
    2037-1991,
    'teacher',
    ['Saimon','Sajan','Khitiz'],
    true
];

const types = [];

for(let i=0;i<oscarArray.length; i++){


    //Reading from oscar array
    console.log(`This is from array :${oscarArray[i]} \n and this is the data type -> ${typeof oscarArray[i]}`);

    // Filling types array
    // types[i] = typeof oscarArray[i];
    // types.push(typeof oscarArray[i]);
   
}
console.log(types);

const years = [1991,2007,1969,2020];
const ages = [];
for(let i=0;i<years.length;i++){
    ages.push(2037 - years[i]);
}
console.log(ages)

// Continue and break 

console.log('--- ONLY STRINGS ---');

for(let i=0;i < oscarArray.length;i++){
    if(typeof oscarArray[i] !== 'string') continue;
    console.log(oscarArray[i],typeof oscarArray[i]);
}

console.log('--- BREAK WITH NUMBER ---');

for(let i=0;i < oscarArray.length;i++){
    if(typeof oscarArray[i] !== 'string') break;
    console.log(oscarArray[i],typeof oscarArray[i]);
}

// 018 Looping Backwards and Loops in Loops

// Looping Backwards.

const oscar = [
    'Oscar',
    'Man Shrestha',
    2037-1991,
    'teacher',
    ['Saimon','Sajan','Khitiz'],
    true
];

for(let i=oscar.length-1;i>=0;i--){
    console.log(`${i} =>  ${oscar[i]}`)
}


// Loops in Loops

for(let exercise=1;exercise<4;exercise++){
    console.log(`---------- Starting Exercise ${exercise}`);
    
for(let rep=1;rep<=10;rep++){
    console.log(`Lifting weights repetition ${rep} 🏋`);
}
}


let rep = 1;
while(rep<=10){
    console.log(`Lifting weights repetition -> ${rep} 🏋`);
    rep++;
}


let dice = Math.trunc( Math.random()*6)+1;
console.log(dice);

while(dice!==6){
    console.log(`You Rolled a ${dice}`);
     dice = Math.trunc( Math.random()*6)+1;

     if(dice==6){
        console.log("the Loop is about to end");
     }
}

