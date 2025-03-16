import Link from "next/link";

const TodoHeader = () => {
  return (
    <header className="mb-4 border-b-2">
      <div className="container mx-auto p-2 flex flex-row">
        <Link href="/">
          {" "}
          <h1 className="text-4xl font-bold">TodoList</h1>
        </Link>
      </div>
    </header>
  );
};

export default TodoHeader;
