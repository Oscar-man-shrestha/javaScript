//   Objects

const obj ={
    firstName:'Oscar',
    lastName: 'Man Shrestha',
    age : 2037-1991,
    job : 'I do Work in bengulru',
    friends:['Shiva','Krishna']

}
console.log(obj)

const nameKey = 'Name';
console.log(obj.firstName)
console.log(obj ['first'+ " "+nameKey])



// const oscar = {
//     firstName: 'Oscar',
//     lastName: 'Man Shrestha',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven']
// };

// console.log(`${oscar.firstName} has ${oscar.friends.length} ,and his best friend is called ${oscar.friends[0]} `)

// console.log(oscar); 

// console.log(oscar.lastName);    
// console.log(oscar['lastName']); 

// const nameKey = "Name";
// console.log(oscar['first' + nameKey]); 
// console.log(oscar['last' + nameKey]);  

// Incorrect: console.log(jonas.'last' + nameKey);

// console.log(oscar['firstName'])

// const interestedIn = prompt("What You wanna know about Oscar Man Shretha? Between first name ,lastname,age,job ,friends? ")

// console.log(jonas.interestedIn) //this is wrong
// console.log(oscar[interestedIn])


//  Add new properties in object
// oscar.location = 'damak'; 
// oscar['facebook'] = 'oscar man shrestha';
// console.log(oscar);


//challenge  :

// 'Oscar has 3 friends ,and his best friend is called Kaushal




// const oscar ={
//     firstName : "Oscar",
//     lastName : "Man Shrestha",
//     birthYear : 2006,
//     job : "Student",
//     friends : ['saimon','sajan','kshitiz'],
//     hasDriversLicense : false,

    // calcAge : function(birthYear){
    //     return 2037-birthYear;
    // }



    //=====================================================================================================================================================================================================================================================================

//                       Object Methods  

//     Why Use this?

// Flexibility: If an object’s name changes, you don’t need to manually update references everywhere.

// Reusability: Methods can be reused across different objects without modification.

// Context Awareness: this refers to the object that is calling the method, making code more dynamic.
//     calcAge : function(){

//         console.log(this);
//         return 2037-this.birthYear;
//     }




// };
//without this keyword

// console.log(oscar.calcAge(2006));
// console.log(oscar['calcAge'](2006) )

// with this keyword

// console.log(oscar.calcAge())
// console.log(oscar['calcAge']())


// why calling function multiple times just do this

//  Calculate age once store in  object and if need later then retrive it as a property from object.

//example :
const oscar ={
    firstName : "Oscar",
    lastName : "Man Shrestha",
    birthYear : 2006,
    job : "Student",
    friends : ['saimon','sajan','kshitiz'],
    hasDriversLicense : false,

calcAge : function(){
    this.age = 2037-this.birthYear;

    return this.age;
},

// checkDriverLicense : function(){
//     if(this.hasDriversLicense){
//         return ` he has a License`
//     }
//     else 
//     {
//         return `he don't has a License`
//         }
//     },

//or


getSummary : function (){
    return `${this.firstName} is a ${this.calcAge()} -year old ${this.job}, and he has  ${this.checkDriverLicense ? 'a':'no'} driver's license. `
}

};
console.log(oscar.getSummary())


// Don't do this instead..

// console.log(oscar.calcAge())
// console.log(oscar.calcAge())
// console.log(oscar.calcAge())
// console.log(oscar.calcAge())

//Do This

console.log(oscar.calcAge())
console.log(oscar.age);
console.log(oscar['calcAge']())



