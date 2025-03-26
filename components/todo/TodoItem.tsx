"use client";
import { Todo } from "@/types/todo.type";
import Link from "next/link";
import { cn } from "@/lib/utils";
import TodoDeleteBtn from "./TodoDeleteBtn";
import { useToggleTodo } from "@/query/useTodoMutation";
import { useId } from "react";
import { Checkbox } from "../ui/checkbox";
import { CheckedState } from "@radix-ui/react-checkbox";

interface TodoItemProps {
  todo: Todo;
}
const TodoItem = ({ todo }: TodoItemProps) => {
  const { mutate: toggleTodoCompleted } = useToggleTodo();
  const { completed, id, text } = todo;
  const checkboxId = useId();

  const onCheckedChange = (checked: CheckedState) => {
    if (checked == "indeterminate") return;
    toggleTodoCompleted({ id, completed: checked });
  };
  return (
    <article className="flex flex-row items-center justify-between p-4 rounded-md border">
      <div className="space-x-4 flex flex-row items-center">
        <Checkbox
          id={checkboxId}
          checked={completed}
          onCheckedChange={onCheckedChange}
        />
        <Link
          href={`/${id}`}
          className={cn("hover:underline", {
            "line-through": completed,
          })}
        >
          <h2>{text}</h2>
        </Link>
      </div>

      <div className="space-x-2 flex">
        <TodoDeleteBtn id={id} />
      </div>
    </article>
  );
};

export default TodoItem;
