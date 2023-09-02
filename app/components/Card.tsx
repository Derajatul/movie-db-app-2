import Image from 'next/image'
import Link from 'next/link'

type Card = {
  poster: string;
  title: string;
  year: string;
  type: string;
  href: string;
}

const Card = ({poster,title,year,type,href}:Card) => {
  return(
    <div 
      className="card w-full sm:w-[48%] lg:w-[31.5%] xl:w-[22%] bg-base-100" 
      >
      <figure>
        <Image
          width={500}
          height={500}
          style={{
            width: '100%',
            height: 'auto',
          }}
          src={poster} 
          alt={title} 
        />
      </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>Year: {year}</p>
          <p>Type: {type}</p>
          <div className="card-actions">
            <Link href={href} className="btn btn-primary bg-primary">
              See Details
            </Link>
          </div>
        </div>
      </div>
  )
}
export default Card