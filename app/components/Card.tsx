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
    <Link 
      className="w-[150px] sm:w-[48%] lg:w-[31.5%] xl:w-[22%] bg-neutral" 
      href={href}
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
          <div className="card-actions">
            
          </div>
        </div>
      </Link>
  )
}
export default Card