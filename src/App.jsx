import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap'
import { Calendar } from './components/calendar/Calendar';
import { Datepicker } from './components/datepicker/Datepicker';
import { useState } from 'react';

function App() {

  const [date, setDate] = useState('');
  return (
    <>
      <section className='bg-light min-vh-100 py-5'>
        <Container>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='row justify-content-center'>
                <div className='col-xl-6 col-md-8'>
                  <h3 className='text-center'>Date Picker</h3>
                  <Datepicker handleChange={(newDate) => setDate(newDate)} value={date} />
                </div>
              </div>
            </div>
            <div className='col-lg-6'>
              <h3 className='text-center'>Default Size</h3>
              <Calendar />
            </div>
          </div>

          <h3 className='text-center'>Full Width</h3>
          <Calendar fullWidth />
        </Container>

      </section>

    </>
  );
}

export default App;
