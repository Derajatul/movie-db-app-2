"use client"

import Card from './components/Card'
import { useQuery } from './contexts/QueryContext'
import useSWR from 'swr';

const fetcher = (url: string) =>
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      return response.json();
    });

type movie = {
  imdbID: string;
  Title: string;
  Year: string;
  Type: string;
  Poster: string;
}

const Home = () => {
  const { query } = useQuery()
  const { data, error } = useSWR(`https://www.omdbapi.com/?apikey=eec38979&s=${query}`, fetcher);

  if (!data) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <div className="flex flex-wrap justify-between gap-5">
        {data.Search.map((movie:movie) => (
          <Card 
            key={movie.imdbID}
            title={movie.Title}
            poster={movie.Poster}
            href={movie.Title}
          />
        ))}
      </div>
      
    </>
  )
}


export default Home