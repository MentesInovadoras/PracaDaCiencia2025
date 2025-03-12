import styles from './home.module.css';
import logo_desenho from '../images/logo_desenho.png';
import logo_texto from '../images/logo_texto.png';
import background from '../images/img1.jpg';

// Imagens específicas de cada card
import visita_individual from '../images/visita_individual.jpg';
import visita_guiada from '../images/visita_guiada.jpg';
import visita_institucional from '../images/visita_institucional.jpg';

export default function Home() {
  return (
    <>
    
        <div id={styles.background} style={{ backgroundImage: `url(${background})` }}>
          <div>
            <img src={logo_desenho} alt="Logo" className={styles.logo_desenho} />
            <img src={logo_texto} alt="Logo" className={styles.logo_texto} />
          </div>
        <div className={styles.box}>

          {/* Card 1 - Visita Individual */}
          <div className={styles.left}> <img src={visita_individual} alt="Visita Individual" className={styles.card_image} />
            <h1 id={styles.left_box}>Visita Individual</h1>
            <h2 id={styles.center_box}>   </h2>
            <button className={styles.button}>AGENDAR</button>
          </div>

          {/* Card 2 - Visita Guiada */}
          <div className={styles.center}><img src={visita_guiada} alt="Visita Guiada" className={styles.card_image} />
            <h1 id={styles.center_box}>Visita Guiada</h1>
            <h2 id={styles.center_box}>até 10 pessoas</h2>
            <button className={styles.button}>AGENDAR</button>
          </div>

          {/* Card 3 - Visita Institucional */}
          <div className={styles.right}> <img src={visita_institucional} alt="Visita Institucional" className={styles.card_image} />
            <h1 id={styles.right_box}>Visita Institucional</h1>
            <h2 id={styles.right_box}>Escolas e outros grupos</h2>
            <button className={styles.button}>AGENDAR</button>
          </div>

        </div>
      </div>
    </>
  );
}
