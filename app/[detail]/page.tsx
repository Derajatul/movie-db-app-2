import Image from 'next/image'

type Params = {
  detail: string;
}
type MovieDetail = {
  detail: string;
  heading: string;
}
const MovieDetail = ({detail,heading}:MovieDetail) => {
  return(
    <div className="flex">
      <p className="flex-1 text-[#606060]">{heading}</p>
      <p className="flex-1">{detail}</p>
    </div>
  )
}

const ButtonAction = ({children}:{children: React.ReactNode}) => {
  return(
    <button className="max-w-[65px]">
      <div className="flex flex-col gap-5 items-center">
        {children}
      </div>   
    </button>
  )
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
    <div className="flex flex-wrap gap-20 flex-col items-center lg:flex-row lg:items-start">
      <div className="w-full sm:w-[48%] md:w-[300px] flex flex-col gap-5">
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

        <div className="flex justify-around items-start">
          <ButtonAction>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="24" viewBox="0 0 22 24" fill="none">
              <path d="M21.776 8.70882C21.7079 8.49283 21.5826 8.30304 21.4155 8.16289C21.2484 8.02273 21.0468 7.93835 20.8357 7.92015L14.6596 7.39165L11.987 1.02049C11.9019 0.815284 11.7635 0.640995 11.5884 0.518654C11.4133 0.396312 11.2092 0.331148 11.0005 0.331024C10.7918 0.330901 10.5875 0.395824 10.4123 0.517958C10.2371 0.640093 10.0985 0.814218 10.0132 1.01932L7.34061 7.39165L1.16453 7.92015C0.95702 7.93786 0.758643 8.01957 0.593128 8.15551C0.427613 8.29145 0.301969 8.47586 0.231227 8.68669C0.160486 8.89751 0.147642 9.12582 0.194234 9.34431C0.240825 9.56279 0.344877 9.76219 0.493943 9.91865L5.05803 14.7102L3.44386 22.2375C3.39485 22.4653 3.41056 22.7038 3.48895 22.9219C3.56734 23.14 3.7048 23.3277 3.88348 23.4607C4.06216 23.5936 4.27382 23.6656 4.49099 23.6674C4.70816 23.6692 4.92082 23.6006 5.10136 23.4707L11.0001 19.2357L16.8989 23.4707C17.0834 23.6026 17.301 23.6705 17.5225 23.6653C17.7439 23.6601 17.9586 23.5819 18.1375 23.4414C18.3165 23.3009 18.4512 23.1047 18.5236 22.8792C18.596 22.6538 18.6025 22.4099 18.5423 22.1803L16.5609 14.7137L21.4749 9.95132C21.7966 9.63865 21.9147 9.15099 21.776 8.70882V8.70882Z" fill="#757575"/>
            </svg>
            <p>Favorite</p>
          </ButtonAction>
          <ButtonAction>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                <g clip-path="url(#clip0_107_49)">
                  <path d="M2.75 2.75V21.3125C2.74991 21.4319 2.78092 21.5492 2.83996 21.653C2.899 21.7568 2.98405 21.8434 3.08673 21.9043C3.1894 21.9652 3.30618 21.9983 3.42554 22.0004C3.54491 22.0025 3.66277 21.9734 3.7675 21.9161L11 17.9699L18.2325 21.9161C18.3372 21.9734 18.4551 22.0025 18.5745 22.0004C18.6938 21.9983 18.8106 21.9652 18.9133 21.9043C19.016 21.8434 19.101 21.7568 19.16 21.653C19.2191 21.5492 19.2501 21.4319 19.25 21.3125V2.75C19.25 2.02065 18.9603 1.32118 18.4445 0.805456C17.9288 0.289731 17.2293 0 16.5 0L5.5 0C4.77065 0 4.07118 0.289731 3.55546 0.805456C3.03973 1.32118 2.75 2.02065 2.75 2.75Z" fill="#757575"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_107_49">
                      <rect width="22" height="22" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
              <p>Watch Later</p>
          </ButtonAction>
          <ButtonAction>
            <svg xmlns="http://www.w3.org/2000/svg" width="29" height="27" viewBox="0 0 29 27" fill="none">
               <path d="M11.2149 13.5C11.2149 14.2832 11.549 15.0344 12.1439 15.5882C12.7387 16.142 13.5455 16.4531 14.3867 16.4531C15.228 16.4531 16.0347 16.142 16.6296 15.5882C17.2244 15.0344 17.5586 14.2832 17.5586 13.5C17.5586 12.7168 17.2244 11.9656 16.6296 11.4118C16.0347 10.858 15.228 10.5469 14.3867 10.5469C13.5455 10.5469 12.7387 10.858 12.1439 11.4118C11.549 11.9656 11.2149 12.7168 11.2149 13.5ZM26.6834 12.8197C23.9986 7.5542 19.9403 4.9043 14.5 4.9043C9.05685 4.9043 5.00138 7.5542 2.31661 12.8224C2.20893 13.0347 2.15308 13.2665 2.15308 13.5013C2.15308 13.7361 2.20893 13.968 2.31661 14.1803C5.00138 19.4458 9.05968 22.0957 14.5 22.0957C19.9432 22.0957 23.9986 19.4458 26.6834 14.1776C26.9015 13.7505 26.9015 13.2548 26.6834 12.8197ZM14.3867 18.1406C11.634 18.1406 9.40235 16.0629 9.40235 13.5C9.40235 10.9371 11.634 8.85938 14.3867 8.85938C17.1395 8.85938 19.3711 10.9371 19.3711 13.5C19.3711 16.0629 17.1395 18.1406 14.3867 18.1406Z" fill="#757575"/>
                </svg>
              <p>Watched</p>
          </ButtonAction>
        </div>
      </div>
      
      <div className="w-full sm:w-[500px] lg:w-[600px]">
        <h1>{movie.Title}</h1>
        <h3>STORYLINE</h3>
        <p>{movie.Plot}</p>
        <div className="w-full sm:w-[290px] mt-4">
          <MovieDetail heading="Rating" detail={movie.imdbRating} />
          <MovieDetail heading="Released" detail={movie.Released} />
          <MovieDetail heading="Genres" detail={movie.Genre} />
          <MovieDetail heading="Countries" detail={movie.Country} />
          <MovieDetail heading="Duration" detail={movie.Runtime} />      </div>
        <div className="flex justify-between">
          {movie.Ratings.map(rating => (
            <div key={rating.Source} className="text-center">
              <h3>{rating.Source}</h3>
              <p>{rating.Value}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="w-full sm:w-[500px] lg:w-[600px] lg:mt-8 xl:w-[150px]">
        <h3 className="mt-4">Written by</h3>
        <p>{movie.Writer}</p>
      </div>
    </div>
    
  )
}
export default Page