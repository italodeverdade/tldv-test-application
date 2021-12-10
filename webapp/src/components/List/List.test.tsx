import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import * as mocks from  '@webapp/mocks/videos';
import List from "./List";

describe("List.tsx", () => {
  it("should render normally", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <List videos={mocks.videos} />
      </BrowserRouter>
    );
    const spanElement = getByTestId("List::List");
    expect(spanElement).toBeTruthy();
  });
});
