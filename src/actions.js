import { todos, projects, pushToLocalStorage, setTodos } from "./storage";

let todosArray = todos;

function removeTodo(todo) {
  let index = todos.findIndex(
    (x) =>
      x.title === todo.children[1].innerText &&
      x.description === todo.children[2].innerText
  );
  todos.splice(index, 1);
  pushToLocalStorage();
}
function removeProject(project) {
  let index = projects.findIndex(
    (x) =>
      x.title === project.children[1].innerText &&
      x.description === project.children[2].innerText
  );
  projects.splice(index, 1);
  pushToLocalStorage();
}
function checkTodo(todo) {
  let index = todos.findIndex(
    (x) =>
      x.title === todo.children[1].innerText &&
      x.description === todo.children[2].innerText
  );
  if (todos[index].done === true) {
    todos[index].done = false;
  } else {
    todos[index].done = true;
  }
  pushToLocalStorage();
}
function deleteIncludedTodos(project) {
  let projectToDelete = parseInt(project);
  let newArray = todosArray.filter(function (todo) {
    ///Necesito que el array de todos se convierta en este array.
    return todo.projectId !== projectToDelete;
  });
  setTodos(newArray);
  pushToLocalStorage();
}
function editTodo(todo) {
  let index = todos.findIndex(
    (x) =>
      x.title === todo.children[1].innerText &&
      x.description === todo.children[2].innerText
  );
  todos[index].description = prompt(
    "Edit the description",
    todos[index].description
  );
  todos[index].dueDate = prompt("Edit the due date", todos[index].dueDate);
  todos[index].priority = parseInt(
    prompt("Edit the priority", todos[index].priority)
  );
  pushToLocalStorage();
}

export { removeTodo, checkTodo, removeProject, deleteIncludedTodos, editTodo };
