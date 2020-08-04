import { todos, projects } from "./storage";

//Create Elements
const gridContainer = document.createElement("div");
const topBar = document.createElement("div");
const mainTitle = document.createElement("h1");
const projectsContainer = document.createElement("div");
const todosContainer = document.createElement("div");
const addTodo = document.createElement("button");
const addProject = document.createElement("button");

//Add Classes
gridContainer.classList.add("grid-container");
topBar.classList.add("top-bar");
mainTitle.classList.add("main-title");
projectsContainer.classList.add("projects-container");
todosContainer.classList.add("todos-container");
addTodo.classList.add("big-button", "addTodo-button");
addProject.classList.add("big-button", "addProject-button");

//Inner HTML
mainTitle.innerHTML = "FViccia's To Do List";
addTodo.innerHTML = '<i class="fas fa-plus square"></i>';
addProject.innerHTML = '<i class="fas fa-plus square"></i>';

function mainLayout() {
  document.body.appendChild(gridContainer);
  gridContainer.appendChild(topBar);
  gridContainer.appendChild(projectsContainer);
  gridContainer.appendChild(todosContainer);
  topBar.appendChild(addTodo);
  topBar.appendChild(addProject);
  topBar.appendChild(mainTitle);
}

function renderTodos(project) {
  todosContainer.innerHTML = "";
  for (let i = 0; i < todos.length; i++) {
    //Render only current project todos.
    if (todos[i].projectId === project) {
      //Create Todo Div
      const todo = document.createElement("div");
      todo.classList.add("todo-div");
      //Create an array of the values of the Todo.
      let properties = Object.values(todos[i]);
      //Add title.
      let title = document.createElement("div");
      title.classList.add("todo-title");
      title.innerHTML = "To Do:";
      todo.appendChild(title);
      //Loop trough properties of each Todo and append them.
      for (let i = 0; i + 2 < properties.length; i++) {
        // i+2 Excludes the last two properties.
        let property = document.createElement("div");
        property.classList.add("todo-property");
        property.innerHTML = properties[i];
        switch (properties[3]) {
          case 1:
            todo.classList.add("priority-one");
            break;
          case 2:
            todo.classList.add("priority-two");
            break;
          case 3:
            todo.classList.add("priority-three");
            break;
          default:
            todo.classList.add("priority-three");
        }
        // Add Class if it is completed.
        if (properties[4] === true) {
          todo.classList.add("completed");
        }
        todo.appendChild(property);
      }
      //Check Mark Button
      const completedButton = document.createElement("button");
      completedButton.innerHTML = '<i class="fas fa-check"></i>';
      completedButton.classList.add("complete-btn");
      todo.appendChild(completedButton);
      //Trash Button
      const trashButton = document.createElement("button");
      trashButton.innerHTML = '<i class="fas fa-trash"></i>';
      trashButton.classList.add("trash-btn");
      todo.appendChild(trashButton);
      //Select Button
      const editButton = document.createElement("button");
      editButton.innerHTML = "Edit";
      editButton.classList.add("todo-edit-btn");
      todo.appendChild(editButton);
      todosContainer.appendChild(todo);
    }
  }
}
function renderProjects() {
  projectsContainer.innerHTML = "";
  for (let i = 0; i < projects.length; i++) {
    //Create Project Div
    const project = document.createElement("div");
    project.classList.add("project-div");
    //Create an array of the values of the Todo.
    let properties = Object.values(projects[i]);
    //Add title.
    let title = document.createElement("div");
    title.classList.add("project-title");
    title.innerHTML = "Project:";
    project.appendChild(title);
    //Loop trough properties of each Todo and append them.
    for (let i = 0; i < properties.length; i++) {
      let property = document.createElement("div");
      property.classList.add("project-property");
      property.innerHTML = properties[i];
      project.appendChild(property);
    }
    //Trash Button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("project-trash-btn");
    project.appendChild(trashButton);
    //Select Button
    const selectButton = document.createElement("button");
    selectButton.innerHTML = "Select";
    selectButton.classList.add("project-select-btn");
    project.appendChild(selectButton);

    projectsContainer.appendChild(project);
  }
}

export { mainLayout, renderTodos, renderProjects };
