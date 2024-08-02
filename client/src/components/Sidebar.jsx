import {Link} from 'react-router-dom'

const Sidebar = () => {
  return (
    <>
    <section className='category-section-container'>
        <ul className='category-section'>
            <h4>Getting started</h4>
           <li><Link to="/posts/categories/web">web</Link></li>
           <li><Link to="/posts/categories/android">android</Link></li>
           <li><Link to="/posts/categories/frontend">frontend</Link></li>
           <li><Link to="/posts/categories/database">database</Link></li>
           <li><Link to="/posts/categories/backend">backend</Link></li>
        </ul>
    </section>
    </>
  )
}

export default Sidebar