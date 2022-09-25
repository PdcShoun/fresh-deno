/** @jsx h */
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import Layout from "../../components/layout.tsx"

interface User {
  login: string;
  name: string;
  avatar_url: string;
  html_url: string;
}

export const handler: Handlers<User | null> = {
  async GET(req, ctx) {
    const { username } = ctx.params;
    const resp = await fetch(`https://api.github.com/users/${username}`);
    if (resp.status === 404) {
      return ctx.render(null);
    }
    const user: User = await resp.json();
    return ctx.render(user);
  },
};

export default function GithubProfile({ data }: PageProps<User | null>) {
  console.log(data)
  if (!data) {
    return (
      <Layout>
        <h1>User not found</h1>
      </Layout>
    )
  }

  return (
    <Layout>
      <img src={data.avatar_url} width={150} height={150} />
      <h1>{data.name}</h1>
      <p>{data.login}</p>
      <a href={data.html_url}>Link to GitHub</a>
    </Layout>
  );
}
