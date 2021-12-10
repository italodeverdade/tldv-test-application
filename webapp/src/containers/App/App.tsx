import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from '@webapp/pages/main';
import VideoInfo from '@webapp/pages/video-info';
import EditVideo from '@webapp/pages/edit-video';
import styles from './App.module.css';
import NoMatch from '@webapp/pages/no-match';

function App() {
  return (
    <div data-testid="AppContainer" className={styles.app}>
      <Routes>
        <Route path="/" element={<Main/>}>
          <Route index element={<NoMatch />} />
          <Route path=":videoId" element={<VideoInfo />} />
          <Route path=":videoId/edit" element={<EditVideo />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
