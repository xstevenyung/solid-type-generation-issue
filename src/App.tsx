import { Component, createSignal } from "solid-js";
import { For } from "solid-js/web";

const App: Component = () => {
  const [numbers] = createSignal([1, 2, 3, 4, 5, 6, 7]);

  return (
    <ul>
      {/* This throw an error */}
      <For each={numbers()}>
        {(number) => {
          return <li>{number}</li>;
        }}
      </For>

      {/* This doesn't */}
      <For
        each={numbers()}
        children={(number) => {
          return <li>{number}</li>;
        }}
      />
    </ul>
  );
};

export default App;
