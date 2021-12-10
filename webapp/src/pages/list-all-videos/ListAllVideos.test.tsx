import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import MockAdapter from "axios-mock-adapter";
import { BrowserRouter } from "react-router-dom";
import * as mocks from '@webapp/mocks/videos';
import ListAllVideos from "./ListAllVideos";
import instance from "@webapp/api";

describe("ListAllVideos.tsx", () => {
  const mock = new MockAdapter(instance);
  beforeEach(() => {
    jest.useFakeTimers();
  });
  afterEach(jest.useRealTimers);

  it("should render loading state", async () => {
    mock.onGet("/videos").reply(200, mocks.videos);
    await act(() => {
      render(
        <BrowserRouter>
          <ListAllVideos />
        </BrowserRouter>
      );
    });
    await waitFor(() => {
      expect(screen.getByLabelText("animation")).toBeDefined();
    });
  });
  it("should display list items", async () => {
    mock.onGet("/videos").reply(200, mocks.videos);
    render(
      <BrowserRouter>
        <ListAllVideos />
      </BrowserRouter>
    );
    await waitFor(() => {
      expect(screen.findByTestId("List::Items")).toBeDefined();
    });
  });
    it("should display error message", async () => {
      mock.onGet("/videos").reply(500);
      render(
        <BrowserRouter>
          <ListAllVideos />
        </BrowserRouter>
      );
      await waitFor(() => {
        expect(screen.findByTestId("List::Error")).toBeDefined();
      });
    });
});
