import { useState } from "react";
export function TodoForm({ addTodo }) {
  const [userInput, setUserInput] = useState("");

  function handleSubmit(e) {
    //hindrar sidan från att refreshas när man trycker på submit/add
    e.preventDefault();
    //om input är tom koden efter return körs ej.
    if (userInput === "") return;

    addTodo(userInput);

    //Efter att uppgiften har lagts till nollställs värdet av variabeln userInput
    setUserInput("");
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <label>Todo List</label>
      <input
        value={userInput} // sätter värdet av input till vädet av variabeln 'userInput'
        //är en händelsehanterare, aktiveras varje gång användaren ändrar innehållet i input. När användaren skriver eller ändrar något i fältet, kommer onChange att kallas och den medföljande funktionen kommer att köras. e är händelseobjektet, och e.target.value representerar det nya värdet som användaren just har matat in. Den nya inmatningen används för att uppdatera värdet av userInput med hjälp av setUserInput-funktionen.
        onChange={(e) => setUserInput(e.target.value)}
        type="text"
        id="item"
      />
      <button type="submit" className="btn">
        Add
      </button>
    </form>
  );
}
