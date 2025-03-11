import { Todo } from "@/types/todo.type";

const SSGPage = async () => {
  const response = await fetch("http://localhost:4000/todos", {
    cache: "force-cache",
  });
  const data: Todo[] = await response.json();
  return (
    <div>
      SSGPage
      <div>{JSON.stringify(data)}</div>
    </div>
  );
};

export default SSGPage;
