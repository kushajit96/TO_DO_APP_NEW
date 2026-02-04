// let inputEl = document.querySelector("#input-field");
// let taskList = document.querySelector("#task-list");
// let addBtn = document.querySelector("#add-btn");

// let tasks = [];


// addBtn.addEventListener("click", function(){
//    let taskText = inputEl.value;
//       if (taskText === "") return;

//       const li = document.createElement("li");
//       const deleteBtn = document.createElement("button");
//             li.innerText = taskText;
//             deleteBtn.innerText = "❌";

            
//       deleteBtn.addEventListener("click", function() {
//             li.remove();
//       })      
//       li.appendChild(deleteBtn);
//       taskList.appendChild(li);

//       inputEl.value = "";
  
// })

// To do app VERSION 2.0


let inputEl = document.querySelector("#input-field"); 
let taskList = document.querySelector("#task-list");  
let addBtn = document.querySelector("#add-btn");    

let editIndex = null;
let tasks = JSON.parse(localStorage.getItem("tasks")) || []; 
renderTasks()

addBtn.addEventListener("click", function (){              
      const taskText = inputEl.value;
      if (taskText === "") return;

      if (editIndex !== null){
            tasks[editIndex] = taskText;
      } else {
            tasks.push(taskText);
      }

      localStorage.setItem("tasks" , JSON.stringify(tasks))
      inputEl.value = "" ;

      renderTasks();
})

function renderTasks() {

      taskList.innerHTML = ""; 

      tasks.forEach(function (task, index){

      const li = document.createElement("li");
      const deleteBtn = document.createElement("button");
      const editBtn = document.createElement("button");  
      

      li.innerText = task;
      deleteBtn.innerText = "❌";
      editBtn.innerText = "Edit"  
      deleteBtn.addEventListener("click", function(){
            tasks.splice(index, 1);

            localStorage.setItem("tasks" , JSON.stringify(tasks));
            renderTasks();
      })

      editBtn.addEventListener("click", function(){
      inputEl.value = task;  
      editIndex = index; 

      })
            li.appendChild(editBtn);
            li.appendChild(deleteBtn);
            taskList.appendChild(li);
     })
}