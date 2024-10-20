import { useState } from "react";
import "./HookArray.css";

const useArray = (valorInicial = []) => {
  const [array, setArray] = useState(valorInicial);
  const add = (item) => setArray([...array, item]);

  const removeById = (id) => {
    const newArray = array.filter((item) => item.id !== id);
    setArray(newArray);
  };

  const clear = () => setArray([]);

  return [array, { add, removeById, clear }];
};

const HookArray = () => {
  const [todos, todoActions] = useArray([]);
  const [contador, setContador] = useState(0);

  const incrementar = () => {
    todoActions.add({ id: contador, text: "Comprar Leches :)" });
    setContador(contador + 1);
  };

  const limpiar = () => {
    todoActions.clear();
    setContador(0);
  };

  return (
    <div className="hook-array-container">
      <div className="buttons-container">
        <button className="add-btn" onClick={incrementar}>
          Add
        </button>
        <button className="clear-btn" onClick={limpiar}>
          Clear
        </button>
      </div>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            <span className="todo-id">ID: {todo.id}</span>
            <span className="todo-text">{todo.text}</span>
            <button
              className="remove-btn"
              onClick={() => todoActions.removeById(todo.id)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HookArray;
