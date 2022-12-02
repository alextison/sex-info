import { render, screen } from "@testing-library/react";
import React from "react";
import Documentation from "./Documentation";

describe("Documentation Page", () => {
  it("should render Documentation component", () => {
    render(<Documentation />);
    const title = screen.getByText("Documentation");
    expect(title).toBeInTheDocument();
  });
});
