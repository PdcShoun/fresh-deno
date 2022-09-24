/** @jsx h */
import { h } from "preact";
import { PageProps, Handlers } from "$fresh/server.ts";
import Layout from "../components/layout.tsx";

export const handler: Handlers = {
  async GET(req, ctx) {
    const resp = await ctx.render();
    resp.headers.set("X-Custom-Header", "Hello");
    return resp;
  },
};

export default function Greet(props: PageProps) {
  const text = "This is "
  console.log(props)
  const {name} = props.params
  const pageName = text + name
  return (
    <Layout>
      <div>
        <h1>Greet</h1>
        <p>
          Hello {pageName}
        </p>
      </div>
    </Layout>
  )
}
