import { Todo } from "@/types/todo.type";

export const getTodos = async () => {
  const response = await fetch("http://localhost:4000/todos");
  const data: Todo[] = await response.json();
  return data;
};
