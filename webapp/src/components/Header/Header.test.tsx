import React from "react";
import { render } from "@testing-library/react";
import Header from "./Header";
import { BrowserRouter } from "react-router-dom";

describe("Header.tsx", () => {
  it("should render normally", () => {
    const { getByText } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const spanElement = getByText("player");
    expect(spanElement).toBeTruthy();
  });
});
