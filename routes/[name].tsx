import { PageProps } from "$fresh/server.ts";
import Layout from "../components/layout.tsx";


export default function Greet(props: PageProps) {
  const text = "This is "
  console.log(props)
  const {name} = props.params
  const pageName = text + name
  const hello = <p>Hello {pageName}</p>
  return (
    <Layout>
      <div>
        <h1>Greet</h1>
        { hello }
      </div>
    </Layout>
  )
}
