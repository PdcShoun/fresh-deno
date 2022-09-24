/** @jsx h */
import { h } from "preact";
import { PageProps } from "$fresh/server.ts";
import Layout from "../../components/layout.tsx";

export default function GreetPage(props: PageProps) {
  console.log(props)
  const { name } = props.params;
  const lastName = 'O-Cha'
  const fulltName = props.params.name + ' ' + lastName;
  const route = props.route
  return (
    <Layout>
      <h1>Dynamic Route</h1>
      <p>Greetings to you, {name}!</p>
      <p>Your full name is {fulltName}</p>
      <p>The Route is {route}</p>
    </Layout>
  );
}
