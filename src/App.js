import cardbg from './images/bg-card-back.png';
import logo from './images/card-logo-circle.svg';
import thanks from './images/icon-complete.svg';
import './App.scss';

function App() {

  return (
   <section className='int-card'>
      <section className='int-card-bg'>
        <img src={cardbg} alt=''/>
        <strong>000</strong>
      </section>

      <section className='int-card-user'>
        <div className='card-logo'>
          <img src={logo} alt=''/>
        </div>
        <div className='card-no'>
          <strong>0000 0000 0000 0000</strong>
        </div>
        <div className='card-holder'>
          <summary>Jane Appleseed</summary>
          <strong><span>00/</span>00</strong>
        </div>
      </section>

      <section className='int-card-form'>
        <form className='form'>
          <label htmlFor='name'>Cardholder Name</label>
          <input type='text' id='name' value='' placeholder='e.g. Jane Appleseed' ></input>
          <label htmlFor='cardNumber'>Card Number</label>
          <input type='text' id='cardNumber' value='' placeholder='e.g. 1234 5678 9123 0000' ></input>
          <div className='usercard'>
            <div className='month'>
              <label htmlFor='month'>Exp. Date</label>
              <input type='text' id='month' value='' placeholder='MM'></input>
            </div>
            <div className='year'>
              <label htmlFor='year'>(MM/YY)</label>
              <input type='text' id='year' value='' placeholder='YY'></input>
            </div>
            <div className='cvc'>
              <label htmlFor='cvc'>CVC</label>
              <input type='password' id='cvc' value='' placeholder='e.g. 123'></input>
            </div>
          </div>
          <button>Confirm</button>
        </form>
      </section>

      <section className='thankYou'>
          <img src={thanks} alt='thanks'/>
          <h1>Thank you!</h1>
          <p>We've added your card details</p>
          <button>Continue</button>
      </section>
   </section>
  );
}

export default App;
