import Link from 'next/link'

const Navbar = () => {
  return(
    <div className="navbar bg-base-100">
      <Link href="/" className="btn btn-ghost normal-case text-xl">
        Movie.io
      </Link>
    </div>
  )
}

export default Navbar