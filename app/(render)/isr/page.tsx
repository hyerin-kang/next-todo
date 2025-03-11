import { Todo } from "@/types/todo.type";
const ONE_MINUTE_SECONDS = 60;

const ISRPage = async () => {
  const response = await fetch("http://localhost:4000/todos", {
    next: { revalidate: ONE_MINUTE_SECONDS },
  });
  const data: Todo[] = await response.json();
  return (
    <div>
      ISRPage
      <div>{JSON.stringify(data)}</div>
    </div>
  );
};

export default ISRPage;
