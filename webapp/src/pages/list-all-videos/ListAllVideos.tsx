import React, { useState, useEffect } from "react";
import { getAllVideos } from "@webapp/api";
import Header from '@webapp/components/Header';
import List from '@webapp/components/List';
import Loading from "@webapp/components/Loading";
import styles from "./ListAllVideos.module.css";
import { Footer } from "./components";

const ErrorMessage: React.FC<{ message: string }> = ({ message }) => (
  <div data-testid="List::Error" className={styles.centered}>
    <span>{message}</span>
  </div>
);

const LoadingContainer: React.FC = () => (
  <div data-testid="Loading::Container" className={styles.centered}>
    <Loading />
  </div>
);

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
      {isLoading && <LoadingContainer />}
      {!isLoading && videos.length > 0 && (
        <>
          <Header />
          <List {...{ videos }} />
          <Footer />
        </>
      )}
      {!isLoading && error && <ErrorMessage message={error.message} />}
    </div>
  );
};

export default ListAllVideos;
