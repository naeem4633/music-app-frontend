import React from 'react'
import { Link } from 'react-router-dom'

const Library = ({ savedPlaylists }) => {
  return (
    <section className='gray-color w-full lg:w-3/4 max-h-screen flex flex-col py-2 px-1 text-white'>
        <div className="rounded-md flex-grow flex flex-col p-2 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 max-h-[100vh]">
            <div className="bg-[url('./static/images/gradient-1.png')]">
                <div className="w-full flex flex-row justify-between items-center p-4">
                    <div className='flex flex-row space-x-2'>
                        <div className='flex flex-row space-x-2'>
                            <Link to={'/'}>
                                <img src={require(`../static/images/left-arrow.png`)} className='bg-white rounded-full w-7 h-7 border border-white'></img>
                            </Link>
                            <img src={require(`../static/images/right-arrow.png`)} className='bg-white rounded-full w-7 h-7 border border-white'></img>
                        </div>
                    </div>
                </div>

                <div className='w-full flex flex-col p-4 pt-28 justify-end h-[30vh] items-start space-y-8'>
                    <div>
                        <p className='text-4xl lg:text-7xl font-bold'>Library</p>
                    </div>
                    <div className='space-y-1'>
                        <p className='text-left text-sm'>{savedPlaylists.length} Playlists</p>
                    </div>
                </div>
            </div>

            <div className='hidden lg:flex flex-row border border-gray-400 px-4 py-2 border-x-0 border-t-0 justify-evenly text-sm text-gray-400'>
                <p className='text-left w-1/3 pl-10'>Title</p>
                <p className='w-1/3'>Album</p>
                <p className='w-1/3'>Duration</p>
            </div>

            <div className='gray-color hidden lg:flex flex-col p-4 text-sm flex-grow'>
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

            <div className='gray-color lg:hidden flex flex-col space-y-2 p-2 py-4 text-sm flex-grow'>
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
  )
}

export default Library
