let taskInp = document.getElementById("taskInp");
let toDocontain = document.getElementById("toDocontain");
let countDown = 0;

function taskAdd(){
    if (countDown >= 6){
        alert("You have reached the maximum limit");
        return;
    }
    if (taskInp.value === ""){
        alert("Enter a task first")
    }else{
        let taskDiv = document.createElement("DIV");
        taskDiv.setAttribute("class","task-div")
        let taskPara = document.createElement("P")
        taskPara.textContent = taskInp.value;
        taskInp.value = ""
        taskDiv.appendChild(taskPara);
        toDocontain.appendChild(taskDiv);

        let taskDivBtn = document.createElement("DIV");
        taskDivBtn.setAttribute("class","task-btn")
        let editBtn = document.createElement("BUTTON");
        editBtn.setAttribute("class","ri-edit-line")
        editBtn.setAttribute("onclick","taskEdit(this)")
        taskDivBtn.appendChild(editBtn);

        let deleteBtn = document.createElement("BUTTON");
        deleteBtn.setAttribute("onclick","removeTask(this)");
        deleteBtn.setAttribute("class","ri-close-line")
        taskDivBtn.appendChild(deleteBtn);

        taskDiv.appendChild(taskDivBtn);

        countDown++;

    }
}

function removeTask(elem){
    let delTask = elem.parentNode.parentNode;
    delTask.remove();
    countDown--;

}

function taskEdit(elem){
    let editPrnt = elem.parentNode;
    let paraEdit = editPrnt.parentNode.firstChild;
    let newInp = document.createElement("INPUT");
    newInp.setAttribute("type","text");
    newInp.setAttribute("maxlength","50");
    newInp.setAttribute("placeholder","Enter your task")
    paraEdit.appendChild(newInp);
    newInp.value = paraEdit.textContent;
    paraEdit.firstChild.textContent = "";
    editPrnt.firstChild.style.display = "none"

    let saveBtn = document.createElement("BUTTON");
    saveBtn.setAttribute("class","ri-save-line");
    saveBtn.setAttribute("onclick","saveTask(this)");
    editPrnt.prepend(saveBtn);
}

function saveTask(elem){
    let updateTask = elem.parentNode;
    let updatePara = updateTask.parentNode;
    if(updatePara.firstChild.firstChild.nextSibling.value === ""){
        alert("Write Something")
    }else{
        updatePara.firstChild.innerHTML = updatePara.firstChild.firstChild.nextSibling.value;
        updateTask.childNodes[1].style.display = "inline-block"
        updateTask.firstChild.remove();
    }
 
}
function clearAll(){
    toDocontain.innerHTML = "";
    taskInp.value = ""; 
    countDown = 0;
}