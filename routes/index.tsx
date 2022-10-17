import Counter from "../islands/Counter.tsx";
import Layout from "../components/layout.tsx";
import Header from "../components/Header.tsx"

export default function Home() {
  return (
    <div>
      <Header/>
      <div class="p-4 mx-auto">
        <img
          src="/logo.svg"
          class="w-32 h-32 mx-auto"
          alt="the fresh logo: a sliced lemon dripping with juice"
        />
        <h1>
          Home
        </h1>
        <p>
          Welcome to `fresh`. Try updating this message in the ./routes/index.tsx
          file, and refresh.
        </p>

        <Counter start={3} />
      </div>
    </div>
  );
}
