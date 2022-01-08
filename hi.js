
var obj ={
    name :"Prasad",
    Gender :'male',
    age :'22',
    Address :'Boston, Brazil'
}

let obj1 =JSON.stringify(obj);

localStorage.setItem('obj',obj1);

let obj3 = JSON.parse(localStorage.getItem("obj"));
console.log(obj1);