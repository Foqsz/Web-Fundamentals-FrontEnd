;(function(){
    'use strict'

    //Armazenar o DOM em váriaveis
    const itemInput = document.getElementById("item-input");
    const todoAddForm = document.getElementById("todo-add");
    const ul = document.getElementById("todo-list");
    // const lis = ul.getElementsByTagName("li");
    const valueNull = "";

    let arrayTasks = [
        {
            name: "Task 1",
            createdAt: Date.now(),
            completed: false
        }
    ];

    function addEventLi(li){
        li.addEventListener("click", function(){
            console.log(this);  
        });
    };

    function generateLiTask(obj){
        const li = document.createElement("li"); 
        const p = document.createElement("p");
        const checkButton = document.createElement("button");
        const editButton = document.createElement("i");
        const deleteButton = document.createElement("i");
        const containerEdit = document.createElement("div");
        const inputEdit = document.createElement("input");
        const containerEditButton = document.createElement("button");
        const containerCancelButton = document.createElement("button");

        checkButton.className = "button-check";
        checkButton.innerHTML = `<i class="fas fa-check displayNone"></i>`;

        deleteButton.className = "fas fa-trash-alt"; 

        editButton.className = "fa fa-edit";

        containerEdit.className = "editContainer";

        inputEdit.setAttribute("type", "text");
        inputEdit.className = "editInput"; 

        containerEditButton.className = "editButton";
        containerEditButton.textContent = "Edit";

        containerCancelButton.className = "cancelButton";
        containerCancelButton.textContent = "Cancel";

        li.className = "todo-item";
        p.className = "task-name";
        p.textContent = obj.name;
        ul.appendChild(li); // Adicionar o item da lista à lista não ordenada

        li.appendChild(checkButton);  
        li.appendChild(p);            
        li.appendChild(editButton);  
        containerEdit.appendChild(inputEdit);  
        containerEdit.appendChild(containerEditButton);  
        containerEdit.appendChild(containerCancelButton);  
        li.appendChild(containerEdit);
        li.appendChild(deleteButton); 

        addEventLi(li);

        return li;
    }

    function renderTasks(){
        ul.innerHTML = valueNull;
        arrayTasks.forEach(task => {
            ul.appendChild(generateLiTask(task));   
        });
    }

    function addTask(task){
        arrayTasks.push({
            name: task  ,
            createdAt: Date.now(),
            completed: false});
    };

    todoAddForm.addEventListener("submit", function(event){
        event.preventDefault();
        console.log(itemInput.value);
        // ul.innerHTML += `
        //         <li class="todo-item">
        //             <p class="task-name">${itemInput.value}</p>
        //         </li>`
        addTask(itemInput.value);   
        renderTasks();     
        itemInput.value = valueNull;        
        itemInput.focus();
    });

    renderTasks();
})();