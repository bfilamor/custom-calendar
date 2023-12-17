import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap'
import { Calendar } from './components/calendar/Calendar';
import { Datepicker } from './components/datepicker/Datepicker';
import { useState } from 'react';
import * as dateFns from 'date-fns';
import { Footer } from './components/layout/Footer';

function App() {

  const [date, setDate] = useState('');
  const [sampleDate, setSampleDate] = useState('');
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

          <h3 className='text-center mb-0'>Full Width</h3>
          <p className='text-center'>(with handleChange prop enabled)</p>
          {(sampleDate) ?
            <p className='text-center fs-5'><strong>Selected Date: </strong>{dateFns.format(sampleDate, 'eee MMM dd,yyyy')}</p>
            : null
          }
          <Calendar fullWidth handleChange={(newDate) => setSampleDate(newDate)} />
        </Container>

      </section>
      <Footer/>
    </>
  );
}

export default App;
