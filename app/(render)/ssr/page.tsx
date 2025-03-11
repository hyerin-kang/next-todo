import { Todo } from "@/types/todo.type";
import React from "react";

const SSRPage = async () => {
  const response = await fetch("http://localhost:4000/todos");
  const data: Todo[] = await response.json();

  return (
    <div>
      SSRPage
      <div>{JSON.stringify(data)}</div>
    </div>
  );
};

export default SSRPage;
