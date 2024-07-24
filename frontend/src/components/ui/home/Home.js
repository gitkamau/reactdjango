import React from 'react';
import MusicPlayer from './MusicPlayer';
import VideoPlayer from './VideoPlayer';
import '../../assets/css/home/Home.css';


export default function Home() {
  return (
    <div>
      <MusicPlayer className="music_player"/>
      <VideoPlayer className="video-player"/>
    </div>
  );
}


