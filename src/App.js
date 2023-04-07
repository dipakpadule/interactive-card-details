import cardbg from './images/bg-card-back.png';
import logo from './images/card-logo-circle.svg';
import thanks from './images/icon-complete.svg';
import './App.scss';

import { useState , useEffect } from 'react';

function App() {

  const initialcardData = {fullname:'', cardNumber:'', month:'', year:'', cvc:''};
  const [cardData, setCardData] = useState(initialcardData);
  const [dataError, setDataError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const [fname, setFname] = useState('appa patil');
  const [cardno, setCardNo] = useState('0000 0000 0000 0000');
  const [month, setMonth] = useState('04');
  const [year, setYear] = useState('23');
  const [cvc, setCVC] = useState('000');

  //
  const onContinue = ()=>{
    setIsSubmit(false);
  };

  //handling user entered data
  const handleUserData = (e)=>{
    const {name, value} = e.target;
    setCardData({...cardData, [name]:value});
  };

   //form data submission
   const handleSubmit = (e)=>{
    e.preventDefault();
    setDataError(userDataValidation(cardData));
    if(Object.keys(dataError).length === 0){
      setCardDispData(cardData);
    }
    setIsSubmit(true);
  };

  useEffect(()=>{
    if(Object.keys(dataError).length === 0 && isSubmit){
    }
  },[cardData, dataError, isSubmit]);

  const userDataValidation = (data)=>{
    const error = {};
    
    if(!data.fullname){
      error.fullname = "name cannot be empty";
    }
    if(!data.cardNumber){
      error.cardNumber = "Please enter card no";
    }else if(data.cardNumber.length !== 16){
      error.cardNumber = "Please enter 16 digit card no";
    }
    if(!data.month){
      error.month = "month cannot be empty";
    }else if(!(data.month >= 1 && data.month <= 12)){
      error.month = 'please enter valid month';
    }
    if(!data.year){
      error.year = "year cannot be empty";
    }else if(!(data.year >= 23)){
      error.year = 'please enter valid year';
    }
    if(!data.cvc){
      error.cvc = 'enter cvc';
    }else if(data.cvc.length !== 3){
      error.cvc = 'CVC is alway 3digit'
    }
    return error;
  }

  const setCardDispData = (data)=>{
    setFname(data.fullname);
    setCardNo(data.cardNumber.toString().replace(/\d{4}(?=.)/g, '$& '));
    setMonth(data.month);
    setYear(data.year);
    setCVC(data.cvc);
  };

  return (
   <section className='int-card'>
      <section className='int-card-bg'>
        <img src={cardbg} alt=''/>
        <strong>{cvc}</strong>
      </section>

      <section className='int-card-user'>
        <div className='card-logo'>
          <img src={logo} alt=''/>
        </div>
        <div className='card-no'>
          <strong>{cardno}</strong>
        </div>
        <div className='card-holder'>
          <summary>{fname}</summary>
          <strong><span>{month}/</span>{year}</strong>
        </div>
      </section>

      <section className={isSubmit ? 'int-card-form thankyou' : 'int-card-form thankyou1'}>
        <form className='form' onSubmit={handleSubmit}>
          <label htmlFor='fullname'>Cardholder Name</label>
          <input type='text' id='fullname' name='fullname' placeholder='e.g. Jane Appleseed' onChange={handleUserData}></input>
          <p className='error'>{dataError.fullname}</p>
          <label htmlFor='cardNumber'>Card Number</label>
          <input type='number' id='cardNumber' name='cardNumber' placeholder='e.g. 1234 5678 9123 0000' onChange={handleUserData}></input>
          <p className='error'>{dataError.cardNumber}</p>
          <div className='usercard'>
            <div className='month'>
              <label htmlFor='month'>Exp. Date</label>
              <input type='number' id='month' name='month' placeholder='MM' onChange={handleUserData}></input>
              <p className='error'>{dataError.month}</p>
            </div>
            <div className='year'>
              <label htmlFor='year'>(MM/YY)</label>
              <input type='number' id='year' name='year' placeholder='YY' onChange={handleUserData}></input>
              <p className='error'>{dataError.year}</p>
            </div>
            <div className='cvc'>
              <label htmlFor='cvc'>CVC</label>
              <input type='password' id='cvc' name='cvc' placeholder='e.g. 123' onChange={handleUserData}></input>
              <p className='error'>{dataError.cvc}</p>
            </div>
          </div>
          <button>Confirm</button>
        </form>
      </section>

      <section className={isSubmit ? 'thankYou nothanks': 'thankYou nothanks1'}>
          <img src={thanks} alt='thanks'/>
          <h1>Thank you!</h1>
          <p>We've added your card details</p>
          <button onClick={onContinue}>Continue</button>
      </section>
   </section>
  );
}

export default App;
