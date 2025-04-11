import './WeekCalendar.css';
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
  </>

  );
}
