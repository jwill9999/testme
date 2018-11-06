import * as React from "react";
import { mount } from "enzyme";

import Root from "../RootProvider";
import App from "../App/App";

const wrapper = mount(
  <Root>
    <App />
  </Root>
);

describe("App component", () => {
  it("renders without crashing", () => {
    expect(wrapper.find(App).length).toEqual(1);
  });
});
