import Link from 'next/link'
import SearchBar from './SearchBar'

const Navbar = () => {
  return(
    <div className="navbar bg-base-100 flex justify-between items-center">
      <Link href="/" className="btn btn-ghost normal-case text-xl">
        Movie.io
      </Link>
      <SearchBar />
    </div>
  )
}

export default Navbar