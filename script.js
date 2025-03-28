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

