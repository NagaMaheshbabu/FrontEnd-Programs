localStorage.setItem('name','shiva');
console.log(localStorage.getItem('name'));

sessionStorage.setItem('height',5.8);
console.log(sessionStorage.getItem('height'));
document.cookie = 'age = 22'+" "+new Date(2022,9,20).toUTCString();
console.log(document.cookie.replace('age'))