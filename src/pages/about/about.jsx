import Banner from '../../components/banner/banner'
import GalleryCollapse from '../../components/galleryCollapse/galleryCollapse'

import './about.sass'

import BannerAbout from '../../assets/bannerAbout.png'

// Création de la page "about"
// Affiche les composants "banner" et "galleryCollapse"
const About = () => {
  return (
    <div className="about">
      <Banner imgSrc={BannerAbout} class=" img-about" alt="Banner about" />
      <GalleryCollapse />
    </div>
  )
}
export default About
