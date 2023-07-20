import React from 'react'
import Sidebar from '../components/Sidebar.js'
import MainSection from '../components/MainSection.js'
import Playlist from '../components/Playlist.js'
import NowPlaying from '../components/NowPlaying.js'
import Library from '../components/Library.js'

const Home = ({ featuredPlaylists, savedPlaylists, song, renderPlaylist, categorizedPlaylists }) => {
  return (
    <div className='w-full max-h-[100vh] bg-black flex flex-row'>
      <Sidebar savedPlaylists={savedPlaylists} />
      {renderPlaylist ? <Playlist /> : <MainSection featuredPlaylists={featuredPlaylists} categorizedPlaylists={categorizedPlaylists}/>} 
      {/* <NowPlaying song={song} /> */}
    </div>
  );
};

export default Home