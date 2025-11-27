import type { Route } from "./+types/about";
import { Link } from "react-router";

export default function About(props: Route.ComponentProps) {
  return (
    <div style={{ padding: "2rem", fontFamily: "system-ui" }}>
      <h1>About</h1>
      <p>This is the about page.</p>
      <nav style={{ marginTop: "2rem" }}>
        <Link to="/">Home</Link>
      </nav>
    </div>
  );
}

