function logger (name){
    console.log("My Name is : "+name);
}


// invoking / running / calling the function.
logger('Oscar') 
logger('saimon')


function fruitProcessor (apples,oranges){
    console.log(apples,oranges);
    const juice = `Jucies with ${apples} apples and ${oranges} oranges.`;
    return juice;
}
const result =fruitProcessor(5,0)
console.log(result)

const result2 =fruitProcessor(23,20)
console.log(result2)



// Function declaration

console.log(calAge1(1991));  // ✅ Works even before the function is defined!

function calAge1(birthYear) {
    return 2037 - birthYear;
}





//Function expression

//Anonymos function

const calAge2 = function (birthYear){  
    return 2037 - birthYear;

}
console.log(calAge2(1991)); 



//Arrow function

const birthYear = 2006;
const name = 'Oscar';

const SayName = name=> `My Name Is : ${name}`;
console.log(SayName("Oscar"))

const yearUntilRetirement = (birthYear,name)=>{
    const age=2037 - birthYear;
    const retirement =2065 - birthYear;

    return `${name} retire in ${retirement} years`
}
console.log(yearUntilRetirement(1997,"Oscar"));


function cutFruitsPieces(fruit){
    return fruit*4
}



function fruitProcessor (apples,oranges){
    const applePieces = cutFruitsPieces(apples);
    const orangePieces = cutFruitsPieces(oranges);


    console.log(apples,oranges);
    const juice = `Jucies with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}

console.log(fruitProcessor(2,3));



const calAverage = (a,b,c)=>{
     return (a+b+c)/3;
}

const averageOfDolphin = calAverage(44,23,71)
const averageOfkoalas = calAverage(65,54,49)

const checkWinner = function(averageOfDolphin,averageOfkoalas){
    if(averageOfDolphin>averageOfkoalas){
        console.log(`Dolphin Wins By ${averageOfDolphin} points ${averageOfDolphin} VS ${averageOfkoalas}`);
    }
else{
    console.log(`koalas Wins By ${averageOfkoalas} points ${averageOfkoalas} VS ${averageOfDolphin}`);
}
}

checkWinner(averageOfDolphin,averageOfkoalas)


function doIt(param){
    param=2;
    return param;
}

var test=1;
let res=doIt(1);
console.log(res);

