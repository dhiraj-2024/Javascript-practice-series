
//! this keywork with object 
const user = {
    username:"dhiraj",
    city:"Nashik",
    age: 22,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`); //output: dhiraj, welcome to website

        // console.log(this)
        /* output: 
        {
            username: 'dhiraj',
            city: 'Nashik',
            age: 22,
            welcomeMessage: [Function: welcomeMessage]
        } */
    }

};
// console.log(this) // output : {}  empty object in node environment it we run in the browser it returns a window object;
// user.welcomeMessage()
// user.username= "pramod"
// user.welcomeMessage();
user.welcomeMessage()