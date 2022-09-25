/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Counter from "../islands/Counter.tsx";
import Layout from "../components/layout.tsx";

export default function Home() {
  return (
    <Layout>
      <div class={tw`p-4 mx-auto max-wscreen-md`}>
        <h1>
          Home
        </h1>
        <p>
          Welcome to `fresh`. Try updating this message in the ./routes/index.tsx
          file, and refresh.
        </p>
        <Counter start={3} />
      </div>
    </Layout>
  );
}
