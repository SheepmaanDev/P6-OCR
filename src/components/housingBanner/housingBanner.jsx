import { useState } from 'react'

import './housingBanner.sass'

import arrowNext from '../../assets/arrowNext.png'
import arrowPrev from '../../assets/arrowPrevious.png'

//Création du composant qui gère le carousel
//Page "housing"
const HousingBanner = (props) => {
  /* Création d'une variable "current" initialisée à "0" et 
  fournit une fonction "setCurrent" pour mettre à jour la variable */
  const [current, setCurrent] = useState(0)
  //Création d'une variable qui contient la longueur de "props.data"
  const length = props.data.length
  /*Création d'une fonction qui permet de passer
  à l'image suivante dans le carousel*/
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }
  /* Création d'une fonction qui permet de passer
  à l'image précédente dans le carousel */
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }
  return (
    <section className="housing__banner">
      {/* Vérifie si il y a plus d'une image
      si oui affiche la fleche précédente */}
      {length > 1 && (
        <img
          className="housing__banner__arrowPrev"
          src={arrowPrev}
          alt="Fleche précédente"
          onClick={prevSlide}
        />
      )}
      {/* Vérifie si il y a plus d'une image
      si oui affiche la fleche suivante */}
      {length > 1 && (
        <img
          className="housing__banner__arrowNext"
          src={arrowNext}
          alt="Fleche suivante"
          onClick={nextSlide}
        />
      )}
      {/* Vérifie si il y a plus d'une image
      si oui affiche le compteur */}
      {length > 1 && (
        <span className="housing__banner__counter">
          {current + 1}/{props.data.length}
        </span>
      )}
      {props.data.map((slide, index) => {
        return (
          <div
            className={
              /* Change la class "active" en "inactive"
              lors du changement d'image du carousel */
              index === current
                ? 'housing__banner__slide active'
                : 'housing__banner__slide inactive'
            }
            key={index}
          >
            {index === current && (
              <img className="housing__banner__slide__img" src={slide} alt="" />
            )}
          </div>
        )
      })}
    </section>
  )
}
export default HousingBanner
