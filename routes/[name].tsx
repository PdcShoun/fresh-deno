/** @jsx h */
import { h } from "preact";
import { PageProps } from "$fresh/server.ts";

export default function Greet(props: PageProps) {
  const testParam = props.params.name + "Params"
  console.log(typeof props.params.name)
  return <div>Hello {testParam}</div>;
}
