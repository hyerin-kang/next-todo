"use client";
import { Todo } from "@/types/todo.type";
import { useEffect, useState } from "react";

const CSRPage = () => {
  const [data, setData] = useState<Todo[]>([]);
  useEffect(() => {
    const getData = async () => {
      const response = await fetch("http://localhost:4000/todos");
      const data: Todo[] = await response.json();
      setData(data);
    };
    getData();
  }, []);
  return (
    <div>
      <h1>CSRPage</h1>
      {JSON.stringify(data)}
    </div>
  );
};

export default CSRPage;
