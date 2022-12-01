import { render, screen } from "@testing-library/react";
import NextButton from "./NextButton";

describe("Next Button", () => {
  it("should render title", () => {
    render(<NextButton text={"START"} href={""} colorFill={"F5F5F5"} />);
    const title = screen.getByText("START");
    expect(title).toBeInTheDocument();
  });
});
