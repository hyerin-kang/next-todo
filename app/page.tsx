import TodoList from "@/components/todo/TodoList";

const HomePage = async () => {
  return (
    <div>
      HOMEPAGE
      <div className="container mx-auto">
        <TodoList />
      </div>
    </div>
  );
};

export default HomePage;
