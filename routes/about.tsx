import Layout from "../components/layout.tsx";


export default function AboutPage() {
  console.log('From About')
  return (
    <Layout>
      <section class="max-w-screen-md mx-auto my-16 px(4 sm:6 md:8) space-y-4">
        <h1>About</h1>
        <p>This is the about page.</p>
        <a href="/" class="bg-blue-500 hover:bg-blue-600 rounded-md py-1 px-2 text-gray-100 transition-colors w-2/5 md:w-1/5 flex items-center justify-center">Link to GitHub</a>
      </section>
    </Layout>
  );
}
