import { useState } from 'react'

import './housingCollapse.sass'

import arrowDown from '../../assets/arrowDown.png'
import Collapse from '../collapse/collapse'

// Création du composent qui gère les collapses
//Page "housing"
const HousingCollapse = (props) => {
  /* Création d'une variable "divState" initialisée avec un tableau avec 2 valeurs
   "false" et fournit une fonction "setDivState" pour mettre à jour la variable */
  const [divState, setDivState] = useState([false, false])
  /* Création d'une fonction qui inverse l'une des 2 valeurs
  de divState par rapport à son index */
  const toggle = (index) => {
    setDivState((prevState) => {
      const updatedStates = [...prevState]
      updatedStates[index] = !updatedStates[index]
      return updatedStates
    })
  }
  return (
    <div className="housing__collapse">
      <div className="housing__collapse__container">
        {/* <div className="housing__collapse__container__desc">
          <h2>Déscription</h2>
          <img
            className={
              // Ajout de la class "actived" lors du click sur la flèche
              divState[0]
                ? 'housing__collapse__container__arrow actived'
                : 'housing__collapse__container__arrow '
            }
            src={arrowDown}
            alt=""
            onClick={() => toggle(0)}
          />
        </div> */}
        <Collapse />
        {/* <div
          className={
            // Change la class "closed" en "opened"
            //  lors du changement d'image du carousel 
            divState[0]
              ? 'housing__collapse__container__text opened'
              : 'housing__collapse__container__text closed'
          }
        >
          <br />
          <p>{props.description}</p>
          <br />
        </div> */}
      </div>
      <div className="housing__collapse__container">
        <div className="housing__collapse__container__equip">
          <h2>Équipements</h2>
          <img
            className={
              // Ajout de la class "actived" lors du click sur la flèche
              divState[1]
                ? 'housing__collapse__container__arrow actived'
                : 'housing__collapse__container__arrow '
            }
            src={arrowDown}
            alt=""
            onClick={() => toggle(1)}
          />
        </div>
        <div
          className={
            /* Change la class "closed" en "opened"
              lors du changement d'image du carousel */
            divState[1]
              ? 'housing__collapse__container__text opened'
              : 'housing__collapse__container__text closed'
          }
        >
          <br />
          <ul>
            {props.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
          <br />
        </div>
      </div>
    </div>
  )
}
export default HousingCollapse
