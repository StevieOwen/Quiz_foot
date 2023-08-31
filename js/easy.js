let nom=document.querySelector("#nom");
nom.textContent=localStorage.getItem("name");
let switch_page=document.querySelector(".switch_page");
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
    switch_page.style.marginLeft="-38%";

})
next2.addEventListener("click",function(e){
    e.preventDefault();
    switch_page.style.marginLeft="-75%";

})
next3.addEventListener("click",function(e){
    e.preventDefault();
    switch_page.style.marginLeft="-112%";

})
next4.addEventListener("click",function(e){
    e.preventDefault();
    switch_page.style.marginLeft="-149%";

})

prev2.addEventListener("click",function(e){
    e.preventDefault();
    switch_page.style.marginLeft="0%";

})
prev3.addEventListener("click",function(e){
    e.preventDefault();
    switch_page.style.marginLeft="-38%";

})
prev4.addEventListener("click",function(e){
    e.preventDefault();
    switch_page.style.marginLeft="-75%";

})
/*calcul score*/

let submit1=document.querySelector("#submit1");
let submit2=document.querySelector("#submit2");
let submit3=document.querySelector("#submit3");
let submit4=document.querySelector("#submit4");
let submit5=document.querySelector("#submit5");
let score_text=document.querySelector("#score");
let score=0;
let form=document.forms['form'];
let res1=document.querySelector("#quest1");
let res2=document.querySelector('input[id="quest2"]');
let res3=document.querySelector('input[id="quest3"]');
let res4=document.querySelector('input[id="quest4"]');
let res5=document.querySelector('input[id="quest5"]');
score_text.innerHTML="Score: " + localStorage.getItem("score");

submit1.addEventListener("click", function(e){
    e.preventDefault();
    if(res1.value.toLowerCase()=="argentina"){
        score=score+1;
        alert("correct");
    }else{
        alert("false");
    }
    localStorage.setItem("score",score);
    score_text.innerHTML="Score: " + localStorage.getItem("score");
})
submit2.addEventListener("click", function(e){
    e.preventDefault();
    if(res2.value.toLowerCase()=="portugal"){
        score=score+1;
        alert("correct");
    }else{
        alert("false");
    }
    localStorage.setItem("score",score);
    score_text.innerHTML="Score: " + localStorage.getItem("score")
})
submit3.addEventListener("click", function(e){
    e.preventDefault();
    if(res3.value.toLowerCase()=="argentina"){
        score=score+1;  
        alert("correct");     
    }else{
        alert("false");
    }
    localStorage.setItem("score",score);
    score_text.innerHTML="Score: " + localStorage.getItem("score")
})
submit4.addEventListener("click", function(e){
    e.preventDefault();
    if(res4.value.toLowerCase()=="senegal"){
        score=score+1;  
        alert("correct"); 
    }else{
        alert("false");
    }
    localStorage.setItem("score",score);
    score_text.innerHTML="Score: " + localStorage.getItem("score")
})
submit5.addEventListener("click", function(e){
    e.preventDefault();
    if(res5.value.toLowerCase()=="benzema"){
        score=score+1; 
        alert("correct");     
    }else{
        alert("false");
    }
    localStorage.setItem("score",score);
    score_text.innerHTML="Score: " + localStorage.getItem("score")
    location.assign("endeasy.html");
})
localStorage.setItem("score",score);