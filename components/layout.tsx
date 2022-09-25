/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

export default function layout({children}: any) {
  return (
    <div>
      <nav class={tw`w-full px-4 py-3 bg-yellow-800 text-white mb-10`}>
        <a class={tw`mx-4`} href="/">Home</a>
        <a class={tw`mx-4`} href="/about">About</a>
        <a class={tw`mx-4`} href="/greet">DynamicRoute</a>
        <a class={tw`mx-4`} href="/user/0">CustomHandlers</a>
        <a class={tw`mx-4`} href="/git/PdcShoun">FetchingData</a>
      </nav>
      {children}
    </div>
  )
}
