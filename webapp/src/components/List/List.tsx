import VideoItem from "@webapp/components/VideoItem";
import React from "react";
import { ListProps } from "./List.types";
import styles from "./List.module.css";

const List: React.FC<ListProps> = ({ videos }) => {
  return (
    <div data-testid="List::List" className={styles.list}>
      {videos.map(x => <VideoItem {...x} key={x.id} />)}
    </div>
  );
};

export default List;
