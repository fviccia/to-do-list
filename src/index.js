import { addDays } from "date-fns";
import { mainLayout, renderTodos, renderProjects } from "./render";
import {
  todos,
  projects,
  pullFromLocalStorage,
  pushToLocalStorage,
} from "./storage";
import {
  removeTodo,
  checkTodo,
  removeProject,
  deleteIncludedTodos,
  editTodo,
} from "./actions";

// Global Variables
let currentProject = 0;

//Local Storage Check
if (localStorage.length !== 0) {
  pullFromLocalStorage();
}

//Main execution

mainLayout();
renderTodos(currentProject);
renderProjects();

// Selectors

const newTodo = document.querySelector(".addTodo-button");
const newProject = document.querySelector(".addProject-button");
const todosContainer = document.querySelector(".todos-container");
const projectsContainer = document.querySelector(".projects-container");

// Events Listeners

newTodo.addEventListener("click", addTodo);
newProject.addEventListener("click", addProject);
todosContainer.addEventListener("click", deleteCheck);
projectsContainer.addEventListener("click", deleteSelectProject);

// Classes

class Todo {
  constructor(title, description, dueDate, priority, projectId) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.done = false;
    this.projectId = projectId;
  }
}
class Project {
  constructor(title, description) {
    this.title = title;
    this.description = description;
    this.id = projects.length;
  }
}

// Functions

function addTodo() {
  let title = "";
  while (title === "") {
    title = prompt("New Todo title");
    if (title === null) {
      return; // Break if cancel is pressed.
    }
  }
  const description = prompt("New Todo description");
  let dueDate = new Date(prompt("Enter Due Date (yyyy-mm-dd)"));
  dueDate = addDays(dueDate, 1);
  let priority = prompt("New Todo priority 1-High 2-Medium 3-Low");
  if (priority === null || priority === "") {
    priority = 3;
  }
  priority = parseInt(priority);
  let todo = new Todo(
    title,
    description,
    dueDate.toDateString(),
    priority,
    currentProject
  );
  todos.push(todo);
  renderTodos(currentProject);
  pushToLocalStorage();
}
function addProject() {
  let title = "";
  while (title === "") {
    title = prompt("New Todo title");
    if (title === null) {
      return; // Break if cancel is pressed.
    }
  }
  const description = prompt("New Project description");
  let project = new Project(title, description);
  projects.push(project);
  renderProjects();
  pushToLocalStorage();
}
function deleteCheck(e) {
  const item = e.target;
  //Delete Todo
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    removeTodo(todo);
    todo.remove(); //Remove from DOM
  }
  //Check Todo
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    checkTodo(todo);
    todo.classList.toggle("completed");
  }
  //Edit Todo
  if (item.classList[0] === "todo-edit-btn") {
    const todo = item.parentElement;
    editTodo(todo);
    renderTodos(currentProject);
  }
}
function deleteSelectProject(e) {
  const item = e.target;
  if (item.classList[0] === "project-trash-btn") {
    let id = e.target.parentElement.children[3].innerText;
    const project = item.parentElement;
    deleteIncludedTodos(id);
    removeProject(project);
    project.remove(); //Remove from DOM
    currentProject = 0;
    renderTodos(currentProject);
  }
  //Select Project
  if (item.classList[0] === "project-select-btn") {
    currentProject = parseInt(e.target.parentElement.children[3].innerText);
    renderTodos(currentProject);
  }
}
