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

        checkButton.className = "button-check";
        checkButton.innerHTML = `<i class="fas fa-check displayNone"></i>`;

        deleteButton.className = "fas fa-trash-alt"; 

        editButton.className = "fa fa-edit";

        li.className = "todo-item";
        p.className = "task-name";
        p.textContent = obj.name;
        ul.appendChild(li); // Adicionar o item da lista à lista não ordenada

        li.appendChild(checkButton); // coluna 1
        li.appendChild(p);           // coluna 2 (texto)
        li.appendChild(editButton);  // coluna 3
        li.appendChild(deleteButton);// coluna 4

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