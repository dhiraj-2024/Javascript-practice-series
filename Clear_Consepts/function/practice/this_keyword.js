// function hello(){
//     console.log(this)
// }
// hello()

// function hello(){
    // let username = "dhiraj"
    // console.log(this.username)
        // console.log(this)
// }
// hello(); // undefined

const hello = ()=>{
    let username = "dhiraj"
    // console.log(this.username) // undefined
    console.log(this) // {}
}

hello() 