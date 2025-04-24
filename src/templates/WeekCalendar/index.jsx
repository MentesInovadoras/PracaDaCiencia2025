import './WeekCalendar.css';
import NumberTable from '../../components/NumberTable.jsx';
import AvailableTimes from '../../components/AvailableTimes.jsx';
import Header from '../../components/Header.jsx';
import Footer from '../../components/Footer.jsx';
import Mes_ano from '../../components/HeaderMonth.jsx';
import HeaderMonth from '../../components/HeaderMonth.jsx';

export default function WeekCalendar() {
  return (
  <>  
  <Header/>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <div className="card-weekcalendar">
    <div id="weekBackground">
      <h1 id="h1_data">Selecionar DATA e HORA</h1>
      
      <div id="cards">
        <div id="card_calendario">
          <div id="week_side">
            <td/>
            <NumberTable/>
          </div>
        </div>
        <div id="card_horarios">
          <div id="variable_hours">
            <AvailableTimes/>
          </div>
        </div>
      </div>   

    </div>
  </div>
  <Footer/>
  </>
  );
}
