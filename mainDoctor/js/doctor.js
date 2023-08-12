
let subjectName = document.querySelector(".subjectName");
let subjectId = document.querySelector(".subjectId");
let subjectDepartment = document.querySelector(".subjectDepartment");
let submit = document.querySelector(".submit");
let subjects = document.querySelector(".subject-contant .container .contant");

document.getElementById("my-form").addEventListener("submit", (e) => {
    e.preventDefault();
});


let arrOfSubject = [];

if (localStorage.getItem("doctor")) {
    arrOfSubject = JSON.parse(localStorage.getItem("doctor"));
}


getDataFromLocalStorge();

submit.onclick = function () {
    if (subjectName.value !== "" && subjectId.value !== "" && subjectDepartment.value !== "") {
        addSubjectToArry(subjectName.value, subjectId.value, subjectDepartment.value);
        subjectName.value = "";
        subjectId.value = "";
        subjectDepartment.value = "";
    }
}


subjects.addEventListener("click", (e) => {
    if (e.target.classList.contains("del")) {
        deleteSubjectFromLocalStorge(e.target.parentElement.getAttribute("data-id"));
        e.target.parentElement.remove();
    }
})

function addSubjectToArry(name, id, depart) {
    const subject = {
        name: name,
        id: id,
        depart: depart,
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
        let span5 = document.createElement("span");
        span1.className = "add";
        span2.className = "add";
        span3.className = "add";
        span5.className = "dellet del";

        span1.appendChild(document.createTextNode(task.name));
        span2.appendChild(document.createTextNode(task.id));
        span3.appendChild(document.createTextNode(task.depart));
        span5.appendChild(document.createTextNode("Delete"));


        div.appendChild(span1);
        div.appendChild(span2);
        div.appendChild(span3);
        div.appendChild(span5);

        subjects.appendChild(div);
    });
}

function addElllementTLocalStorge(arrOfSubject) {
    window.localStorage.setItem("doctor", JSON.stringify(arrOfSubject));
}

function getDataFromLocalStorge() {
    let data = window.localStorage.getItem("doctor");
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
///////////////////////////////////////////////

