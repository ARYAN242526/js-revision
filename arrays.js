// Arrays and loops
//const languages = ["java" , "python" , "javascript","ruby"];

// console.log(languages);
// console.log(typeof languages);
// console.log(languages.length);

// languages.push("dart");
// languages.unshift("go");
// languages.pop();
// console.log(languages.pop());
// languages.shift();
// console.log(languages);

// const actors = [
//     {
//         name : 'Actor 1',
//         payment : 100
//     },
//     {
//         name : 'Actor 2',
//         payment : 200
//     },
//     {
//         name : 'Actor 1',
//         payment : 300
//     } 
// ]
// for(let i = 0;i<actors.length;i++){
//     actors[i].payment = actors[i].payment - 10;
// }

// forEach loop
// actors.forEach((actor) => {
//     actor.payment = actor.payment - 10;   
// })

// for of loop
// for(let actor of actors){
//     actor.payment = actor.payment - 10;
//    // console.log(actor);
// }

// console.log(actors);

// filter

// const students = [
//     {
//         name : 'Student 1',
//         marks : 45
//     },
//     {
//         name : 'Student 2',
//         marks : 35
//     },
//     {
//         name : 'Student 3',
//         marks : 60
//     }
// ];

// const result = students.filter((student) => {
//     return student.marks < 45;
// });

// const failed = students.filter((student) =>  student.marks < 45);

// console.log(failed);
// console.log(students);

// map 
// const users = [
//     {
//         fname : 'John',
//         lname : 'Doe'
//     },
//     {
//         fname : 'Jane',
//         lname : 'Doe'
//     },
// ]

// // const finalUsers = users.map((user) => {
// //     return {
// //        fullName :  user.fname + " " +  user.lname
// //     }
// // })

// const finalUsers = users.map((user) => {
//     return {
//         fullName : `${user.fname} ${user.lname}`
//     }
// })
// console.log(finalUsers);

// reduce 
// const movies = [
//     {
//         name : 'Interstellar',
//         budget : 100
//     },
//     {
//         name : 'Social',
//         budget : 200
//     },
//     {
//         name : 'Matrix',
//         budget : 300
//     }
// ];

// let total = 0
// movies.forEach((movie) => {
//     total += movie.budget; 
// });
// console.log(total);

// const total = movies.reduce((acc,movie) => {
//     acc = acc + movie.budget;
//     return acc;
// },0);
// console.log(total);


// IndexOf
// const admins = [2,1,5];

// const user = {
//     name : 'XYZ',
//      id : 5
// }


// const isAdmin  = admins.indexOf(user.id) > -1;
// console.log(isAdmin);

// includes
// console.log(admins.includes(user.id));

// find method
// const users = [
//     {
//         name : "A",
//         id : 1,
//     },
//     {
//         name : "B",
//         id : 2,
//     },
//     {
//         name : "C",
//         id : 3,
//     },
// ];

// const myUser = users.find((user) => {
//    return user.name === 'Z'
// });

// console.log(myUser);


// sort 
//  const arr = [2,5,8,4,6];
//  arr.sort()
//  console.log(arr);
 
// const names = ["Ram", "Shyam" , "Kaushik", "John", "Jane"]
// // names.sort();

// names.splice(2,2)
// console.log(names);



 
