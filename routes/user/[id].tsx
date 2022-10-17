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
  },
  async POST(req, ctx): Response {
    console.log('POST Working')
    const users = [
      {name: 'Zee'},
      {name: 'Zaa'},
      {name: 'Zoo'},
    ]
    const resp = await ctx.render(users);
    return new Response(JSON.stringify(users));
  },
};

export default function UserPage(page: PageProps) {
  // console.log(page)
  const id = page.params.id
  const data = page.data[id] ? page.data[id].name : 'No Data'
  const users = page.data
  return (
    <Layout>
      <div>
        <div>All user</div>
        { users.map( user => <p>{user.name}</p>)}
      </div>
      <h1>USER</h1>
      <p>This is the user page.</p>
      <p>Your ID is [ {id} ]</p>
      <p>Your Name is [ {data} ]</p>
    </Layout>
  );
}
