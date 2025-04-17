import './WeekCalendar.css';
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
  </>

  );
}
