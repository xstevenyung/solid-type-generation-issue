import { Component, createSignal } from "solid-js";
import { For } from "solid-js/web";

const App: Component = () => {
  const [numbers] = createSignal([1, 2, 3, 4, 5, 6, 7]);

  return (
    <ul>
      <For each={numbers()}>
        {(number) => {
          return <li>{number}</li>;
        }}
      </For>
    </ul>
  );
};

export default App;
