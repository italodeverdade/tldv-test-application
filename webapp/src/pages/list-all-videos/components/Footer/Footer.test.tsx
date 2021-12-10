import React from "react";
import { render } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer.tsx", () => {
  it("should render normally", () => {
    const { getByText } = render(<Footer />);
    const spanElement = getByText("Catch up on meetings in minutes");
    expect(spanElement).toBeTruthy();
  });
});
