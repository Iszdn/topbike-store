import React from 'react'
import "./index.scss"
import { Link } from 'react-router-dom'
const LoginPage = () => {
  return (
    <div id='login'>
        <div className="container">
            <div className="row">
                <div className='col-lg-5 col-md-12 col-12 login'>
<div className="CustomerLoginForm">
    <h1 className='mb-0 title_login text-center'>
    Login
    </h1>
    <form action="">
        <div className="form-group row">
<label htmlFor="" className='col-sm-3 col-form-label'>Email adress </label>
<div className="col-sm-9">
    <input type="email" className='form-control' placeholder='Email adress' />
</div>
        </div>
        <div className="form-group row">
<label htmlFor="" className='col-sm-3 col-form-label'>Password </label>
<div className="col-sm-9">
    <input type="password" className='form-control' placeholder='Password' />
</div>
        </div>
        <div className='text-center mt-5'>
            <button className='btn btn-dark'>
Log In
            </button>

        </div>
        <div className='forgot_pass_form mt-4 d-flex justify-content-center'>
<div className='leftx'>
<Link to="/shop">Return to Store</Link>
</div>
<div className='rightx'>
<Link>Forgot your password?</Link>
</div>
        </div>
    </form>
</div>
                </div>
                <div className="col-lg-1"></div>
                <div className='col-lg-5  col-md-12 col-12 login'>
<div className="CustomerLoginForm">
    <h1 className='mb-0 title_login text-center'>
    Register
    </h1>
    <form action="">
        <div className="form-group row">
<label htmlFor="" className='col-sm-3 col-form-label'>Email adress </label>
<div className="col-sm-9">
    <input type="email" className='form-control' placeholder='Email adress' />
</div>
        </div>
        <div className="form-group row">
<label htmlFor="" className='col-sm-3 col-form-label'>Password </label>
<div className="col-sm-9">
    <input type="password" className='form-control' placeholder='Password' />
</div>
        </div>
        <div className='text-center mt-5'>
            <button className='btn btn-dark'>
            REGISTER
            </button>

        </div>
        <div className='forgot_pass_form mt-4 d-flex justify-content-center'>

<div className='rightx'>
<Link>Return to Store</Link>
</div>
        </div>
    </form>
</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LoginPage