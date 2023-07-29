import { Link, useLocation } from 'react-router-dom'

import './header.sass'

import logo from '../../assets/logoHead.svg'

//Création du composant qui gère le header
//Toutes les pages
const Header = () => {
  //Création d'une variable qui permet d'acceder aux infos de l'URL
  const location = useLocation()
  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="logo-kaza" />
      </div>
      <ul className="header__navbar">
        <li>
          <Link
            className={
              /* Ajout de la class "active" si 
              l'URL correspond à "/" */
              location.pathname === '/'
                ? 'active header__navbar__link'
                : 'header__navbar__link'
            }
            to="/"
          >
            Accueil
          </Link>
        </li>
        <li>
          <Link
            className={
              /* Ajout de la class "active" si 
              l'URL correspond à "/about" */
              location.pathname === '/about'
                ? 'active header__navbar__link'
                : 'header__navbar__link'
            }
            to="/about"
          >
            A propos
          </Link>
        </li>
      </ul>
    </header>
  )
}
export default Header
