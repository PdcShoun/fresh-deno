import Header from "../components/Header.tsx"


export default function AboutPage(prop) {
  console.log('From About')
  console.log(prop)
  return (
    <div>
      <Header/>
      <section class="max-w-screen-md mx-auto my-16 px(4 sm:6 md:8) space-y-4">
        <h1>About</h1>
        <p>This is the about page.</p>
      </section>
    </div>
  );
}
