import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ savedPlaylists }) => {
  return (
    <>
    <section className='hidden lg:flex flex-col w-1/4 min-h-screen space-y-2 py-2 px-1 text-white'>
      <div className='gray-color h-28 rounded-md font-bold text-gray-300'>
        <Link to={'/'} className='cursor-pointer w-full flex flex-row h-1/2 items-center p-6 space-x-4 hover:text-white'>
          <img className='w-6 h-6' src={require(`../static/images/home.png`)}></img>
          <p className='text-left'>Home</p>
        </Link>
        {/* <div className='cursor-pointer w-full flex flex-row h-1/2 items-center p-6 space-x-4 hover:text-white'>
          <img className='w-6 h-6' src={require(`../static/images/search.png`)}></img>
          <p className='text-left'>Search</p>
        </div> */}
      </div>
      <div className='gray-color flex-grow rounded-md'>
        <div className='w-full flex flex-row h-20 items-center p-6 space-x-4'>
          <img className='w-6 h-6' src={require(`../static/images/library.png`)}></img>
          <p className='text-left text-gray-300'>Your Library</p>
        </div>

        <div className='saved-playlists w-full flex flex-col flex-grow overflow-y-auto max-h-[75vh] scrollbar-thin scrollbar-thumb-gray-400'>
        {savedPlaylists.map((playlist) => (
          <Link key={playlist.id} to={`/playlist/${playlist.id}`}
            className='flex flex-row h-16 items-center hover:bg-gray-800 transition-all duration-200 p-2'>
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

    <section className='lg:hidden w-[100vw] p-1 text-white absolute bottom-0 z-50'>
      <div className='gray-color rounded-md font-bold text-gray-300 flex flex-row items-center'>
        <Link to={'/'} className='w-1/2 cursor-pointer flex flex-row items-center p-6 space-x-4 justify-center'>
          <img className='w-6 h-6' src={require(`../static/images/home.png`)}></img>
          <p className='text-left'>Home</p>
        </Link>

        <Link to={'/library'} className='w-1/2 flex flex-row h-20 items-center p-6 space-x-4 justify-center'>
          <img className='w-6 h-6' src={require(`../static/images/library.png`)}></img>
          <p className='text-left'>Your Library</p>
        </Link>
      </div>
    </section>
    </>
  );
};

export default Sidebar;