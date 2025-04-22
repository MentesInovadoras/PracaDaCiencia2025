import './WeekCalendar.css';
<<<<<<< HEAD
import NumberTable from '../../components/NumberTable.jsx';
import AvailableTimes from '../../components/AvailableTimes.jsx';
import Header from '../../components/Header.jsx';
import Footer from '../../components/Footer.jsx';

export default function WeekCalendar() {
  return (
  <>  
  <Header/>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <div className='card-weekcalendar'>
    <div id="weekBackground">
      <div id="week_page">
        <div id="week_side">
          <NumberTable/>
        </div>
        <div id="card_hours">
          {/* <div id="variable_hours">
            <AvailableTimes/>
          </div> */}
        </div>
        <div id="vertical_line" />
    </div>
  </div>
  </div>

  <Footer/>
=======
// import NumberTable from '../../components/NumberTable.jsx';
// import AvailableTimes from '../../components/AvailableTimes.jsx';
import logo_weekcalendar from '../images/logo_original.png';
import logo_prefeitura_weekcalendar from '../images/Logo_PMV_nova.png';

export default function WeekCalendar() {
  return (
  <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title text-whidth="1px">Praça da Ciência</title>
  <link rel="stylesheet" href="styles/app.css" />
  <div id="weekBackground">
    <div id="week_page">
      <div id="logo_week">
        <img src={logo_weekcalendar} alt="Logo Da praça da Ciencia" id="logo_weekcalendar"/>
      </div>
      
      {/* <div id="week_side">
        <NumberTable/>
      </div>
      <div id="variable_hours">
        <AvailableTimes/>
      </div> */}
      <div id="vertical_line" />
    </div>

    <div id="logo-prefeitura_weekcalendar">
      <a href="https://www.vitoria.es.gov.br/" target ="_blank">
        <img src={logo_prefeitura_weekcalendar} alt="Logo Prefeitura" className="logo-prefeitura_weekcalendar" />
      </a>
    </div>
  </div>
>>>>>>> 5980c585aab191263e2c9d0d62ecb348dc174e9f
  </>

  );
}
