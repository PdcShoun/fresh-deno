/** @jsx h */
import { h } from "preact";
import Counter from "../islands/Counter.tsx";
import Layout from "../components/layout.tsx";

export default function Home() {
  return (
    <Layout>
      <h1>
        Home
      </h1>
      <p>
        Welcome to `fresh`. Try updating this message in the ./routes/index.tsx
        file, and refresh.
      </p>
      <Counter start={3} />
    </Layout>
  );
}
