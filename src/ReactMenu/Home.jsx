import React from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import imag from '../Images/Learning.jpg'
import   './Home.css';


const Home = () => {
  return (
    <>
<section id='header' className='d-flex align-items-center'>
<div className='container-fluid nav-bg'>
<div className="row">
<div className='col-10 mx-auto'>
<div className="row">
<div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
<h1 className='type-writer'>Grow Your Business With <strong className='brand-name'> Team Developers</strong>
</h1>
<h2 classname='my-3'>We Have Talented Developers Team They 
Can Complete Ur Project Within 30 Days</h2>
<div className='mt-3'>
<NavLink to='Service' className='btn-get-started'>Get Started</NavLink>
</div>
</div>
<div className='col-lg-6 order-1 order-lg-2 header lg'>
<img className='images-detail' src={imag} alt=""  width={100} height={100}/>
</div>
</div>
</div>
</div>
</div>

</section>
</>

  )
}

export default Home