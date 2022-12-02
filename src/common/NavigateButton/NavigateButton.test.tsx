import { render, screen } from "@testing-library/react";
import NavigateButton from "./NavigateButton";

describe("Next Button", () => {
  it("should render title", () => {
    render(<NavigateButton text={"START"} href={""} colorFill={"F5F5F5"} />);
    const title = screen.getByText("START");
    expect(title).toBeInTheDocument();
  });
});
