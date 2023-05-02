import '../content.css';
import Titre from './titre';

function Content ({ children }) {
  return (
    <div className='flexCont'>
      <Titre text="BIENVENUE AUX FINS GOURMETS" />
      {children}
    </div>
  );
}

export default Content;