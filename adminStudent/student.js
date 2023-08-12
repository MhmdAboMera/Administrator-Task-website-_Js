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



let subjectName = document.querySelector(".subjectName");
let subjectId = document.querySelector(".subjectId");
let subjectDepartment = document.querySelector(".subjectDepartment");
let previousRequirement = document.querySelector(".previousRequirement");
let submit = document.querySelector(".submit");
let subjects = document.querySelector(".subject-contant .container .contant");

document.getElementById("my-form").addEventListener("submit", (e) => {
    e.preventDefault();
});


let arrOfSubject = [];

if (localStorage.getItem("tasks")) {
    arrOfSubject = JSON.parse(localStorage.getItem("tasks"));
}

getDataFromLocalStorge();

submit.onclick = function () {
    if (subjectName.value !== "" && subjectId.value !== "" && subjectDepartment.value !== "" && previousRequirement.value !== "") {
        addSubjectToArry(subjectName.value, subjectId.value, subjectDepartment.value, previousRequirement.value);
        subjectName.value = "";
        subjectId.value = "";
        subjectDepartment.value = "";
        previousRequirement.value = "";
    }
}


subjects.addEventListener("click", (e) => {
    if (e.target.classList.contains("del")) {
        deleteSubjectFromLocalStorge(e.target.parentElement.getAttribute("data-id"));
        e.target.parentElement.remove();
    }
})

function addSubjectToArry(name, id, depart, previous) {
    const subject = {
        name: name,
        id: id,
        depart: depart,
        previous: previous,
        completed :false,
    }
    arrOfSubject.push(subject);
    addEllementToPage(arrOfSubject);
    addElllementTLocalStorge(arrOfSubject);
}

function addEllementToPage(arrOfSubject) {
    subjects.innerHTML = "";
    arrOfSubject.forEach(task => {
        let div = document.createElement("div");
        div.className = "task";
        div.setAttribute("data-id", task.id);

        let span1 = document.createElement("span");
        let span2 = document.createElement("span");
        let span3 = document.createElement("span");
        let span4 = document.createElement("span");
        let span5 = document.createElement("span");
        span1.className = "add";
        span2.className = "add";
        span3.className = "add";
        span4.className = "add";
        span5.className = "dellet del";

        span1.appendChild(document.createTextNode(task.name));
        span2.appendChild(document.createTextNode(task.id));
        span3.appendChild(document.createTextNode(task.depart));
        span4.appendChild(document.createTextNode(task.previous));
        span5.appendChild(document.createTextNode("Delete"));


        div.appendChild(span1);
        div.appendChild(span2);
        div.appendChild(span3);
        div.appendChild(span4);
        div.appendChild(span5);

        subjects.appendChild(div);
    });
}

function addElllementTLocalStorge(arrOfSubject) {
    window.localStorage.setItem("tasks", JSON.stringify(arrOfSubject));
}

function getDataFromLocalStorge() {
    let data = window.localStorage.getItem("tasks");
    if (data) {
        let tasks = JSON.parse(data);
        addEllementToPage(tasks);
    }
}
function deleteSubjectFromLocalStorge(taskId) {
    arrOfSubject = arrOfSubject.filter((task) => {
        return task.id != taskId;
    });
    addElllementTLocalStorge(arrOfSubject);
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




let control = document.querySelectorAll(".control div");
let controlArray = Array.from(control);
let allContant = document.querySelectorAll(".all-contant >div");
let allContantArray = Array.from(allContant);

controlArray.forEach((ele) => {
    ele.addEventListener("click", (e) => {
        allContantArray.forEach((div) => {
            div.style.display = "none";
        });
        // console.log(e.currentTarget.dataset.cont);
        document.querySelector(e.currentTarget.dataset.cont).style.display = "block";
    });
    
});