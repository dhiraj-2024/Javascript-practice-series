
//! QUETION NO 1

var myObject ={

    foo:"bar",
    func: function(){
        var self = this;
        console.log("outer func  this.foo =" + this.foo); //bar
        console.log("outer func  self.foo=" + self.foo); //bar
        (function(){
            console.log("inner func  this.foo =" + this.foo); // undefined 
            console.log("inner func  self.foo=" + self.foo); // bar
        }())
    }
}
myObject.func()