import { TodoItem } from "./TodoItem";

export function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <div>
      {todos.length === 0 && "No Todos"}
      {todos.map((todo) => {
        //generar dynamiskt HTML-innehåll för varje ellement i arrayen 'todos'.
        return (
          <TodoItem
            {...todo} //ersätter koden nedan.
            /*  id={todo.id}
            completed={todo.completed}
            title={todo.title} */
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </div>
  );
}
