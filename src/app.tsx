import { Suspense, type Component } from "solid-js";
import { RouteSectionProps } from "@solidjs/router";

const App: Component<RouteSectionProps> = (props) => {
  return (
    <>
      <main>
        <Suspense>{props.children}</Suspense>
      </main>
      <footer>
        <h1>Wow...</h1>
      </footer>
    </>
  );
};

export default App;
