import './housingRate.sass'

import starRed from '../../assets/starRed.png'
import star from '../../assets/star.png'

// Création du composant qui gère l'identité et la note
//Page "housing"
const HousingRate = (props) => {
  // Création d'une variable qui stock la note
  const count = props.rate
  /*Création d'une fonction qui convertit la note /5
  en étoiles rouge et comble avec des étoiles grise*/
  const rates = () => {
    const allStars = []
    for (let i = 0; i < count; i++) {
      allStars.push(
        <img
          key={i}
          className="housing__identityRate__rate__img"
          src={starRed}
          alt="étoile rouge"
        />
      )
    }
    while (allStars.length < 5) {
      allStars.push(
        <img
          key={`${allStars.length}`}
          className="housing__identityRate__rate__img"
          src={star}
          alt="étoile grise"
        />
      )
    }
    return allStars
  }

  return (
    <div className="housing__identityRate">
      <div className="housing__identityRate__identity">
        <p className="housing__identityRate__identity__name">{props.name}</p>
        <img
          className="housing__identityRate__identity__img"
          src={props.imgSrc}
          alt=""
        />
      </div>
      <div className="housing__identityRate__rate">{rates()}</div>
    </div>
  )
}

export default HousingRate
