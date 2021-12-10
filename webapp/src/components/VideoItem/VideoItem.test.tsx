import React from "react";
import { render } from "@testing-library/react";
import VideoItem from "./VideoItem";
import { VideoItemProps } from "./VideoItem.types";
import { BrowserRouter } from "react-router-dom";

const defaultProps: VideoItemProps = {
  id: "123",
  isPublic: true,
  slug: "testing",
  title: "Testing",
  url: "https://tldv.io/testing",
  createdAt: new Date(),
  updatedAt: new Date(),
};

describe("VideoItem.tsx", () => {
  it("should render normally", () => {
    const { getByText } = render(
      <BrowserRouter>
        <VideoItem {...defaultProps} />
      </BrowserRouter>
    );
    expect(getByText(defaultProps.title)).toBeTruthy();
    expect(getByText("public")).toBeTruthy();
  });
});
