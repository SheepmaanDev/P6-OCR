import { Link } from 'react-router-dom'

import './card.sass'

//Création du composent qui gère les cartes
//Composent "Gallery"
//Page "home"
const Card = (props) => {
  return (
    <div className="card">
      {/* Création du lien vers le logement grâce à son id */}
      <Link key={props.id} to={`/housing/${props.id}`}>
        <div className="card__container">
          <img
            className="card__container__img"
            src={props.cover}
            alt={`${props.title} cover`}
          />
        </div>
        <span className="card__text">{props.title}</span>
      </Link>
    </div>
  )
}
export default Card
