import TodoForm from "@/components/todo/TodoForm";
import TodoList from "@/components/todo/TodoList";

const HomePage = async () => {
  return (
    <div>
      HOMEPAGE
      <div className="container mx-auto w-fit">
        <TodoForm />
        <TodoList />
      </div>
    </div>
  );
};

export default HomePage;
