//class
class Task {
  //properties of class
  done: boolean = false;

  //constructor to initiate new objects with class "Task"
  //you pass in two parameters, both of type string.
  //the public keyword before the parameter name makes it so you don't need to list that paremeter in the constructor OR the task, apparently.  it actually creates that property of the object.
  //including the keyword public before a variable or property means any part of the application has access this property.  e.g. typescript can assign that variable or property, in this case the constructor parameter, to class properties.
  constructor(public description: string, public priority: string) {}

  markDone () {//when called on an object with class of "Task", it sets that Task object's "done" property to true.
    this.done = true;
  }
}

var tasks: Task[] = []; //creates an empty array that will only accept new objects with class "Task"
tasks.push(new Task('Do the dishes.', 'Medium'));//push new object with class "Task."  Strings must be defined with single quotes
tasks.push(new Task('Buy Chocolate.', 'Low'));
tasks.push(new Task('Do laundry.', 'High'));

tasks[0].markDone();//calls markDone method, part of Task class, on the first index or tasks, an array of objects with the class Task.

for(var banana of tasks) {
  console.log(banana);//console log individual indexes of tasks array
}
console.log(tasks);//console log array tasks
