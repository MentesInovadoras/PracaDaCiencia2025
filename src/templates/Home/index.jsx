import styles from './home.module.css';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header.jsx';
import Footer from '../../components/Footer.jsx';
import visita_individual from '../images/visita_individual.jpg';
import visita_guiada from '../images/visita_guiada.jpg';
import visita_institucional from '../images/visita_institucional.jpg';

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
    <Header/>
        <div id={styles.background}>
        <div className={styles.box}>

          {/* Card 1 - Visita Individual */}
          <div className={styles.left}><img src={visita_individual} alt="Visita Individual" className={styles.card_image} />
            <h1 id={styles.left_box}>Visita Individual</h1>
            <h2 id={styles.left_box}>      </h2>
            <h2 id={styles.left_box}>      </h2>
            <button className={styles.button} onClick={() => navigate('/weekcalendar')}>
              AGENDAR
            </button>
          </div>

          {/* Card 2 - Visita Guiada */}
          <div className={styles.center}><img src={visita_guiada} alt="Visita Guiada" className={styles.card_image} />
            <h1 id={styles.center_box}>Visita Guiada</h1>
            <h2 id={styles.center_box}>até 10 pessoas</h2>
            <button className={styles.button} onClick={() => navigate('/weekcalendar')}>
              AGENDAR
            </button>
          </div>

          {/* Card 3 - Visita Institucional */}
          <div className={styles.right}> <img src={visita_institucional} alt="Visita Institucional" className={styles.card_image} />
            <h1 id={styles.right_box}>Visita Institucional</h1>
            <h2 id={styles.right_box}>Escolas e outros grupos</h2>
            <button className={styles.button} onClick={() => navigate('/weekcalendar')}>
              AGENDAR
            </button>
          </div>
        </div>
      </div>
    <Footer/>
    </>
  );
}
