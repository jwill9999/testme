// @flow

import * as React from "react";

function Page() {
  return <h1>Page component</h1>;
}

function add(a: number, b: number) {
  return a + b;
}

add("1", "2");

export default Page;
