import './banner.sass'

//Création du composent qui gère les bannières
//Pages "home" et "about"
const Banner = (props) => {
  return (
    <div className="banner">
      <div className={'banner__container' + props.class}>
        <img
          className="banner__container__img"
          src={props.imgSrc}
          alt={props.alt}
        />
      </div>
      <div className="banner__paragraph">{props.title}</div>
    </div>
  )
}

export default Banner
