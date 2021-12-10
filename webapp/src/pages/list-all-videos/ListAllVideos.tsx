import React, { useState, useEffect } from "react";
import { getAllVideos } from "@webapp/api";
import styles from "./ListAllVideos.module.css";
import VideoItem from "@webapp/components/VideoItem";
import Loading from "@webapp/components/Loading";
import { Link } from "react-router-dom";

const ListAllVideos: React.FC = () => {
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  const [error, setError] = useState<Error>();
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    setError(undefined);
    getAllVideos()
      .then((videos) => {
        setVideos(videos);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  }, []);

  return (
    <div data-testid="List::Videos" className={styles.container}>
      {isLoading && (
        <div className={styles.centered}>
          <Loading />
        </div>
      )}
      {!isLoading && videos.length > 0 && (
        <>
          <div className={styles.header}>
            <Link to="/" id="tldv" />
            <span className={styles.tag}>player</span>
          </div>
          <div className={styles.list}>
            {videos.map((video) => {
              return <VideoItem {...video} key={video.id} />;
            })}
          </div>
          <a href="https://tldv.io/" rel="noreferrer" className={styles.cta} target="_blank">
            Catch up on meetings in minutes
          </a>
        </>
      )}
      {!isLoading && error && (
        <div className={styles.centered}>
          <span>{error.message}</span>
        </div>
      )}
    </div>
  );
};

export default ListAllVideos;
