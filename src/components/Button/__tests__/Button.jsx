import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from "../Button";

const text = "ClickMe";

describe("Button component", () => {
  it("should render correct", () => {
    render(<Button>{text}</Button>);

    expect(screen.getByText(text)).toBeInTheDocument();
  });

  it("should invoke callback", () => {
    const mock = jest.fn();
    render(<Button onClick={mock}>{text}</Button>);
    const button = screen.getByText(text);

    fireEvent.click(button);

    expect(mock).toBeCalledTimes(1);
  });
});
