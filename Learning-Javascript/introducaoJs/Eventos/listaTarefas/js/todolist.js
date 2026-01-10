;(function(){
    'use strict'

    //Armazenar o DOM em váriaveis
    const itemInput = document.getElementById("item-input");
    const todoAddForm = document.getElementById("todo-add");
    const ul = document.getElementById("todo-list");
    const lis = ul.getElementsByTagName("li");
    const valueNull = "";

    let arrayTasks = [
        {
            name: "Task 1",
            createdAt: Date.now(),
            completed: false
        },
        {
            name: "Task 2",
            createdAt: Date.now(),
            completed: false
        }
    ];

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
        checkButton.setAttribute("data-action", "checkButton");    

        deleteButton.className = "fas fa-trash-alt"; 
        deleteButton.setAttribute("data-action", "deleteButton");

        editButton.className = "fas fa-edit";
        editButton.setAttribute("data-action", "editButton");   

        containerEdit.className = "editContainer";

        inputEdit.setAttribute("type", "text");
        inputEdit.className = "editInput";
        inputEdit.value = obj.name;

        containerEditButton.className = "editButton";
        containerEditButton.textContent = "Edit";
        containerEditButton.setAttribute("data-action", "containerEditButton"); 

        containerCancelButton.className = "cancelButton";
        containerCancelButton.textContent = "Cancel";
        containerCancelButton.setAttribute("data-action", "containerCancelButton"); 

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

    function clickedUl(event){  
        const dataAction = event.target.getAttribute("data-action");

        if(!dataAction) return;

        let currentLi = event.target;
        while(currentLi.nodeName !== "LI")
        {
            currentLi = currentLi.parentElement;    
        }

        const currentLiIndex = [...lis].indexOf(currentLi);

        const actions = {
            editButton: function(){
                const editContainer = currentLi.querySelector(".editContainer");

                [...ul.querySelectorAll(".editContainer")].forEach(container => {
                    container.removeAttribute("style");
                })

                editContainer.style.display = "flex";
            },
            deleteButton: function(){
                arrayTasks.splice(currentLiIndex, 1);
                renderTasks();
            },
            checkButton: function(){
                arrayTasks[currentLiIndex].completed = !arrayTasks[currentLiIndex].completed;
                renderTasks();
            },
            containerEditButton: function(){
                arrayTasks[currentLiIndex].name = currentLi.querySelector(".editInput").value;
                renderTasks();
            },
            containerCancelButton: function(){
                const editContainer = currentLi.querySelector(".editContainer");
                editContainer.style.display = "none";
            }
        }

        if(actions[dataAction]){
            actions[dataAction]();  
        }
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
    
    ul.addEventListener("click", clickedUl);

    renderTasks();
})();