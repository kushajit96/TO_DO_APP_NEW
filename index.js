let inputEl = document.querySelector("#input-field");
let taskList = document.querySelector("#task-list");
let addBtn = document.querySelector("#add-btn");

let tasks = [];


addBtn.addEventListener("click", function(){
   let taskText = inputEl.value;
      if (taskText === "") return;

      const li = document.createElement("li");
      const deleteBtn = document.createElement("button");
            li.innerText = taskText;
            deleteBtn.innerText = "❌";

            
      deleteBtn.addEventListener("click", function() {
            li.remove();
      })      
      li.appendChild(deleteBtn);
      taskList.appendChild(li);

      inputEl.value = "";
  
})


