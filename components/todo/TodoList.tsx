"use client";

import { useTodoFilterStore } from "@/store/useTodoFilterStore";
import TodoItem from "./TodoItem";
import { useTodosQuery } from "@/query/useTodoQuery";

const TodoList = () => {
  const { filter } = useTodoFilterStore();
  const { data: todos } = useTodosQuery(filter);

  if (!todos) return <div>로딩중...</div>;
  return (
    <ul className="space-y-2">
      {todos.map((todo) => (
        <li key={todo.id}>
          <TodoItem todo={todo} />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
