import React from 'react'
import Sidebar from '../components/Sidebar.js'
import MainSection from '../components/MainSection.js'
import Playlist from '../components/Playlist.js'
import NowPlaying from '../components/NowPlaying.js'

const Home = ({ allPlaylists, savedPlaylists, song, renderPlaylist }) => {
  return (
    <div className='w-full max-h-[100vh] bg-black flex flex-row'>
      <Sidebar savedPlaylists={savedPlaylists} />
      {renderPlaylist ? <Playlist /> : <MainSection allPlaylists={allPlaylists} />} 
      <NowPlaying song={song} />
    </div>
  );
};

export default Home
