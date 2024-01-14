import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Register = () => {

    const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleRegister=async (email,password)=>{
    const res=await fetch("http://localhost:5000/user/register",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
    body:JSON.stringify({email,password}),
    });

    const data=await res.json()
    console.log(data);
  };
  
  const HandleSubmit=(e)=>{
    e.preventDefault()
    setPassword("")
    setEmail("")
    console.log(email,password);
    handleRegister(email,password);
  }

  return (
    <div className="CustomerLoginForm">
    <h1 className="mb-0 title_login text-center">Register</h1>
    <form onSubmit={HandleSubmit}>
      <div className="form-group row">
        <label className="col-sm-3 col-form-label">
          Email adress{" "}
        </label>
        <div className="col-sm-9">
          <input
            type="email"
            className="form-control"
            placeholder="Email adress"
            value={email} onChange={(e)=>setEmail(e.target.value)} 
          />
        </div>
      </div>
      <div className="form-group row">
        <label className="col-sm-3 col-form-label">Password </label>
        <div className="col-sm-9">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={password} onChange={(e)=>setPassword(e.target.value)}
          />
        </div>
      </div>
      <div className="text-center mt-5">
        <button type="submit" className="btn btn-dark">
          REGISTER
        </button>
      </div>
      <div className="forgot_pass_form mt-4 d-flex justify-content-center">
        <div className="rightx">
          <Link to="/shop">Return to Store</Link>
        </div>
      </div>
    </form>
  </div>
  )
}

export default Register