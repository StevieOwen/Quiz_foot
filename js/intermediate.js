let switch_page=document.querySelector(".switch_page");
let nom=document.querySelector("#nom");
nom.textContent=localStorage.getItem("name");
let body=document.querySelector("body");
let prev1=document.querySelector("#prev1");
let next1=document.querySelector("#next1");
let prev2=document.querySelector("#prev2");
let next2=document.querySelector("#next2");
let prev3=document.querySelector("#prev3");
let next3=document.querySelector("#next3");
let prev4=document.querySelector("#prev4");
let next4=document.querySelector("#next4");
let prev5=document.querySelector("#prev5");
let next5=document.querySelector("#next5");

prev1.addEventListener("click",function(e){
    e.preventDefault();
    location.assign("../level.html");
})

next1.addEventListener("click",function(e){
    e.preventDefault();
    switch_page.style.marginLeft="-27%";
})
next2.addEventListener("click",function(e){
    e.preventDefault();
    switch_page.style.marginLeft="-80%";
})
next3.addEventListener("click",function(e){
    e.preventDefault();
    switch_page.style.marginLeft="-128.5%";
})
next4.addEventListener("click",function(e){
    e.preventDefault();
    switch_page.style.marginLeft="-169%";
})



prev2.addEventListener("click",function(e){
    e.preventDefault();
    switch_page.style.marginLeft="0%";
})
prev3.addEventListener("click",function(e){
    e.preventDefault();
    switch_page.style.marginLeft="-27%";
})
prev4.addEventListener("click",function(e){
    e.preventDefault();
    switch_page.style.marginLeft="-80%";
})
