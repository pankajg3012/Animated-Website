import React from 'react'
import Button from 'react-bootstrap/Button';
import './Help.css';
import TelegramIcon from '@mui/icons-material/Telegram';



const Help = () => {
  return (
      <>
    <h1 className='mainhead'>
     How Can I Assist You ?  
    </h1>

      <div className='HandleForm'>
      <form action="" className='formvalidate'>
     <label htmlFor="">Name 
     <input type="text" placeholder='' />
     </label>
     <label htmlFor="">Email
     <input type="email" placeholder='Enter Your Email' />
     </label>
     <label htmlFor="" className='messagebox'>
     Message </label>
     <textarea name="" id="messagebox1" cols="30" rows="3"></textarea>
    
     <button className='btn-message'>Send Message <TelegramIcon/></button>
     </form>
    </div>  
</>
  )
}

export default Help