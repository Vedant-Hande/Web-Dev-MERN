const todo = [];

while (true) {
  let req = prompt("Enter your request...");
  if (req == "list") {
    console.log("-------------------------");
    for (const element of todo) {
      console.log(element);
    }
    console.log("------------------------");
  } else if (req == "add") {
    let task = prompt("Enter the task that You want to add...");
    todo.push(task);
    console.log(`task added sucessfully :>> ${task}`);
  } else if (req == "delete") {
    console.log(todo.shift());
  } else if (req == "quit") {
    console.log("Quitting the app :>> you enter  ", req);
    break;
  }
}
