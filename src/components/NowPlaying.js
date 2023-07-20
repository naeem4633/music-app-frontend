import React from 'react';
import { Link } from 'react-router-dom';

const NowPlaying = ({ song }) => {
    const formatTime = (time) => {
        const minutes = Math.floor(time / 60000);
        const seconds = Math.floor((time % 60000) / 1000);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };
  return (
    <section className='w-full h-[10vh] flex flex-col space-y-2 pb-2 px-1 text-white z-10 absolute bottom-0 bg-black'>
      <div className='gray-color flex flex-row p-2 h-full justify-between'>
        <div className='first-batch w-56 flex flex-row items-center justify-between p-1'>
          <img className='w-16 h-16 rounded-lg' src={song.image_url} alt='Song Cover'></img>
          <div className='flex flex-col flex-grow pl-3'>
            <p className='text-sm text-left'>{song.title}</p>
            <p className='text-gray-400 text-xs text-left'>{song.artist}</p>
          </div>
          <img className='w-6 h-6' src={song.icon_url} alt='Icon'></img>
        </div>

        <div className='w-1/2 flex flex-col'>
          <div className='w-full h-1/2 flex flex-row justify-center space-x-4'>
            <p>previous</p>
            <p>play</p>
            <p>next</p>
          </div>
          <div className='w-full h-1/2 flex flex-row justify-center space-x-2'>
            <p>{formatTime(song.progress)}</p>
            <p>lineeeeeeeeeeeeeeeeeeeeeeeesssssssssssssssssssssssssssssssseeeeeeeee</p>
            <p>{formatTime(song.duration)}</p>
          </div>
        </div>
        <div className='w-56 flex flex-row justify-end'>
          <div className='w-1/2 flex items-center'>
            <img className='w-6 h-6 mx-auto' src={song.icon_url} alt='Icon'></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NowPlaying;
