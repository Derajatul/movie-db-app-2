import Image from 'next/image'

type Params = {
  detail: string;
}

const getData = async({detail}:Params) => {
  const res = await fetch(`http://www.omdbapi.com/?apikey=eec38979&t=${detail}`)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
} 

const Page = async({params}:{ params: Params }) => {
  const movie = await getData(params)
  return(
    <div className="flex flex-wrap gap-20 mt-10">
      <div className="w-full sm:w-[48%] md:w-[300px]">
        <Image 
          src={movie.Poster} 
          width={500} 
          height={500}
          className="rounded-2xl"
          style={{
            width:'100%',
            height:'auto'
          }} 
          alt='' 
        />
      </div>

      <div className="w-full sm:w-[48%] lg:w-[500px]">
        <h1>{movie.Title}</h1>
        <h3>STORYLINE</h3>
        <p>{movie.Plot}</p>
        <div className="w-full sm:w-[290px] mt-4">
          <div className="flex">
            <p className="flex-1 text-[#606060]">Rating</p>
            <p className="flex-1">{movie.imdbRating}</p>
          </div>
          <div className="flex">
            <p className="flex-1 text-[#606060]">Rating</p>
            <p className="flex-1">{movie.Released}</p>
          </div>
          <div className="flex">
            <p className="flex-1 text-[#606060]">Genres</p>
            <p className="flex-1">{movie.Genre}</p>
          </div>
          <div className="flex">
            <p className="flex-1 text-[#606060]">Countries</p>
            <p className="flex-1">{movie.Country}</p>
          </div>
          <div className="flex">
            <p className="flex-1 text-[#606060]">Duration</p>
            <p className="flex-1">{movie.Runtime}</p>
          </div>
        </div>
        
      </div>

      <div className="w-[130px] lg:mt-8">
        <h3 className="mt-4">Written by</h3>
        <p>{movie.Writer}</p>
      </div>
    </div>
  )
}

export default Page