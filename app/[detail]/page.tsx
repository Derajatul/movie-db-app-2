import Image from 'next/image'

const getData = async({detail}:params) => {
  const res = await fetch(`http://www.omdbapi.com/?apikey=eec38979&t=${detail}`)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
} 

type params = {
  detail: string;
}

const Page = async({params}:params) => {
  const movie = await getData(params)
  return(
    <div className="flex flex-wrap gap-5 mt-10">
      <div className="w-full sm:w-[48%] md:w-[300px]">
        <Image 
          src={movie.Poster} 
          width={500} 
          height={500} 
          style={{
            width:'100%',
            height:'auto'
          }} 
          alt='' 
        />
      </div>

      <div className="w-full sm:w-[48%] lg:w-[700px]">
        <h1>{movie.Title}</h1>
        <h2>STORYLINE</h2>
        <p>{movie.Plot}</p>
        <div className="w-full sm:w-[290px]">
          <div className="flex">
            <p className="flex-1">Rating</p>
            <p className="flex-1">{movie.imdbRating}</p>
          </div>
          <div className="flex">
            <p className="flex-1">Rating</p>
            <p className="flex-1">{movie.Released}</p>
          </div>
          <div className="flex">
            <p className="flex-1">Genres</p>
            <p className="flex-1">{movie.Genre}</p>
          </div>
          <div className="flex">
            <p className="flex-1">Countries</p>
            <p className="flex-1">{movie.Country}</p>
          </div>
          <div className="flex">
            <p className="flex-1">Duration</p>
            <p className="flex-1">{movie.Runtime}</p>
          </div>
        </div>
        
      </div>

      <div>
        <h2 className="mt-4">Written by</h2>
        <p>{movie.Writer}</p>
      </div>
    </div>
  )
}

export default Page