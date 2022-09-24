/** @jsx h */
import { h } from "preact";
import { PageProps, Handlers } from "$fresh/server.ts";
import Layout from "../../components/layout.tsx"

export const handler: Handlers = {
  async GET(req, ctx) {
    console.log('GET Working')
    const users = [
      {name: 'John'},
      {name: 'Joe'},
      {name: 'Jan'},
    ]
    const resp = await ctx.render(users);
    return resp;
  }
};

export default function UserPage(page: PageProps) {
  console.log(page)
  const id = page.params.id
  const data = page.data[id] ? page.data[id].name : 'No Data'
  return (
    <Layout>
      <h1>USER</h1>
      <p>This is the user page.</p>
      <p>Your ID is [ {id} ]</p>
      <p>Your Name is [ {data} ]</p>
    </Layout>
  );
}
