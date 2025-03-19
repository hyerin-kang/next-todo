"use client";

import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useTodoMutation } from "@/query/useTodoMutation";

const TodoForm = () => {
  const { mutateAsync: createTodo } = useTodoMutation();
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
    <form
      onSubmit={onSubmit}
      className="flex w-full items-center space-x-2 bg-gray-200 p-4 rounded-md"
    >
      <Input
        className="bg-white"
        type="text"
        name="todo-text"
        placeholder="할일 입력"
        required
      />
      <Button type="submit">추가</Button>
    </form>
  );
};

export default TodoForm;
