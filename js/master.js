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
// end switch colors 
// end seting box 
//start set rundam image for landing 
let backgeoundOption = true ;
let backGroundIntrvel;
function randomImg (){
    if (backgeoundOption===true){
        let laindingPage = document.querySelector(".landing-page");
        let setImage = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"];
        backGroundIntrvel = setInterval(()=>{
            let rundomImage = Math.floor(Math.random() * setImage.length);
            laindingPage.style.backgroundImage =`url(../imgs/${setImage[rundomImage]})`;
        },4000);
    }
}
if(localStorage.getItem("background-option") !== null){
    if(localStorage.getItem("background-option") === "true"){
        backgeoundOption = true;
    }else{
        backgeoundOption = false;
    }
    document.querySelectorAll(".random-background span").forEach((span)=>{
        span.classList.remove("active");
    });
    if(localStorage.getItem("background-option") === "true"){
        document.querySelector(".random-background .yes").classList.add("active");
    }else{
        document.querySelector(".random-background .no").classList.add("active");
    }
}
//end set rundam image for landing 
// start random background 
document.querySelectorAll(".random-background span").forEach((span)=>{
    span.addEventListener("click", (e) => {
        controlActive (e);
        if( e.target.dataset.background === "yes"){
            backgeoundOption = true;
            randomImg ();
            localStorage.setItem("background-option",true);
        }else{
            backgeoundOption = false;
            clearInterval(backGroundIntrvel);
            localStorage.setItem("background-option",false );
            
        }
    });
});
randomImg();
// end random background
// rest option 
document.querySelector(".seting-box .rest-option").onclick = ()=>{
    // localStorage.clear();
    localStorage.removeItem("color-option");
    localStorage.removeItem("background-option");
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




