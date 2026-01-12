function changeName(newName){
        this.name = newName;
        this.updatedAt = new Date();
}

const task1 = {
    name: "Task 1", 
    createdAt: new Date(),
    updatedAt: null,
    completed: false, 
    changeName 
}

task1.changeName("new task");
console.log(task1);