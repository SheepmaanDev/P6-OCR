import { HousingList } from '../../data/housingList'

import Card from '../card/card'

import './gallery.sass'

// Création du composant qui gère la galerie qui contient le composant "card"
//Page "home"
const Gallery = () => {
  return (
    <div className="gallery">
      {HousingList.map((e) => (
        <Card key={e.id} id={e.id} title={e.title} cover={e.cover} />
      ))}
    </div>
  )
}
export default Gallery
