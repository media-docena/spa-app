import React, { useEffect } from 'react';
import MusicCard from '../components/musica/MusicCard';
import PulseLoader from 'react-spinners/PulseLoader';
const apiKey = import.meta.env.VITE_RAPIDAPI_KEY;

function Musica({ songs, setSongs, loading, setLoading }) {
  useEffect(() => {
    if (songs.length === 0) {
      setLoading(true);
      const apiUrl =
        'https://spotify81.p.rapidapi.com/playlist_tracks?id=37i9dQZF1DX6aTaZa0K6VA&offset=0&limit=10';
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': `${apiKey}`,
          'X-RapidAPI-Host': 'spotify81.p.rapidapi.com',
        },
      };
      async function fetchSongs(apiUrl, options) {
        try {
          const response = await fetch(apiUrl, options);
          if (!response.ok) {
            throw new Error('Error en la respuesta de la red');
          }
          const data = await response.json();
          setSongs(data.items || []);
          
        } catch (error) {
          console.error('Error obteniendo las canciones:', error);
        } finally {
          setLoading(false);
        }
      }

      fetchSongs(apiUrl, options);
    }
  }, [songs.length, setSongs, setLoading]);

  return (
    <div>
      <section className="bg-white rounded-lg">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-2xl max-w-lg mx-auto font-semibold text-center text-gray-800 capitalize lg:text-3xl">
            Top 10 Canciones pop recomendados por <span className='text-green-500'>Media Docena</span>
          </h1>

          <p className="max-w-2xl mx-auto my-6 text-center text-gray-500">
            Uno de los hobbies favoritos del equipo, tanto durante el trabajo
            como en nuestros momentos de descanso, es escuchar música. A
            continuación, compartimos una selección aleatoria de 10 canciones
            pop recomendadas que se pueden encontrar en Spotify.
          </p>

          {/* Lista de canciones */}
          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
            {loading ? (
              <div className="col-span-full flex justify-center items-center h-64 space-x-2">
                <p className="text-gray-500 animate-pulse text-center text-md">
                  🎧 Cargando canciones
                </p>
                <PulseLoader color="#14b8a6" size={8} />
              </div>
            ) : songs.length === 0 ? (
              <div className="col-span-full flex justify-center items-center h-64">
                <p className="text-gray-500 text-center">
                  No se encontraron canciones. 😢
                </p>
              </div>
            ) : (
              songs.map((song, index) => (
                <MusicCard
                  key={index}
                  songTitle={song.track.name}
                  artist={song.track.artists[0].name}
                  imageUrl={song.track.album.images[0].url}
                  link={song.track.external_urls.spotify}
                />
              ))
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Musica;
