import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <section>
        <ul>
           <li><Link to="/posts/categories/nextjs">next js</Link></li>
           <li><Link to="/posts/categories/express">express</Link></li>
           <li><Link to="/posts/categories/node">Node</Link></li>
           <li><Link to="/posts/categories/mongodb">mongodb</Link></li>
           <li><Link to="/posts/categories/react">react</Link></li>
        </ul>
    </section>
    </>
  )
}

export default Navbar