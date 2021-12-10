import React from "react";
import { Link, useParams } from "react-router-dom";
import { VideoItemProps } from "./VideoItem.types";
import styles from './VideoItem.module.css';
import classNames from "classnames";
import { formatDistanceToNow } from "date-fns";

const VideoItem: React.FC<VideoItemProps> = ({id, title, updatedAt, isPublic}) => {
  const params = useParams();
  let videoItemClasses = [styles.item];
  let visibilityLabel = "private";
  if(id === params.videoId) {
    videoItemClasses.push(styles.active);
  }
  if(isPublic){
    visibilityLabel = "public"
  }
  return (
    <Link to={`/${id}`} className={classNames(videoItemClasses)}>
        <div>
          <span className={styles.title}>{title}</span>
          {updatedAt && (
            <span className={styles.date}>{formatDistanceToNow(new Date(updatedAt), { addSuffix: true })}</span>
          )}
          <div>
            <span className={classNames([styles.tag, styles[visibilityLabel]])}>{visibilityLabel}</span>
          </div>
        </div>
        <span className={styles.chevron}></span>
    </Link>
  );
};

export default VideoItem;
