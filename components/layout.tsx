/** @jsx h */
import { h } from "preact";

export default function layout({children}: any) {
  return (
    <div>
      <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/greet">DynamicRoute</a>
        <a href="/user/0">CustomHandlers</a>
        <a href="/git/PdcShoun">FetchingData</a>
      </nav>
      {children}
    </div>
  )
}
