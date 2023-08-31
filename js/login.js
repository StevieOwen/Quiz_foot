let button=document.querySelector('input[type="submit"]');
let form=document.forms['form'];
form.addEventListener("submit",function(e){
    e.preventDefault();
    window.localStorage.setItem("name",form.querySelector('input[type="text"]').value);
    location.assign("../level.html")
})