// // calling array two ways

// // const friends = ['Oscar','Saimon','Sajan'];
// // console.log(friends)

// // const years = new Array ('Oscar','Saimon','Sajan','Kaushal',2002)
// // console.log(years)


// // console.log(friends[0])
// // console.log(friends[1]);
// // console.log(friends.length);
// // console.log(friends[friends.length-1]);

// // friends[2]='Manisha';
// // console.log(friends);

// // const jonas = ['Oscar','Man','Sherestha',2006-2000];
// // console.log(jonas)

// // Basic Array Operations (Methods)


// // const friends = ['Oscar','Saimon','Sajan'];


// //  //Length of array
// //  const newLength = friends.push('jay');
// //  console.log(newLength);



// // // add element in end

// // friends.push('Nikil'); 
// // console.log(friends);



// //  //add element in First
// // friends.unshift('Nihareeka');
// // console.log(friends);



// // //Remove Element (Last Element)
// // friends.pop();
// // console.log(friends)
// // const popped = friends.pop();
// // console.log(popped)


// // // First Element removed
// // friends.shift()
// // console.log(friends)


// // //Gives the index of element as required
// // console.log(friends.indexOf('Oscar'))

// // //Return boolean value while checking for element required

// // console.log(friends.includes('Oscar'))


// // friends.includes('Oscar') ? console.log("Yes,Sir"):
// // console.log("No,Sir")

// // friends.toString();
// // console.log(friends);

// // Deleting elements leaves undefined holes in an array:
// // delete friends[0]
// // console.log(friends)

// // const anotherArray = ["Java","Python","JavaScript"]
// // const result= friends.concat(anotherArray);
// // console.log(result);




// //                        Challages 



// const calciTip = (billValue)=>{
//     if (billValue > 50 && billValue < 300) {
//         return billValue * 0.15; // 15% tip
//     } else {
//         return billValue * 0.2; // 20% tip
//     }
  
// }
// let bills = [125,555,44];
// let tips = [];
// let totals=[];

// for(let i=0;i<bills.length;i++){
// let tip = calciTip(bills[i]);
// tips.push(tip);
// totals.push(tip+bills[i]);
// }

// console.log("Bills:", bills);
// console.log("Tips:", tips);
// console.log("Total Bills:", totals);










