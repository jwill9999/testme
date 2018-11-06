import React from "react";
import { shallow } from "enzyme";
import Page from "../components/Page";

const wrapper = shallow(<Page />);

describe("Page component", () => {
  it("renders without crashing", () => {
    expect(wrapper.text()).toEqual("Page component");
  });
});
