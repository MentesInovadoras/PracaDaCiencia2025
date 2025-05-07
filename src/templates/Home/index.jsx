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
        {/* <section id="sobre">
          <div>
            <h2>
              Sobre a Praça da Ciência
              <p>subtitulo?</p>
            </h2>
            <p class="paragrafo">
              descrição sobre a praça da ciencia descrição sobre a praça da ciencia descrição sobre a praça da cienciadescrição
              descrição sobre a praça da ciencia descrição sobre a praça da ciencia descrição sobre a praça da cienciadescrição 
              descrição sobre a praça da ciencia descrição sobre a praça da ciencia descrição sobre a praça da cienciadescrição 
              descrição sobre a praça da ciencia descrição sobre a praça da ciencia descrição sobre a praça da cienciadescrição 
              descrição sobre a praça da ciencia descrição sobre a praça da ciencia descrição sobre a praça da cienciadescrição 
              descrição sobre a praça da ciencia descrição sobre a praça da ciencia descrição sobre a praça da cienciadescrição 
            </p>
          </div>
        </section>

        <section id="galeria">
          <div>
            <h2> Galeria de Fotos </h2>
            <p>subtitulo</p>
            <p class="paragrafo"></p>
            imagens da praça imagens da praça
          </div>
        </section>

        <section id="duvidas">
          <div>
            <h2>Ficou alguma dúvida?</h2>
            <div class="duvida">
            <h3>É permitida a entrada de animais de estimação?</h3>
            <p class="paragrafo">
              Não, não é permitida a entrada de animais de estimação...
            </p>
            </div>
          </div>
        </section>
        <section id="contato">
          <div>
            <h2>Entre em Contato Conosco</h2>
            <p class="paragrafo">
              Entre em contato conosco por meio das redes sociais ou no telefone (27) 3345-0882
            </p>
          </div>
        </section> */}
      </div>
    <Footer/>
    </>
  );
}
