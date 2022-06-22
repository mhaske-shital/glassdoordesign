import React from 'react'
import "./main.css"
export default function Home() {
  return (
    <>
<nav class="navbar fw-normal">
  <div class="container-fluid">
    <div  class="d-flex" >
    <a class="navbar-brand ms-5 fw-bold text-success">glassdoor</a>
    <a class="navbar-brand ms-5">Jobs</a>
    <a class="navbar-brand">Companies</a>
    <a class="navbar-brand">Salaries</a>
    <a class="navbar-brand">Careers</a>
    </div>
    <form class="d-flex" role="search">
      <a class="navbar-brand">ForEmployers</a>
      <a class="navbar-brand"><i class="bi bi-briefcase ms-1"></i> Post Jobs</a>
      <a class="navbar-brand">Sign IN</a>
    </form>
  </div>
</nav>

<div className='backgroundcontainer '>
 
  <div className="d-flex justify-content-center text-light ">
    
    <h1 className='mt-5'><br />You deserve a job that loves you back</h1>
  </div>
  <div className='d-flex justify-content-center text-light mt-2'>
 <span>By continuing, you agree to our <span className='text-decoration-underline'>Terms of Use </span>  and  <span className='text-decoration-underline'> Privacy Policy.</span></span>
  </div>
  {/* <div className='d-flex justify-content-center text-light '>
    <div  class="btn btn-primary box align-top"><span className='bi bi-facebook d-flex justify-content-start'></span> Continue with Facebook</div>
  </div> */}

  <div className='d-flex justify-content-center text-light'>
    <div className='bg-primary box'>
      
    <span >&nbsp;<i className='bi bi-facebook px-2 w-25 '></i></span> 
    <span className='ms-5 ' > &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; Continue with Facebook</span>
    </div>
  </div>

  <div className='d-flex justify-content-center text-light mt-3 '>
    <div className='box bg-light'>
      
    <span >&nbsp;<a href="https://www.google.com" target="_blank" className='px-2'>
     <img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png" alt=""/> </a></span> 
    <span className='ms-5 text-danger' > &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; Continue with Facebook</span>
    </div>
  </div>

<div className='d-flex justify-content-center'>
 <div class="mx-5 my-5  bordert box d-flex justify-content-center"></div>
</div>

<div className='d-flex justify-content-center mt-0'>
<div class="input-icons box">
        <i class="fa fa-envelope icon"></i>
        <input class="input-field" type="text"/>
        </div>

 </div>

 <div className='d-flex justify-content-center mt-2'>
<div class="input-icons box">
        <i class="fa fa-user icon "></i>
        <input class="input-field" type="password"/>
        </div>

 </div>
 
 <div className="d-flex justify-content-center mt-2">
  <button className='btn btn-primary'>Continue With Email</button>
 </div>
  
 </div>
<div className="alert alert-danger  d-flex justify-content-center">
  <span className='text-danger '> NEW !</span><span className='ms-5'>Dive into anonymous, candid conversations with a community of professionals ike you.<span className='text-primary'>Fishbowl by Glassdoor</span></span>
</div>

<div >
  <h1 className='d-flex justify-content-center'>How Glassdoor Works for You</h1>
  <span className='d-flex justify-content-center text-center'>Glassdoor has millions of personlised jobs salary information.company review and interview question - all posted anonymously by employees and job seekers like you Lorem ipsum dolor sit amet consectetur adipisicing elit. quibusdam temporibus libero laboriosam architecto obcaecati.</span>
</div>
    </>
  )
}
