/** @jsx h */
import { h } from "preact"
import { Handlers } from "$fresh/server.ts";
import Layout from "../components/layout.tsx";

export const handler: Handlers = {
  async GET(req, ctx) {
    const resp = await ctx.render();
    resp.headers.set("X-Custom-Header", "Hello");
    return resp;
  },
};

export default function AboutPage() {
  return (
    <Layout>
      <h1>About</h1>
      <p>This is the about page.</p>
    </Layout>
  );
}
