import React, { FormEvent, useEffect, useState } from "react";
import { getVideoById, updateOneVideo } from "@webapp/api";
import Loading from "@webapp/components/Loading";
import { useParams } from "react-router-dom";
import styles from "./EditVideo.module.css";
import Button from "@webapp/components/Button";
import Input from "@webapp/components/Input";

const EditVideo: React.FC = (props) => {
  const params = useParams();
  const [error, setError] = useState<Error>();
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  const [isSending, setIsSending] = useState<boolean>(false);
  const [receivedVideo, setVideo] = useState<Video>();

  const [title, setTitle] = useState<string>("");
  const [slug, setSlug] = useState<string>("");
  const [url, setURL] = useState<string>("");
  const [isPublic, setIsPublic] = useState<boolean>(false);

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

  useEffect(() => {
    if (receivedVideo?.id) {
      setTitle(receivedVideo.title);
      setSlug(receivedVideo.slug);
      setURL(receivedVideo.url);
      setIsPublic(receivedVideo.isPublic);
    }
  }, [
    receivedVideo?.id,
    receivedVideo?.title,
    receivedVideo?.slug,
    receivedVideo?.url,
    receivedVideo?.isPublic,
  ]);

  const handleVisibilityChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setIsPublic(event.target.value === "1");
  };

  const onSubmitForm = (event?: FormEvent) => {
    event?.preventDefault();
    setIsSending(true);
    if (receivedVideo?.id) {
      updateOneVideo({
        title,
        url,
        isPublic,
        slug,
        id: receivedVideo?.id,
      })
        .then((responseVideo) => {
          setTitle(responseVideo.title);
          setSlug(responseVideo.slug);
          setURL(responseVideo.url);
          setIsPublic(responseVideo.isPublic);
          window.history.go(0);
        })
        .catch((err) => {
          setIsSending(false);
          alert(err.message);
        });
    }
  };

  return (
    <div className={styles.info}>
      {isLoading && (
        <div className={styles.centered}>
          <Loading label="Loading the video info..." />
        </div>
      )}
      {!isLoading && !!receivedVideo && (
        <div className={styles.content}>
          <div className={styles.toolbar}>
            <Button
              onClick={() => window.history.back()}
              label="Back to Video"
            />
          </div>
          <div className={styles.form}>
            <div className={styles.formContainer}>
              <form onSubmit={onSubmitForm}>
                <h1>Edit video</h1>
                <Input label="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                <Input label="Slug" value={slug} onChange={(e) => setSlug(e.target.value)} />
                <Input label="URL" value={url} onChange={(e) => setURL(e.target.value)} />
                <div>
                  <span>Visibility:</span>
                  <select
                    value={Number(isPublic)}
                    onChange={handleVisibilityChange}
                  >
                    <option value="1">Public</option>
                    <option value="0">Private</option>
                  </select>
                </div>
                <div className={styles.divider} />
                <Button loading={isSending} onClick={onSubmitForm} label="Save changes" />
              </form>
            </div>
          </div>
        </div>
      )}
      {!isLoading && error && <span>{error.message}</span>}
    </div>
  );
};

export default EditVideo;
