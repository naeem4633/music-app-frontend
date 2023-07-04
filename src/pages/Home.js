import React from 'react'
import Sidebar from '../components/Sidebar.js'
import MainSection from '../components/MainSection.js'
import Playlist from '../components/Playlist.js'

const Home = ({allPlaylists}, {savedPlaylists}) => {
  return (
    <div className='w-full max-h-[100vh] bg-black flex flex-row'>
        <Sidebar savedPlaylists={{savedPlaylists}}/>
        <MainSection allPlaylists={allPlaylists}/>
        {/* <Playlist /> */}
    </div>
  )
}

export default Home
