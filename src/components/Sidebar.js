import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ savedPlaylists }) => {
  return (
    <section className='w-1/4 min-h-screen flex flex-col space-y-2 py-2 px-1 text-white'>
      <div className='gray-color h-28 rounded-md border border-white font-bold text-gray-300 hover:text-white'>
        <div className='w-full flex flex-row h-1/2 items-center p-6 space-x-4'>
          <img className='w-4 h-4 border border-white' src=''></img>
          <p className='text-left'>Home</p>
        </div>
        <div className='w-full flex flex-row h-1/2 items-center p-6 space-x-4'>
          <img className='w-4 h-4 border border-white' src=''></img>
          <p className='text-left'>Search</p>
        </div>
      </div>
      <div className='gray-color flex-grow rounded-md border border-white'>
        <div className='w-full flex flex-row h-20 items-center p-6 space-x-4'>
          <img className='w-4 h-4 border border-white' src=''></img>
          <p className='text-left text-gray-300'>Your Library</p>
        </div>

        <div className='saved-playlists w-full flex flex-col flex-grow border border-white overflow-y-auto max-h-[75vh] scrollbar-thin scrollbar-thumb-gray-400'>

        {savedPlaylists.map((playlist) => (
          <Link key={playlist.id} to={`/playlist/${playlist.id}`}
            className='flex flex-row h-16 items-center hover:bg-gray-800 p-2'>
            <img src={playlist.image_url} className='w-14 h-14 rounded' alt='Playlist Cover' />
            <div className='flex flex-col pl-2 space-y-1'>
              <p className='text-left'>{playlist.name}</p>
              <p className='text-left text-xs text-gray-400'>Playlist. {playlist.number_of_songs} Songs</p>
            </div>
          </Link>
        ))}

        </div>
      </div>
    </section>
  );
};

export default Sidebar;