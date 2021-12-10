import instance, {getAllVideos, getVideoById, updateOneVideo} from './index';
import MockAdapter from 'axios-mock-adapter';

const singleVideoData = {
    title: "Testing video response",
    slug: "testing-video-response",
    id: "123456",
    isPublic: true,
    url: "https://tldv.io/sample.mp4"
};

describe("API", () => {
    const mock = new MockAdapter(instance);

    it('returns data when getAllVideos is called', done => {
        const data: Video[] = [singleVideoData];
        mock.onGet('/videos').reply(200, data);
        getAllVideos().then(response => {
            expect(response).toEqual(data);
            done();
        });
    });

    it('returns data when getVideo is called', done => {
        mock.onGet(`/videos/${singleVideoData.id}`).reply(200, singleVideoData);
        getVideoById(singleVideoData.id).then(response => {
            expect(response).toEqual(singleVideoData);
            done();
        });
    });

    it('returns updated user when updateOneVideo is called', done => {
        let videoToUpdate = singleVideoData;
        videoToUpdate.title = "new title";
        mock.onPut(`/videos/${videoToUpdate.id}`).reply(200, videoToUpdate);
        updateOneVideo(videoToUpdate).then(response => {
            expect(response.title).toEqual(videoToUpdate.title);
            done();
        })
    });
})