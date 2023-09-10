import Image from 'next/image'
import Link from 'next/link'

type Card = {
  poster: string;
  title: string;
  href: string;
}

const Card = ({poster,title,href}:Card) => {
  const placeholderImg = 'https://via.placeholder.com/500x500.png?text=Placeholder+Image'; 
  return(
    <Link 
      className="w-full sm:w-[48%] lg:w-[31.5%] xl:w-[22%] bg-neutral card-compact" 
      href={href}
      >
    
        <Image
          width={500}
          height={500}
          style={{
            width:'100%',
            height: 'auto'
          }}
          src={poster === "N/A" ? placeholderImg : poster} 
          alt={title === "N/A" ? title : 'Placeholder img'} 
        />
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
        </div>
      </Link>
  )
}
export default Card