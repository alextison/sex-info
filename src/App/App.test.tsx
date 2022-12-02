import { render } from "@testing-library/react";
import React from "react";
import App from "./App";

describe("Sex Info App", () => {
  it("should render title", () => {
    const renderApp = render(<App />);
    expect(renderApp).toBeInstanceOf(App);
  });
});
