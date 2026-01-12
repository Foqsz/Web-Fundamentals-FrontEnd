function Task(name){
    let _name = name;
    // this.name = name;
    this.createdAt = new Date();
    this.updatedAt = null;
    this.changeName = function(newName){
        _name = newName;
        this.updatedAt = new Date();
    };
    this.getName = function(){
        return _name;
    }
}

const task1 = new Task("Task 10");
task1.changeName("New Task 10");

console.log(task1);
console.log(task1.getName());

const task2 = new Task("Task 20");
console.log(task2.getName());