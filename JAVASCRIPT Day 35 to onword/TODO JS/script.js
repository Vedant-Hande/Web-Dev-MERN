const todoList = [];

while (true) {
  const input = prompt("Enter a request");
  if (input === "ADD") {
    const task = prompt("Enter a task u want");
    console.log(task);
    todoList.push(task);
  } else if (input === "DELETE") {
    const task = prompt("Enter a task");
    todoList.splice(todoList.indexOf(task), 1);
  } else if (input === "LIST") {
    for (const element of todoList) {
      console.log("element :>> ", element);
    }
    console.log(todoList);
  } else if (input === "CLEAR") {
    todoList = null;
    alert("ALl task is deleted!");
  }
  if (input == "EXIT") {
    console.log("App closed");
    break;
  }
}
