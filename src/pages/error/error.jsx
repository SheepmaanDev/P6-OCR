import { Link } from 'react-router-dom'

import './error.sass'

// Création de la page "error"
const Error = () => {
  return (
    <div className="error">
      <h1 className="error__title">404</h1>
      <p className="error__paragraph">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link className="error__link" to="/">
        Retour à la page d'accueil
      </Link>
    </div>
  )
}
export default Error
