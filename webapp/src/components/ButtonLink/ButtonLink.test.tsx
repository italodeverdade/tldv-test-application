import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ButtonLink from "./ButtonLink";
import { BrowserRouter } from "react-router-dom";

describe("ButtonLink.tsx", () => {
  test("should render ButtonLink Component normally", () => {
    render(
      <BrowserRouter>
        <ButtonLink to="/" label="testing" />
      </BrowserRouter>
    );
    const labelElement = screen.getByTestId("ButtonLink::Label");
    expect(labelElement).toBeInTheDocument();
    expect(labelElement).toContainHTML(
      '<span data-testid="ButtonLink::Label">testing</span>'
    );
  });
});
