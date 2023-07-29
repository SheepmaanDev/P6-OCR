import { useParams } from 'react-router-dom'
import { HousingList } from '../../data/housingList'

import HousingBanner from '../../components/housingBanner/housingBanner'
import HousingHost from '../../components/housingHost/housingHost'
import HousingRate from '../../components/housingRate/housingRate'
import Collapse from '../../components/collapse/collapse'

import Error from '../error/error'

import './housing.sass'

// Création de la page "housing"
// Affiche les composants "housingBanner", "housingHost", "housingRate", "housingCollapse"
const Housing = () => {
  // Création d'une variable "id" qui récupère la valeur ID dans l'URL
  const { id } = useParams()
  // Création d'une variable "housing" qui cherche l'id correspondant à la variable "id"
  const housing = HousingList.find((housing) => housing.id === id)
  //Si la variable "housing" est falsy renvoi à la page "error"
  if (!housing) {
    return <Error />
  }
  return (
    <div className="housing">
      <HousingBanner data={housing.pictures} />
      <div className="housing__host">
        <HousingHost
          id={housing.id}
          title={housing.title}
          location={housing.location}
          tags={housing.tags}
        />
        <HousingRate
          rate={housing.rating}
          name={housing.host.name}
          imgSrc={housing.host.picture}
        />
      </div>
      <div className="housing__collapse__container">
        <Collapse
          label="Déscription"
          class="housing__collapse__container__desc"
          text={<p>{housing.description}</p>}
        />
        <Collapse
          label="Équipements"
          class="housing__collapse__container__equip"
          text={
            <ul>
              {housing.equipments.map((equipments, index) => (
                <li key={index}>{equipments}</li>
              ))}
            </ul>
          }
        />
      </div>
    </div>
  )
}
export default Housing
