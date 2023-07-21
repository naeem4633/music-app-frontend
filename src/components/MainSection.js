import React from 'react';
import { Link } from 'react-router-dom';

const MainSection = ( {featuredPlaylists, categorizedPlaylists} ) => {
    // console.log(featuredPlaylists)
  
  return (
    <>
    <section className='hidden lg:flex w-3/4 max-h-screen flex-col py-2 px-1 text-white'>
        <div className='max-h-screen gray-color rounded-md flex flex-col p-2'>
            <div className='w-full flex flex-row justify-between items-center p-4'>
                <div className='flex flex-row space-x-2'>
                    <Link to={'/'}>
                        <img src={require(`../static/images/left-arrow.png`)} className='bg-white rounded-full w-7 h-7 border border-white'></img>
                    </Link>
                    <img src={require(`../static/images/right-arrow.png`)} className='bg-white rounded-full w-7 h-7 border border-white'></img>
                </div>
                {/* <div className='flex flex-row space-x-2'>
                    <div className='bg-white rounded-full w-7 h-7'></div>
                </div> */}
            </div>

            <div className='overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400'>
                <div className='w-full flex flex-row justify-between items-center p-4'>
                    <p className='text-2xl font-bold'>Featured Playlists</p>
                </div>
                <div className='w-full items-center p-4 grid grid-cols-3 gap-x-6 gap-y-4'>
                    {featuredPlaylists.map((playlist) => (
                    <Link key={playlist.id} to={`/playlist/${playlist.id}`}>
                        <div className='w-full h-20 flex flex-row justify-between items-center hover:bg-gray-700 transition-all duration-200 bg-gray-800' key={playlist.id}>
                            <div className='flex flex-row items-center space-x-4'>
                                <img className='w-20 h-20' src={playlist.image_url} alt='' />
                                <p className='font-semibold'>{playlist.name}</p>
                            </div>
                            {/* <div className='w-14 h-14 rounded-full bg-green-500 m-2 flex justify-center items-center'>
                                <img className='w-5 h-5' src={require(`../static/images/play.png`)}></img>
                            </div> */}
                        </div>
                    </Link>
                    ))}
                </div>
                <div className=''>
                    <div className='w-full p-4 space-y-4'>
                        <p className='text-xl font-bold text-left'>Rock</p>
                        <div className='grid lg:grid-cols-4 2xl:grid-cols-6 gap-12'>
                            {categorizedPlaylists.map((playlist) => (
                            <Link key={playlist.id} to={`/playlist/${playlist.id}`}>
                                <div className='rounded flex flex-col p-3 text-left space-y-4 hover:bg-gray-700 transition-all duration-200 bg-gray-800' key={playlist.id}>
                                    <img className='w-full rounded mb-3' src={playlist.image_url}></img>
                                    <p className='font-semibold'>{playlist.name}</p>
                                    <p className='text-base text-gray-400'>{playlist.description}</p>
                                </div>
                            </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className='lg:hidden w-full max-h-[90vh] flex flex-col py-2 px-1 text-white absolute top-0'>
        <div className='max-h-screen gray-color rounded-md flex flex-col p-2'>
            <div className='w-full flex flex-row justify-between items-center p-4'>
                <div className='flex flex-row space-x-2'>
                    <Link to={'/'}>
                        <img src={require(`../static/images/left-arrow.png`)} className='bg-white rounded-full w-7 h-7 border border-white'></img>
                    </Link>
                    <img src={require(`../static/images/right-arrow.png`)} className='bg-white rounded-full w-7 h-7 border border-white'></img>
                </div>
                {/* <div className='flex flex-row space-x-2'>
                    <div className='bg-white rounded-full w-7 h-7'></div>
                </div> */}
            </div>


            <div className='overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400'>
                <div className='w-full flex flex-row justify-between items-center p-4'>
                    <p className='text-xl font-bold'>Good Evening</p>
                </div>
                <div className='w-full items-center p-2 grid grid-cols-2 gap-4'>
                    {featuredPlaylists.map((playlist) => (
                    <Link key={playlist.id} to={`/playlist/${playlist.id}`}>
                        <div className='w-full p-2 h-16 flex flex-row justify-between items-center hover:bg-gray-700 transition-all duration-200 bg-gray-800' key={playlist.id}>
                            <div className='flex flex-row items-center space-x-2'>
                                <img className='w-12 h-12' src={playlist.image_url} alt='' />
                                <p className='w-full text-left text-sm'>{playlist.name}</p>
                            </div>
                            {/* <div className='w-14 h-14 rounded-full bg-green-500 m-2 flex justify-center items-center'>
                                <img className='w-5 h-5' src={require(`../static/images/play.png`)}></img>
                            </div> */}
                        </div>
                    </Link>
                    ))}
                </div>
                <div className=''>
                    <div className='w-full p-2 space-y-2'>
                        <p className='text-lg font-bold text-left p-2'>Pop</p>
                        <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
                            {categorizedPlaylists.map((playlist) => (
                            <Link key={playlist.id} to={`/playlist/${playlist.id}`}>
                                <div className='rounded flex flex-col p-3 text-left space-y-4 hover:bg-gray-700 transition-all duration-200 bg-gray-800' key={playlist.id}>
                                    <img className='w-full rounded mb-3' src={playlist.image_url}></img>
                                    <p className='font-semibold'>{playlist.name}</p>
                                    <p className='text-sm text-gray-400'>{playlist.description}</p>
                                </div>
                            </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default MainSection