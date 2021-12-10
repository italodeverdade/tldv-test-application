import MockAdapter from 'axios-mock-adapter';
import instance, {getAllVideos, getVideoById, updateOneVideo} from './index';
import * as mocks from '@webapp/mocks/videos'

describe("API", () => {
    const mock = new MockAdapter(instance);

    it('returns data when getAllVideos is called', done => {
        mock.onGet('/videos').reply(200, mocks.videos);
        getAllVideos().then(response => {
            expect(response).toEqual(mocks.videos);
            done();
        });
    });

    it('returns data when getVideo is called', done => {
        mock.onGet(`/videos/${mocks.video.id}`).reply(200, mocks.video);
        getVideoById(mocks.video.id).then(response => {
            expect(response).toEqual(mocks.video);
            done();
        });
    });

    it('returns updated user when updateOneVideo is called', done => {
        let videoToUpdate = mocks.video;
        videoToUpdate.title = "new title";
        mock.onPut(`/videos/${videoToUpdate.id}`).reply(200, videoToUpdate);
        updateOneVideo(videoToUpdate).then(response => {
            expect(response.title).toEqual(videoToUpdate.title);
            done();
        })
    });
})