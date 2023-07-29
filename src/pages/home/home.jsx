import Banner from '../../components/banner/banner'
import Gallery from '../../components/gallery/gallery'

import './home.sass'

import BannerHome from '../../assets/bannerHome.png'

// Création de la page "home"
// Affiche les composants "banner" et "gallery"
const Home = () => {
  const title = 'Chez vous, partout et ailleurs'
  return (
    <div className="home">
      <Banner title={title} imgSrc={BannerHome} class="" alt="Banner Home" />
      <Gallery />
    </div>
  )
}
export default Home
