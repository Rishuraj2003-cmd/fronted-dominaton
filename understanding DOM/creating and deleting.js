// with the help of .createElement we can create any element 

// creating and deleting element
// createElement()
// appendChild()
// removeChild()
var h1 = document.createElement('h1');
h1.textContent='hey!'
h1.classList.add('makeitred')
document.querySelector("body").appendChild(h1);

var img= document.createElement('img')
img.src="https://plus.unsplash.com/premium_photo-1732730224379-8a0805fa27ef?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
img.classList.add('image')
document.querySelector("body").appendChild(img);
