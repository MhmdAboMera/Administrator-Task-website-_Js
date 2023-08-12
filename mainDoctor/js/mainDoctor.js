// start seting box 
document.querySelector(".main .fa-gear").onclick = function (){
    this.classList.toggle("fa-spin");
    this.classList.toggle("open");
    document.querySelector(".seting-box").classList.toggle("open");
};
// function for switch active class 
function controlActive (e){
    e.target.parentElement.querySelectorAll(".active").forEach(e=>{
        e.classList.remove("active");
    });
    e.target.classList.add("active");
}
// switch colors 
document.querySelectorAll(".color-list li").forEach(li=> {
    li.addEventListener("click",(e)=> {
        document.documentElement.style.setProperty("--main-color",e.target.dataset.color);
        localStorage.setItem("color-option",e.target.dataset.color);
        controlActive (e);
    });
});
if(localStorage.getItem("color-option") !== null ){
    document.documentElement.style.setProperty("--main-color",localStorage.getItem("color-option"));

    document.querySelectorAll(".color-list li").forEach(li =>{
        li.classList.remove("active");
        if (li.dataset.color===localStorage.getItem("color-option")){
            li.classList.add("active");
        }
    });
};

document.querySelector(".seting-box .rest-option").onclick = ()=>{
    // localStorage.clear();
    localStorage.removeItem("color-option");
    // localStorage.removeItem("background-option");
    window.location.reload();
}





// show togele menu in somll media 
document.querySelector(".landing-page .header-area .menu").onclick =function (e){
    e.stopPropagation();
    document.querySelector(".landing-page .header-area .links").classList.toggle("open");
    this.classList.toggle("menu-active");
}
document.querySelector(".landing-page .header-area .links").onclick = function(e){
    e.stopPropagation();
}
// close toggle menu
document.addEventListener("click",(e)=>{
    if(e.toggle !== document.querySelector(".landing-page .header-area .menu") && e.toggle !== document.querySelector(".landing-page .header-area .links")){
        if(document.querySelector(".landing-page .header-area .links").classList.contains("open")){
            document.querySelector(".landing-page .header-area .menu").classList.toggle("menu-active");
            document.querySelector(".landing-page .header-area .links").classList.toggle("open");
        }
    }
});



