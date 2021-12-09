import instance, {getAllVideos, getVideoById, updateOneVideo} from './index';
import MockAdapter from 'axios-mock-adapter';

describe("API", () => {
    const mock = new MockAdapter(instance);

    it('returns data when getAllVideos is called', done => {
        const data: Video[] = [{
            title: "Testing video response",
            slug: "testing-video-response",
            id: "123456",
            isPublic: true,
            url: "https://tldv.io/sample.mp4"
        }];
        mock.onGet('/videos').reply(200, data);
        getAllVideos().then(response => {
            expect(response).toEqual(data);
            done();
        });
    });

    it('returns data when getVideo is called', done => {
        const data: Video = {
            title: "Single Video Response",
            slug: "single-video-response",
            id: "123456",
            isPublic: true,
            url: "https://tldv.io/sample.mp4"
        };
        mock.onGet(`/videos/${data.id}`).reply(200, data);
        getVideoById(data.id).then(response => {
            expect(response).toEqual(data);
            done();
        });
    });

    it('returns updated user when updateOneVideo is called', done => {
        const video: Video = {
            title: "Single video response",
            slug: "single-video-response",
            id: "123456",
            isPublic: true,
            url: "https://tldv.io/sample.mp4"
        }
        let videoToUpdate = video;
        videoToUpdate.title = "new title";
        mock.onPut(`/videos/${videoToUpdate.id}`).reply(200, videoToUpdate);
        updateOneVideo(videoToUpdate).then(response => {
            expect(response.title).toEqual(videoToUpdate.title);
            done();
        })
    });
})