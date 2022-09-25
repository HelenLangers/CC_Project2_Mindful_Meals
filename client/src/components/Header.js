import './Header.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

  const [showMenu, setShowMenu] = useState(false)

  let menu

  if(showMenu){
    menu = 
      
      <div className='navbarlinks'>
        <ul>
          <li className="">
            <Link to="/" className="" onClick={() => setShowMenu(!showMenu)}>Dashboard</Link>
          </li>
          <li className="">
            <Link to="/" className="" onClick={() => setShowMenu(!showMenu)}>Random recipe!</Link>
          </li>
          <li className="">
            <Link to="/entries" className="" onClick={() => setShowMenu(!showMenu)}>Show entries</Link>
          </li>
          <li className="">
            <Link to="/searchrecipes" className="" onClick={() => setShowMenu(!showMenu)}>Search Recipes</Link>
          </li>
        </ul>
      </div>
      
  }

  return (
    <>
    {menu}
    <header>
      <a href='#' className="toggle-button" onClick={() => setShowMenu(!showMenu)} >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
      </a>
      <h1>Holy Shiitake!</h1>
      <p className='header'>a mindful eating app...</p>
    </header>
    </>
  )
}

export default Header