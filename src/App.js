import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Home from './pages/Home.js';

function App() {
  const [allPlaylists, setAllPlaylists] = useState([]);
  const [likedSongs, setLikedSongs] = useState([]);
  const [savedPlaylists, setSavedPlaylists] = useState([]);
  const [spotifyAuthenticated, setSpotifyAuthenticated] = useState(false);
  const [song, setSong] = useState({title:"", artist:"", image_url:"", icon_url:"", progress:"", duration:""});

  useEffect(() => {
    const authenticateSpotify = async () => {
      try {
        const isAuthenticatedResponse = await axios.get('http://127.0.0.1:8000/spotify/is-authenticated');
        const isAuthenticated = isAuthenticatedResponse.data.status;
        setSpotifyAuthenticated(isAuthenticated);
        console.log('isAuthenticated:', isAuthenticated);
  
        if (!isAuthenticated) {
          const authUrlResponse = await axios.get('http://127.0.0.1:8000/spotify/get-auth-url');
          const authUrl = authUrlResponse.data.url;
          window.location.replace(authUrl);
        }
      } catch (error) {
        console.error('Error authenticating with Spotify:', error);
      }
    };
    
    authenticateSpotify();  
  }, []);

  useEffect(() => {
    const fetchCurrentSong = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/spotify/current-song');
        const currentSong = response.data;
        setSong(currentSong);
        console.log('currentSong:', currentSong);
      } catch (error) {
        console.error('Error fetching current song:', error);
      }
    };

    const interval = setInterval(() => {
      fetchCurrentSong();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  console.log('song:', song)
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const allPlaylistsResponse = await axios.get('http://127.0.0.1:8000/api/playlists/');
        if (allPlaylistsResponse.data.length === 0) {
          setAllPlaylists([]);
        } else {
          setAllPlaylists(allPlaylistsResponse.data);
        }
      } catch (error) {
        console.error('Error fetching all playlists:', error);
        setAllPlaylists([]);
      }
  
      // try {
      //   const likedSongsResponse = await axios.get('http://127.0.0.1:8000/api/liked-songs/');
      //   if (likedSongsResponse.data.length === 0) {
      //     setLikedSongs([]);
      //   } else {
      //     setLikedSongs(likedSongsResponse.data);
      //   }
      // } catch (error) {
      //   console.error('Error fetching liked songs:', error);
      //   setLikedSongs([]);
      // }
  
      // try {
      //   const savedPlaylistsResponse = await axios.get('http://127.0.0.1:8000/api/saved-playlists/');
      //   if (savedPlaylistsResponse.data.length === 0) {
      //     setSavedPlaylists([]);
      //   } else {
      //     setSavedPlaylists(savedPlaylistsResponse.data);
      //   }
      // } catch (error) {
      //   console.error('Error fetching saved playlists:', error);
      //   setSavedPlaylists([]);
      // }
    };
  
    fetchData();
  }, []);

  return (
    <Router>
      <div className="App">
        <div className="App-body">
          <Routes>
            <Route
              path="/"
              element={<Home allPlaylists={allPlaylists} song={song}/>}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
