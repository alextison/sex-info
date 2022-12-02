import { render, screen } from "@testing-library/react";
import React from "react";
import Home from "./Home";

describe("Sex Info App", () => {
  it("should render title", () => {
    render(<Home />);
    const title = screen.getByText("SexInfo");
    expect(title).toBeInTheDocument();
  });
});
