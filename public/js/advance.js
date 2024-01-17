let nom_text=document.querySelector("#nom");
nom_text.textContent=localStorage.getItem("name");
let switch_page=document.querySelector(".switch_page");
let prev1=document.querySelector("#prev1");
let next1=document.querySelector("#next1");

let prev2=document.querySelector("#prev2");
let next2=document.querySelector("#next2");

let prev3=document.querySelector("#prev3");
let next3=document.querySelector("#next3");

let prev4=document.querySelector("#prev4");
let next4=document.querySelector("#next4");
let bullet=document.querySelectorAll(".step .bullet");
let max=5;
let current=1;

let body=document.querySelector("body");
prev1.addEventListener("click",function(e){
    e.preventDefault();
    location.assign("/level")
})

next1.addEventListener("click",function(e){
    e.preventDefault();   
    switch_page.style.marginLeft="-28%";
    bullet[current -1].classList.add("active")
    current+=1;
})

next2.addEventListener("click",function(e){
    e.preventDefault();   
    switch_page.style.marginLeft="-80%";
    bullet[current -1].classList.add("active")
    current+=1;
})
next3.addEventListener("click",function(e){
    e.preventDefault();   
    switch_page.style.marginLeft="-140%";
    bullet[current -1].classList.add("active")
    current+=1;
})
next4.addEventListener("click",function(e){
    e.preventDefault();   
    switch_page.style.marginLeft="-200%";
    bullet[current -1].classList.add("active")
    current+=1;
})

prev2.addEventListener("click",function(e){
    e.preventDefault();   
    switch_page.style.marginLeft="0%";
    bullet[current -2].classList.remove("active")
    current-=1;
    imgfalse1.classList.remove("active1");
    imgtrue1.classList.remove("active1");
})

prev3.addEventListener("click",function(e){
    e.preventDefault();   
    switch_page.style.marginLeft="-28%";
    bullet[current -2].classList.remove("active")
    current-=1;
    imgfalse2.classList.remove("active1");
    imgtrue2.classList.remove("active1");
})

prev4.addEventListener("click",function(e){
    e.preventDefault();   
    switch_page.style.marginLeft="-80%";
    bullet[current -2].classList.remove("active")
    current-=1;
    imgfalse3.classList.remove("active1");
    imgtrue3.classList.remove("active1");
})

let submit1=document.querySelector("#submit1");
let submit2=document.querySelector("#submit2");
let submit3=document.querySelector("#submit3");
let submit4=document.querySelector("#submit4");
let submit5=document.querySelector("#submit5");
let score_text=document.querySelector("#score");
let score=0;
let res1=document.querySelector("#quest1");
let res2=document.querySelector('input[id="quest2"]');
let res3=document.querySelector('input[id="quest3"]');
let res4=document.querySelector('input[id="quest4"]');
let res5=document.querySelector('input[id="quest5"]');
let imgtrue1=document.querySelector(".step .check #true1");
let imgtrue2=document.querySelector(".step .check #true2");
let imgtrue3=document.querySelector(".step .check #true3");
let imgtrue4=document.querySelector(".step .check #true4");
let imgtrue5=document.querySelector(".step .check #true5");

let imgfalse1=document.querySelector(".step .check #false1");
let imgfalse2=document.querySelector(".step .check #false2");
let imgfalse3=document.querySelector(".step .check #false3");
let imgfalse4=document.querySelector(".step .check #false4");
let imgfalse5=document.querySelector(".step .check #false5");

submit1.addEventListener("click",function(e){
    e.preventDefault();
    if(res1.value.toLowerCase()=="paco gento"){
        score+=1;
        imgtrue1.classList.add("active1");
        imgfalse1.classList.remove("active1");
    }else{
        imgfalse1.classList.add("active1");  
        imgtrue1.classList.remove("active1");
    }
    localStorage.setItem("score",score);
    score_text.textContent="Score: " + localStorage.getItem("score");
})
submit2.addEventListener("click",function(e){
    e.preventDefault();
    if(res2.value.toLowerCase()=="1955"){
        score+=1;
        imgtrue2.classList.add("active1");
        imgfalse2.classList.remove("active1"); 
    }else{
        imgfalse2.classList.add("active1"); 
        imgtrue2.classList.remove("active1");   
    }
    localStorage.setItem("score",score);
    score_text.textContent="Score: " + localStorage.getItem("score");
})
submit3.addEventListener("click",function(e){
    e.preventDefault();
    if(res3.value.toLowerCase()=="al ahly"||res3.value.toLowerCase()=="al ahly sporting club" ){
        score+=1;
        imgtrue3.classList.add("active1");  
        imgfalse3.classList.remove("active1");   
    }else{
        imgfalse3.classList.add("active1");
        imgtrue3.classList.remove("active1");
    }
    localStorage.setItem("score",score);
    score_text.textContent="Score: " + localStorage.getItem("score");
})
submit4.addEventListener("click",function(e){
    e.preventDefault();
    if(res4.value.toLowerCase()=="uruguay" ){
        score+=1;
        imgtrue4.classList.add("active1"); 
        imgfalse4.classList.remove("active1");
    }else{
        imgfalse4.classList.add("active1");
        imgtrue4.classList.remove("active1");
    }
    localStorage.setItem("score",score);
    score_text.textContent="Score: " + localStorage.getItem("score");
})
submit5.addEventListener("click",function(e){
    e.preventDefault();
    if(res3.value.toLowerCase()=="just fontaine" ){
        score+=1;
        imgtrue5.classList.add("active1");
        imgfalse5.classList.remove("active1");     
    }else{
        imgfalse5.classList.add("active1");
        imgtrue5.classList.remove("active1");
    }
    localStorage.setItem("score",score);
    score_text.textContent="Score: " + localStorage.getItem("score");
    location.assign("/endeasy");
})

