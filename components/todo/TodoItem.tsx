"use client";
import { Todo } from "@/types/todo.type";
import Link from "next/link";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import TodoDeleteBtn from "./TodoDeleteBtn";
import { useToggleTodo } from "@/query/useTodoMutation";

interface TodoItemProps {
  todo: Todo;
}
const TodoItem = ({ todo }: TodoItemProps) => {
  const { mutate: toggleTodoCompleted } = useToggleTodo();
  const { completed, id, text } = todo;

  return (
    <article className="flex flex-row items-center justify-between p-4 rounded-md border">
      <Link
        href={`/${id}`}
        className={cn("hover:underline", {
          "line-through": completed,
        })}
      >
        <h2>{text}</h2>
      </Link>
      <div className="space-x-2 flex">
        <Button
          variant="outline"
          onClick={() => toggleTodoCompleted({ id, completed: !completed })}
        >
          {completed ? "취소" : "완료"}
        </Button>

        <TodoDeleteBtn id={id} />
      </div>
    </article>
  );
};

export default TodoItem;
