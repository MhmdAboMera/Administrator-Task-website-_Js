
let nameOfSubject = document.querySelector(".subject-name");
let ideOfDoctor = document.querySelector(".doctor-Id");
let save = document.querySelector(".save");
let divOfControl = document.querySelector(".contant-info");

document.getElementById("myForm").addEventListener("submit", (e) => {
    e.preventDefault();
});

arrayForControl = [];
if (localStorage.getItem("dataControl")) {
    arrayForControl = JSON.parse(localStorage.getItem("dataControl"));
}
getdatafromlocalStorge();

divOfControl.addEventListener("click", (e) => {
    if (e.target.classList.contains("del")) {
        deletetaskFromLocalStorge(e.target.parentElement.getAttribute("data-id"));
        e.target.parentElement.remove();
    }
})
save.onclick = function () {
    if (nameOfSubject.value !== "" && ideOfDoctor.value !== "") {
        addToArray(nameOfSubject.value, ideOfDoctor.value);
        nameOfSubject = "";
        ideOfDoctor = "";
    }
}

function addToArray(nameOfSubject, ideOfDoctor) {
    const task = {
        nameOfsub: nameOfSubject,
        idOfdoc: ideOfDoctor,
        completed :false,
    };
    arrayForControl.push(task);
    addToPageFrom(arrayForControl);

    addDataToLocalstorge(arrayForControl);
}


function addToPageFrom(arrayForControl) {
    divOfControl.innerHTML = "";
    arrayForControl.forEach((task) => {
        let div = document.createElement("div");
        div.className = "task";
        div.setAttribute("data-id", task.idOfdoc);

        let span = document.createElement("span");
        let span11 = document.createElement("span");
        let span12 = document.createElement("span");

        span.className = "add";
        span11.className = "add";
        span12.className = "dellet del";

        span.appendChild(document.createTextNode(task.nameOfsub));
        span11.appendChild(document.createTextNode(task.idOfdoc));
        span12.appendChild(document.createTextNode("Delete"));


        div.appendChild(span);
        div.appendChild(span11);
        div.appendChild(span12);


        divOfControl.appendChild(div);

    });
}

function addDataToLocalstorge(arrayForControl) {
    window.localStorage.setItem("dataControl", JSON.stringify(arrayForControl))
}
 

function getdatafromlocalStorge() {
    let data = window.localStorage.getItem("dataControl");
    if (data) {
        let tasks = JSON.parse(data);
        addToPageFrom(tasks);
    }
}

function deletetaskFromLocalStorge(taskid) {
    arrayForControl = arrayForControl.filter((task) => {
        return task.idOfdoc !== taskid;
    })
    addDataToLocalstorge(arrayForControl);
}
//////////////////////////

// tab linkes

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
