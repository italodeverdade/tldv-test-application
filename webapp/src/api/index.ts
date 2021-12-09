import axios from 'axios';

const instance = axios.create({ 
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 1000,
    responseType: "json"
});

export default instance;

export function getAllVideos(): Promise<Video[]>{
    return instance.get("/videos").then(r => r.data);
}

export function getVideoById(id:string):Promise<Video>{
    return instance.get(`/videos/${id}`).then(r => r.data);
}

export function updateOneVideo(updatedVideo: Video):Promise<Video>{
    const {title, slug, isPublic, url, id} = updatedVideo;
    return instance.put(`/videos/${id}`, {title, slug, isPublic, url, id}).then(r => r.data)
}