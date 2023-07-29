import { textCollapse } from '../../data/textCollapse'
import Collapse from '../collapse/collapse'

import './galleryCollapse.sass'

// Création du composant qui gère la galerie qui contient le composant "collapse"
//Page "about"
const GalleryCollapse = () => {
  return (
    <div className="gallery__collapse">
      {textCollapse.map((e) => (
        <Collapse
          key={`${e.label}-${e.content}`}
          label={e.label}
          text={<p>{e.content}</p>}
        />
      ))}
    </div>
  )
}
export default GalleryCollapse
