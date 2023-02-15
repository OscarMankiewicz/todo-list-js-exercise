function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },

    markCompleted: function() {
      this.complete = true;
    }
  };
  return task;
}

// marks the provided task as completed
function completeTask(task) {
  task.complete = true;
}

// Print the state of a task to the console in a nice readable way
function logTaskState(task) {
  console.log(`${task.title} has ${task.complete ? " " : " not "} been completed`);
}



// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Take all the poop out of the litter box");
const task2 = newTask("Do Laundry", "Suprised")
const tasks = [task1, task2];

task1.logState(0); // Clean Cat Litter has not been completed
task1.markCompleted(0);
task1.logState(0); // Clean Cat Litter has been completed

