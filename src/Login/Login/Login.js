import React from 'react';
import useAuth from '../../hooks/useAuth';

import { Container } from 'react-bootstrap';
import initializeAuthentication from '../Firebase/firebase.init';


initializeAuthentication();

const Login = () => {
  const { googlehandle } = useAuth();
  const { handleRegistration } = useAuth();
  const { handleEmail } = useAuth();
  const { handlePassword } = useAuth();
  const { handleName } = useAuth();
  const { login } = useAuth();
  const { toggle } = useAuth();


  
    return (
      <>
        <Container>
          <form onSubmit={handleRegistration}>
        <h1 className="mt-5 text-lg-center py-3">Please {login ? 'Login' : 'Register'}</h1>
            {!login && 
              <input className="mx-auto d-block" type="text" placeholder="Enter your name"onBlur={handleName}/>
            }
            <br />
        <input className="mx-auto d-block" type="email" placeholder="Enter your email"onBlur={handleEmail}/> <br />
        <input className="mx-auto d-block" type="password"  onBlur={handlePassword} placeholder="Enter your password" /><br />
        <div className="row mb-3">
    <div className="col-lg-5 offset-sm-5">
      <div className="form-check">
        <input onChange={toggle} className="form-check-input" type="checkbox" id="gridCheck1"/>
        <label className="form-check-label" htmlFor="gridCheck1">
          Already Registered?
        </label>
      </div>
    </div>
        </div>

        <button type="submit" className="btn mx-auto d-block btn-primary px-5 fw-bold">{login ? 'Login' : 'Register'}</button><br />
        </form>
            <button className="btn mx-auto d-block btn-primary fw-bold"onClick={googlehandle}>Google Sign In</button>
            <br />
          </Container>
        </>
    );
};

export default Login;