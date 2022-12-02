import React from "react";
import { render, screen } from "@testing-library/react";
import Title from "./Title";

describe("Title", () => {
  it("should render title", () => {
    render(<Title text={"SexInfo"} />);
    const title = screen.getByText("SexInfo");
    expect(title).toBeInTheDocument();
  });
});
