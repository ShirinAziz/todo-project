import { useEffect, useState } from "react";
import "./App.css";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";

export default function App() {
  //Att använda "state" i React handlar om att tillåta komponenter att komma ihåg saker. Det är som en korttidsminne för varje del av webbapplikationen. När saker ändras, som när någon klickar på en knapp eller skriver något, hjälper "state" komponenter att uppdatera sig själva och visa den senaste informationen. Det gör webbapplikationen interaktiv och responsiv, eftersom den kan anpassa sig till vad användarna gör.
  //setUserInput=(write) uppdaterar userInput=(read). För att uppdatera tidigare värde -> anrppa funktionen (setUserInput)
  const [todos, setTodos] = useState(() => {
    const localvalue = localStorage.getItem("ITEMS");
    if (localvalue == null) return [];

    return JSON.parse(localvalue);
  });

  //varje gång [todos] ändras anropas funktionen och sparas i localstorge
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]);

  function addTodo(title) {
    //uppdatera state-variabeln todos.
    setTodos((todos) => {
      //Här uppdateras todos-listan genom att returnera en ny array. Den nya arrayen innehåller alla befintliga uppgifter från todos (spread operator ...todos) och lägger till en ny uppgift i slutet av listan. Den nya uppgiften skapas med ett unikt id genererat av crypto.randomUUID(), titeln som hämtas från en variabel userInput och completed som är satt till false.
      return [...todos, { id: crypto.randomUUID(), title, completed: false }];
    });
  }

  function toggleTodo(id, completed) {
    setTodos((todos) => {
      //todos.map((todo) => skapa en ny array genom att iterera över varje element (todo) i den befintliga arrayen todos.
      return todos.map((todo) => {
        //kontrollerar om det aktuella todo-objektets id matchar det specifika id som passerats in som parameter.
        if (todo.id === id) {
          //Om id matchar, returneras en ny kopia av todo-objektet med uppdaterad completed-egenskap.
          return { ...todo, completed };
        }
        //Om id inte matchar, returneras det befintliga todo-objektet oförändrat.
        return todo;
      });
    });
  }

  function deleteTodo(id) {
    setTodos((todos) => {
      //skapar och returnerar en ny array av todos där uppgiften med det specifika id tas bort
      return todos.filter((todo) => todo.id !== id);
    });
  }

  return (
    <>
      <TodoForm addTodo={addTodo} />
      <h1 className="header">My List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  );
}
