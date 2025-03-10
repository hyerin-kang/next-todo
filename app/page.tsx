import { getTodos } from "@/api/todo-api";
import Link from "next/link";

const HomePage = async () => {
  const todos = await getTodos();
  return (
    <div>
      HOMEPAGE
      <br /> <Link href="/detail">Detail Page</Link>
      <ul>
        {todos.map(({ id, text, completed }) => (
          <li key={id}>
            <p>
              {text} {completed ? "(completed)" : "(pending)"}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
