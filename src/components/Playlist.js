import React from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Playlist = () => {
    const [playlist, setPlaylist] = useState({});
    const [playlistTracks, setPlaylistTracks] = useState([]);
    const { playlistId } = useParams();

    useEffect(() => {
        const fetchPlaylistTracks = async () => {
          try {
            console.log('playlistId:', playlistId);
            const response = await axios.get(`http://127.0.0.1:8000/spotify/get-playlist/${playlistId}`);
            const playlistData = response.data;
            setPlaylist(playlistData);
            // console.log('playlistData:', playlistData);
            // console.log('playlist:', playlist);
    
            // Extract the list of songs from the playlist data
            const tracks = playlistData.songs;
            setPlaylistTracks(tracks);
            // console.log('playlistTracks:', playlistTracks);
          } catch (error) {
            console.error('Error fetching playlist tracks:', error);
          }
        };
    
        fetchPlaylistTracks();
        }, [playlistId]);

        useEffect(() => {
            console.log('playlist:', playlist);
          }, [playlist]);
          
          useEffect(() => {
            console.log('playlistTracks:', playlistTracks);
          }, [playlistTracks]);

    const playTrack = async (trackUri) => {
        try {
            await axios.put(`http://127.0.0.1:8000/spotify/play-track/${trackUri}`);
            console.log('Track playback started or resumed successfully.');
        } catch (error) {
            console.error('Song Uri', trackUri);
            console.error('Error playing track:', error);
        }
    };

    const formatDuration = (duration) => {
    const minutes = Math.floor(duration / 60000);
    const seconds = Math.floor((duration % 60000) / 1000);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };
          

  return (
    <section className='w-3/4 min-h-screen flex flex-col py-2 px-1 text-white'>
        <div className='gray-color rounded-md border border-white flex-grow flex flex-col p-2 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 max-h-[100vh]'>
            <div className='w-full flex flex-row justify-between border border-white items-center p-4'>
                <div className='flex flex-row space-x-2'>
                    <div className='bg-white rounded-full w-7 h-7'></div>
                    <div className='bg-white rounded-full w-7 h-7'></div>
                </div>
                <div className='flex flex-row space-x-2'>
                    <div className='bg-white rounded-full w-7 h-7'></div>
                </div>
            </div>

            <div className='w-full flex flex-col border border-white p-4 pt-28 justify-end h-[30vh] items-start space-y-8'>
                <div>
                    <p className='text-left'>Playlist</p>
                    <p className='text-7xl font-bold'>{playlist.name}</p>
                </div>
                <div className='space-y-1'>
                    {playlist.description && <p className='text-left text-sm'>{playlist.description}</p>}
                    <p className='text-left text-sm'>82,947 likes, {playlistTracks.length} songs, about 3 hr 15 min</p>
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
                <p className='w-1/3'>Duration</p>
            </div>

            <div className='flex flex-col border border-gray-400 p-4 text-sm flex-grow'>

                {playlistTracks.map((track) => (
                <div className='w-full h-16 border border-white pl-3 p-2 flex flex-row items-center justify-evenly hover:bg-gray-800' onClick={() => playTrack(track.uri)} key={track.uri}>
                    <div className='flex flex-row items-center space-x-3 w-1/3'>
                    <div className='w-2 h-2 bg-white rounded-full'></div>
                    <img className='border border-gray-300 w-11 h-11' src={track.image_url} alt='Song Cover'></img>
                    <div className='flex flex-col text-left'>
                        <p>{track.name}</p>
                        <p className='text-gray-400'>Artist name</p>
                    </div>
                    </div>
                    <p className='text-gray-400 w-1/3'>{track.album}</p>
                    <p className='text-gray-400 w-1/3 pl-10'>{formatDuration(track.duration)}</p>
                    <div className='w-6 h-6 bg-white -translate-x-3'></div>
                </div>
                ))}

            </div>
        </div>
    </section>
  )
}

export default Playlist
