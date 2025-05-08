/*
1. Register 
2. Send welcome email
3. Login
4. Get user data
5. Display user data
*/

// function waitForThreeSeconds(){
//     let ms = 3000 + new Date().getTime();
//     while(new Date() < ms) {}
// }


function register(callback){
    setTimeout(() => {
        console.log('Register done');
        callback();
    },1000)
}

function sendEmail(callback){
    setTimeout(() => {
        console.log('Email sent done');
        callback();
    },5000)
   
}

function login(callback){
    setTimeout(() => {
        console.log('Login done');
        callback();
    },2000)
}

function getUserData(callback){
    setTimeout(() => {
        console.log('Got user data');
        callback();
    },1000)
}

function displayUserData(){
    setTimeout(() => {
        console.log('Display data done');
        
    },1000)
}

// callback hell
register(function(){
    sendEmail(function() {
        login(function() {
            getUserData(function() {
                displayUserData();
            });
           
        });   
    });  
});


console.log('Other application work!');
