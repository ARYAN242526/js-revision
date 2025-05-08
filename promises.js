
function register() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Register done');
             resolve('success');
        }, 1000);
    });
}

function sendEmail(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log('Email sent done');
            resolve()
        },5000)    
    })
}

function login(){
  return new Promise((resolve,reject) => {
    setTimeout(() => {
        console.log('Login done');
       resolve()
    },3000)
  })
}

function getUserData(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log('Got user data');
            resolve()
        },1000)
    })
}

function displayUserData(){
   return new Promise((resolve,reject) => {
    setTimeout(() => {
        console.log('Display data done');
        resolve()
    },1000)
   })
}

// callback hell
// register(function(){
//     sendEmail(function() {
//         login(function() {
//             getUserData(function() {
//                 displayUserData();
//             });
           
//         });   
//     });  
// });

// register()
// .then(sendEmail)
// .then(login)
// .then(getUserData)
// .then(displayUserData)
// .catch((err) => {
//     console.log('Caught error : ' , err);
    
// })

async function authenticate(){
    try {
       const message =  await register();
        await sendEmail()
        await login();
        await getUserData();
        await displayUserData();
        console.log(message);
        
    } catch (error) {
        console.log(error);
        throw new Error();
        
    }
}

authenticate().then(() => {
    console.log('All set');  
})
.catch((err) => {
    console.log(err);
    
})

console.log('Other application work!');
