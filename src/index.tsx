/* @refresh reload */
import "solid-devtools";
import "./index.css";

import { render } from "solid-js/web";

import App from "./app";
import { Route, Router } from "@solidjs/router";
import LandingPage from "./pages/landing";
import NotFound from "./errors/404";

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?",
  );
}

render(
  () => (
    <Router root={App}>
      <Route path="/" component={LandingPage} />
      <Route path="**" component={NotFound} />
    </Router>
  ),
  root!,
);
