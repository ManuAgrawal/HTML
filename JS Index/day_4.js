// console.log(document);

//  let h1   =   document.getElementById("one")
// h1.style.color = "red"
//  console.log(h1);
 

// let h1 = document.getElementsByClassName("two")
// h1[0].style.color= 'blue';
// console.log(h1);


// for( let i of h1){
//     i.style.color='red'
// }

// let h1 = document.querySelector(".two")
// console.log(h1);

// let h1 = document.querySelectorAll(".two")
// console.log(h1);


// let a= document.querySelector("a")
// // a.setAttribute("href","https://www.youtube.com/")
// a.setAttribute("href","https://flipkart.com/")
// console.log();

const arr =[
    'https://images.unsplash.com/photo-1474511320723-9a56873867b5?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1564166174574-a9666f590437?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1497752531616-c3afd9760a11?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',


];

const imageEl = document.querySelector('img');

let num=0;

setInterval(function(){
    imageEl.setAttribute('src', arr[num]);
    num = (num + 1) % arr.length;
    
}, 2000);
//  console.log(imageEl);



