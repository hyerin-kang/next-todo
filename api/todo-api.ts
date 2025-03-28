import { FilterType } from "@/store/useTodoFilterStore";
import { Todo } from "@/types/todo.type";
const BASE_URL = "http://localhost:4000/todos";
export const getTodos = async (filter?: FilterType) => {
  const url = new URL(BASE_URL);
  if (filter === "completed") {
    url.searchParams.set("completed", "true");
  }
  const response = await fetch(url.toString(), { next: { tags: ["todos"] } });
  const data: Todo[] = await response.json();
  return data;
};

export const createTodo = async (text: Todo["text"]) => {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text, completed: false }),
  });
  const data: Todo = await response.json();

  return data;
};

export const deleteTodo = async (id: Todo["id"]) => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
  const data: Todo = await response.json();

  return data;
};

export const toggleTodo = async (
  id: Todo["id"],
  completed: Todo["completed"]
) => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ completed }),
  });
  const data: Todo = await response.json();

  return data;
};
export const getTodoItem = async (id: Todo["id"]) => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    next: { tags: ["todos", id] },
  });
  const data: Todo = await response.json();
  return data;
};
