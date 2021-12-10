import { getVideoById } from "@webapp/api";
import ButtonLink from "@webapp/components/ButtonLink";
import Loading from "@webapp/components/Loading";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./VideoInfo.module.css";

const VideoInfo = () => {
  const params = useParams();
  const [error, setError] = useState<Error>();
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  const [receivedVideo, setVideo] = useState<Video>();

  useEffect(() => {
    const videoId = params.videoId as string;
    setIsLoading(true);
    getVideoById(videoId)
      .then((v) => {
        setVideo(v);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  }, [params.videoId]);

  return (
    <div className={styles.info}>
      {isLoading && (
        <div className={styles.centered}>
          <Loading label="Loading the video info..." />
        </div>
      )}
      {!isLoading && !!receivedVideo && (
        <div className={styles.content}>
          <div className={styles.video}>
            <video
              autoPlay={true}
              key={receivedVideo.id}
              width="320"
              height="240"
              controls
            >
              <source src={receivedVideo.url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className={styles.header}>
              <div>
                <h1>{receivedVideo.title}</h1>
                <span>{receivedVideo.slug}</span>
              </div>
              <ButtonLink to={`/${receivedVideo.id}/edit`} label="Edit this video" />
            </div>
          </div>
        </div>
      )}
      {!isLoading && error && <span>{error.message}</span>}
    </div>
  );
};

export default VideoInfo;
