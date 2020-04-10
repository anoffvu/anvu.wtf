import { Fragment } from "react";

export default function Home() {
  return (
  <Fragment>
    <a href='/'><h1>beans</h1></a>
    <a href='/music'><h1>beats</h1></a>
    <a href='/blog'><h1>blog</h1></a>
    <h1>three beans</h1>
      <ul>
        <a href='/three-1'><li><h1>1</h1></li></a>
      </ul>
  </Fragment>
  )
};