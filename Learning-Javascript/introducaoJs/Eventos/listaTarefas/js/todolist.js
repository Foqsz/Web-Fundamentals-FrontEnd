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
        li.className = "todo-item";
        const p = document.createElement("p");
        p.className = "task-name";
        p.textContent = obj.name;
        li.appendChild(p); // Adicionar o parágrafo ao item da lista
        ul.appendChild(li); // Adicionar o item da lista à lista não ordenada

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