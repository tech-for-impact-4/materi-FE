import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import CounterProvider from "./context/CounterProvider.jsx";
import TodoProvider from "./context/TodoProvider.jsx";
import TodoReducerProvider from "./context/TodoReducerProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>

  <TodoReducerProvider>
    <TodoProvider>
      <CounterProvider>
        <App />
      </CounterProvider>
    </TodoProvider>
  </TodoReducerProvider>

  // </React.StrictMode>
);
