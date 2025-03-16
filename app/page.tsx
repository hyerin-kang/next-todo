import TodoForm from "@/components/todo/TodoForm";
import TodoList from "@/components/todo/TodoList";

const HomePage = async () => {
  return (
    <div>
      <div className="container mx-auto ">
        <TodoForm />
        <TodoList />
      </div>
    </div>
  );
};

export default HomePage;
