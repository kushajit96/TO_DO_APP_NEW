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


let inputEl = document.querySelector("#input-field"); // This line connects with the HTML to access input
let taskList = document.querySelector("#task-list");  // This line connects with the HTML to access taskList
let addBtn = document.querySelector("#add-btn");    // This line connects with the HTML to access addbtn

let tasks = JSON.parse(localStorage.getItem("tasks")) || []; // This is where we will save our inputs given by the user
//      let tasks = localStorage.getItem("tasks") || [];
//      console.log(typeof tasks)

renderTasks()


addBtn.addEventListener("click", function (){              
      const taskText = inputEl.value;
      if (taskText === "") return;

      tasks.push(taskText);

      localStorage.setItem("tasks" , JSON.stringify(tasks))
      inputEl.value = "" ;

      
      renderTasks();
})

function renderTasks() {

      taskList.innerHTML = ""; 

      tasks.forEach(function (task, index){

      const li = document.createElement("li");
      const deleteBtn = document.createElement("button");
      

      li.innerText = task;
      deleteBtn.innerText = "❌";

      deleteBtn.addEventListener("click", function(){
            tasks.splice(index, 1);

            localStorage.setItem("tasks" , JSON.stringify(tasks));
            renderTasks();
      })
      
            li.appendChild(deleteBtn);
            taskList.appendChild(li);
     })
}

console.log(tasks)

