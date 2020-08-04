let todos = [
  {
    title: "Water the plants",
    description: "Water all of the plants in the house",
    dueDate: "Tue Oct 20 2020",
    priority: 1,
    done: true,
    projectId: 0,
  },
  {
    title: "Clean the kitchen",
    description: "Remember to clean under it.",
    dueDate: "Tue Oct 20 2020",
    priority: 2,
    done: false,
    projectId: 0,
  },
  {
    title: "Clean the oven",
    description: "Remember the door too.",
    dueDate: "Tue Oct 20 2020",
    priority: 3,
    done: false,
    projectId: 0,
  },
];
let projects = [
  {
    title: "House Tasks",
    description: "Just a sample project.",
    id: 0,
  },
];

function pushToLocalStorage() {
  localStorage.setItem("todos", JSON.stringify(todos));
  localStorage.setItem("projects", JSON.stringify(projects));
}
function pullFromLocalStorage() {
  todos = JSON.parse(localStorage.getItem("todos"));
  projects = JSON.parse(localStorage.getItem("projects"));
}
function setTodos(newArray) {
  todos = newArray;
}

export { todos, projects, pushToLocalStorage, pullFromLocalStorage, setTodos };
