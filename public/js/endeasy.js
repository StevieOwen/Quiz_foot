let h4=document.querySelector(".container main h4");
let total=localStorage.getItem("score");
let p=document.querySelector("main p");
if(total<=2){
h4.textContent="Sorry! " + localStorage.getItem("name");
 p.style.borderColor="red";
 p.innerHTML=total + "/5"
}
else if(total>2){
    h4.textContent="Well done! " + localStorage.getItem("name");
     p.style.borderColor="green";
     p.innerHTML=total + "/5"
    }


let menu_button=document.querySelector(".container main button");
menu_button.addEventListener("click",function(e){
    e.preventDefault();
    location.assign("../level.html");
});