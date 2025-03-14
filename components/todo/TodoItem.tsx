"use client";
import { deleteTodo, toggleTodo } from "@/api/todo-api";
import { Todo } from "@/types/todo.type";
import Link from "next/link";

interface TodoItemProps {
  todo: Todo;
}
const TodoItem = ({ todo }: TodoItemProps) => {
  const { completed, id, text } = todo;
  return (
    <div>
      <Link href={`/${id}`}>
        <h2>{text}</h2>
      </Link>
      <p>{completed ? "완료" : "미완료"}</p>
      <div>
        <button
          onClick={() => {
            toggleTodo(id, !completed);
          }}
        >
          {completed ? "취소" : "완료"}
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
