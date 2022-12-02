import { render, screen } from "@testing-library/react";
import React from "react";
import Quizz from "./Quizz";

describe("Form Page", () => {
  it("should render QUizz component", () => {
    render(<Quizz />);
    const title = screen.getByText("QUizz");
    expect(title).toBeInTheDocument();
  });
});
