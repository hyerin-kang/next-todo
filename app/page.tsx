import { getTodos } from "@/api/todo-api";
import TodoForm from "@/components/todo/TodoForm";
import TodoList from "@/components/todo/TodoList";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

const HomePage = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div>
        <div className="container mx-auto space-y-4 ">
          <TodoForm />
          <TodoList />
        </div>
      </div>
    </HydrationBoundary>
  );
};

export default HomePage;
