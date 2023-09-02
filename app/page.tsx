import Image from 'next/image'
import Card from './components/Card'

const getData = async() => {
  const res = await fetch('http://www.omdbapi.com/?apikey=eec38979&s=one piece')
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

type movie = {
  imdbID: string;
  Title: string;
  Year: string;
  Type: string;
  Poster: string;
}

const Home = async() => {
  const movies = await getData()

  return (
    <>
      <div className="flex flex-wrap justify-between gap-5">
        {movies.Search.map((movie:movie) => (
          <Card 
            key={movie.imdbID}
            title={movie.Title}
            year={movie.Year}
            type={movie.Type}
            poster={movie.Poster}
            href={movie.Title}
          />
        ))}
      </div>
      
    </>
  )
}
export default Home