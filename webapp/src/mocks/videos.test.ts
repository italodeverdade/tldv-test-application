import * as mocks from "./videos";

describe("videos.mocks", () => {
    it("should be an array of videos", () => {
        expect(mocks.videos).toHaveLength(2);
    })
    it("should be a video with title", () => {
        expect(mocks.video).toHaveProperty("title");
    })
});