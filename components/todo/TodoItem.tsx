"use client";
import { deleteTodo, toggleTodo } from "@/api/todo-api";
import { Todo } from "@/types/todo.type";

interface TodoItemProps {
  todo: Todo;
}
const TodoItem = ({ todo }: TodoItemProps) => {
  const { completed, id, text } = todo;
  return (
    <div>
      <h2>{text}</h2>
      <p>{completed ? "완료" : "미완료"}</p>
      <div>
        <button
          onClick={() => {
            toggleTodo(id, !completed);
          }}
        >
          완료
        </button>
        <button
          onClick={() => {
            deleteTodo(id);
          }}
        >
          삭제
        </button>
      </div>
      --------------------------
    </div>
  );
};

export default TodoItem;
