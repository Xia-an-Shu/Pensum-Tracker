import './navbar.scss';
import { FormattedMessage } from 'react-intl';

function Navbar() {
  return (
    <div id='logo__container'>
      <h1 id='pensum__tracker'>Pensum Tracker®</h1>
      <div id='profile__container'>
        <FormattedMessage id='Perfil'/>
      </div>
    </div>
  );
}

export default Navbar;