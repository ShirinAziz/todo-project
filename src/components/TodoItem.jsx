export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
  return (
    <div className="mytodos">
      <label>
        <input
          type="checkbox"
          //checked={todo.completed}: sätter värdet för checkboxen baserat på completed-egenskapen hos todo-objektet. Om completed är true, kommer checkboxen vara markerad (checked), annars kommer den vara omarkerad.
          checked={completed}
          /*onChange={(e) => toggleTodo(todo.id, e.target.checked)}: anger en funktion som ska köras när användaren ändrar statusen för checkboxen. I detta fall kommer funktionen toggleTodo att anropas med två argument: todo.id och e.target.checked.
                todo.id: Detta är identifieraren för den specifika uppgiften (todo) som checkboxen är kopplad till.
                e.target.checked: Detta är det nya tillståndet för checkboxen efter användarens ändring. Om checkboxen är markerad kommer detta vara true, annars false.*/
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        {title}
      </label>
      <button onClick={() => deleteTodo(id)} className="btndelete">
        Delete
      </button>
    </div>
  );
}
