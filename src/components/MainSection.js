import React from 'react'

const MainSection = ({allPlaylists}) => {


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

            <div className='w-full flex flex-row justify-between border border-white items-center p-4'>
                <p className='text-2xl font-bold'>Good Evening</p>
            </div>

            <div className='w-full border border-white items-center p-4 grid grid-cols-3 gap-x-6 gap-y-4'>
                
                {allPlaylists.map((playlist) => (
                    <div className='border border-white w-full h-24 flex flex-row justify-between items-center' key={playlist.id}>
                        <div className='flex flex-row items-center space-x-4'>
                            <img className='border border-white w-24 h-24' src='' alt='' />
                            <p className='font-bold'>{playlist.name}</p>
                        </div>
                    <div className='w-14 h-14 rounded-full bg-green-500 m-2'></div>
                    </div>
                ))}
                
            </div>

            <div className='w-full border border-white p-4 space-y-4'>
                <p className='text-xl font-bold text-left'>Made For You</p>
                <div className='grid grid-cols-7 gap-6'>

                {allPlaylists.map((playlist) => (
                    <div className='w-44 h-60 border border-white flex flex-col p-2 text-left space-y-'>
                        <img className='w-full h-40 border border-white rounded mb-3' src=''></img>
                        <p className='font-bold'>{playlist.name}</p>
                        <p className='text-base text-gray-400'>Playlist description</p>
                    </div>
                ))}

                </div>
            </div>
        </div>
    </section>
  )
}

export default MainSection
