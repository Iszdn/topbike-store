import React, { useContext, useState } from "react";
import "./index.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Register from "./Register";
import { AuthContext } from "../../context/authContext";
const LoginPage = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { setToken } = useContext(AuthContext);

    async function handleLogin(e) {
        e.preventDefault();
      try {
        const res = await axios.post("http://localhost:5000/user/login",{
          email:email,
          password:password
        })
        const data=res.data
        setToken(data)
      
      } catch (error) {
        console.error('Error during login:', error);
      }
      
        }
  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div id="login">
        <div className="container">
          <div className="row">
            {/* Login start  */}
            <div className="col-lg-5 col-md-12 col-12 login">
              <div className="CustomerLoginForm">
                <h1 className="mb-0 title_login text-center">Login</h1>
                <form onSubmit={handleLogin}>
                  <div className="form-group row">
                    <label className="col-sm-3 col-form-label">
                      Email adress{" "}
                    </label>
                    <div className="col-sm-9">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email adress"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="text-center mt-5">
                    <button type="submit" className="btn btn-dark">
                      Log In
                    </button>
                  </div>
                  <div className="forgot_pass_form mt-4 d-flex justify-content-center">
                    <div className="leftx">
                      <Link to="/shop">Return to Store</Link>
                    </div>
                    <div className="rightx">
                      <Link>Forgot your password?</Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-1"></div>
            {/* Login end  */}

            {/* Register start  */}

            <div className="col-lg-5  col-md-12 col-12 login">
              <Register/>
            </div>

            {/* Register end  */}
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
