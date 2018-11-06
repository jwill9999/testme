import * as React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import App from "../App/App";

const wrapper = mount(
  <Provider>
    <App />
  </Provider>
);

describe("App component", () => {
  it("renders without crashing", () => {
    expect(wrapper).toEqual("Page component");
  });
});
