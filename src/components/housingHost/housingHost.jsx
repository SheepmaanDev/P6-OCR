import './housingHost.sass'

//Création du composant qui gère le titre, le lieux et les tags
//Page "housing"
const HousingHost = (props) => {
  return (
    <div className="housing__locationTags">
      <div className="housing__locationTags__title">
        <h1 className="housing__locationTags__title__h1">{props.title}</h1>
        <p className="housing__locationTags__title__city">{props.location}</p>
      </div>
      <ul className="housing__locationTags__tags">
        {/* Itération du tableau contenu dans
        la props "tags" et affiche chaque element */}
        {props.tags.map((e, index) => (
          <p
            className="housing__locationTags__tags__list"
            key={`${props.id}-${index}`}
          >
            {e}
          </p>
        ))}
      </ul>
    </div>
  )
}
export default HousingHost
