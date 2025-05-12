import './weekCalendar.css';
import NumberTable from '../../components/NumberTable.jsx';
import AvailableTimes from '../../components/AvailableTimes.jsx';
import Header from '../../components/Header.jsx';
import Footer from '../../components/Footer.jsx';
import { useNavigate, useLocation } from 'react-router-dom';

export default function WeekCalendar() {
  const navigate = useNavigate();
  const location = useLocation();

  const tipo = location.state?.tipo || 'individual';

  function handleClick() {
    navigate(`/agendamento/${tipo}`);
  }
  return (
  <>  
  <Header/>
  <div className="weekcalendar">
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
      <button type="button" id="botao_continuar_calendario" onClick={handleClick}>
        AGENDAR
      </button>
    </div>
  <Footer/>
  </>
  );
}
