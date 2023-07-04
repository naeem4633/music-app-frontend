import React from 'react'


const Playlist = () => {
  return (
    <section className='w-3/4 min-h-screen flex flex-col py-2 px-1 text-white '>
        <div className='gray-color rounded-md border border-white flex-grow flex flex-col p-2'>
            <div className='w-full flex flex-row justify-between border border-white items-center p-4'>
                <div className='flex flex-row space-x-2'>
                    <div className='bg-white rounded-full w-7 h-7'></div>
                    <div className='bg-white rounded-full w-7 h-7'></div>
                </div>
                <div className='flex flex-row space-x-2'>
                    <div className='bg-white rounded-full w-7 h-7'></div>
                </div>
            </div>

            <div className='w-full flex flex-col border border-white p-4 pt-28 justify-end h-1/3 items-start space-y-8'>
                <div>
                    <p className='text-left'>Playlist</p>
                    <p className='text-7xl font-bold'>Top 50 Global</p>
                </div>
                <div className='space-y-1'>
                    <p className='text-gray-300 text-sm text-left'>The hottest local and global tracks around the world</p>
                    <p className='text-left text-sm'>82,947 likes 65 songs, about 3 hr 15 min</p>
                </div>
            </div>

            <div className='w-full flex flex-row border border-white p-4 justify-start h-1/8 space-x-6 items-center'>
                <div className='w-16 h-16 rounded-full bg-green-500 hover:scale-105 hover:bg-green-400'></div>
                <div className='w-12 h-12 rounded-full border border-white'></div>
                <div className='w-12 h-12 rounded-full border border-white'></div>
            </div>

            <div className='flex flex-row border border-gray-400 px-4 py-2 border-x-0 border-t-0 justify-evenly text-sm text-gray-400'>
                <p className='text-left w-1/3 pl-10'>Title</p>
                <p className='w-1/3'>Album</p>
                <p className='w-1/3'>Date Added</p>
            </div>

            <div className='flex flex-col border border-gray-400 p-4 text-sm flex-grow'>

                <div className='w-full h-16 border border-white pl-3 flex flex-row items-center justify-evenly hover:bg-gray-800'>
                    <div className='flex flex-row items-center space-x-3 w-1/3'>
                        <div className='w-2 h-2 bg-white rounded-full'></div>
                        <img className='border border-gray-300 w-11 h-11' src=''></img>
                        <div className='flex flex-col text-left'>
                            <p>Song Name</p>
                            <p className='text-gray-400'>Artist Name</p>
                        </div>
                    </div>
                    <p className='text-gray-400 w-1/3'>Album Name</p>
                    <p className='text-gray-400 w-1/3 pl-10'>Date Added</p>
                    <div className='w-6 h-6 bg-white -translate-x-3'></div>
                </div>

            </div>
        </div>
    </section>
  )
}

export default Playlist
