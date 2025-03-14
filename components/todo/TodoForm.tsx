"use client";
import { createTodo } from "@/api/todo-api";
import React from "react";

const TodoForm = () => {
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const todoText = formData.get("todo-text") as string;
    await createTodo(todoText);
    if (todoText == "") {
      return alert("할일을 입력하세요");
    }
    form.reset();
  };
  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="todo-text" placeholder="할일 입력" required />
      <button type="submit">추가</button>
    </form>
  );
};

export default TodoForm;
