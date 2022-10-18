import { Handlers, PageProps } from "$fresh/server.ts";
import Layout from "../../components/layout.tsx"
import Search from "../../components/Search.tsx"

interface User {
  login: string;
  name: string;
  avatar_url: string;
  html_url: string;
}

export const handler: Handlers<User | null> = {
  async GET(req, ctx) {
    console.log(req)
    const url = new URL(req.url)
    // const { username } = ctx.params;
    const query = url.searchParams.get('q')
    console.log(query)
    const resp = await fetch(`https://api.github.com/users/${query}`);
    if (resp.status === 404) {
      return ctx.render(null);
    }
    const user: User = await resp.json();
    return ctx.render(user);
  },
};

export default function GithubProfile({ params, data }: PageProps) {
  console.log(params)
  console.log(data)
  // const [user, setUser] = useState({})

  const stylePic = "mx-auto"
  const styleText = "text-center"

  return (
    <Layout>
      <section class="max-w-screen-md mx-auto my-16 px(4 sm:6 md:8) space-y-4">
        <Search/>

        <div>
          <img src={data.avatar_url} width={150} height={150} class={stylePic}/>
          <h1 class={styleText}>{data.name}</h1>
          <p class={styleText}>{data.login}</p>
          <a href={data.html_url} class="mx-auto bg-blue-400 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded">Link to GitHub</a>
        </div>
      </section>
    </Layout>
  );
}
