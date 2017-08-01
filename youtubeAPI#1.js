// Add your code below this line!
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://www.codecademy.com/", false);
xhr.send();


// Add your code above this line!

console.log(xhr.status);
console.log(xhr.statusText);