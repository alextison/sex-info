import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Sex Info App", () => {
  it("should render title", () => {
    render(<App />);
    const title = screen.getByText("SexInfo");
    expect(title).toBeInTheDocument();
  });
});
