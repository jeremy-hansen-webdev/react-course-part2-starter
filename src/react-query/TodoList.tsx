import { getData } from './hooks/useGetData';

function TodoList() {
  const { data: todos, error, isLoading } = getData.fetchTodos();

  if (error) return <p>{error.message}</p>;

  if (isLoading) return <p>Loading...</p>;

  return (
    <ul className="list-group">
      {todos?.map((todo) => (
        <li key={todo.id} className="list-group-item">
          {todo.title}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
