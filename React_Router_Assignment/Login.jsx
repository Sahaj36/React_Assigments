import React, { useContext } from 'react'
import './style.css';
import { AppDetails } from './App';
import { useNavigate } from 'react-router-dom';
// import { Button } from 'react-bootstrap';


function Login() {

  const { setLogin } = useContext(AppDetails);
  const navigate = useNavigate()

   function userLogin() {
    setLogin(true)
    localStorage.setItem("login", "true");
    navigate("/")
  }

  return (
    <>
    <video autoPlay muted loop id='myvideo' type="video/mp4" src="https://cdn.pixabay.com/vimeo/521707474/ink-67358.mp4?width=1280&hash=56cd9a58622870d95536af76f454ee6274145f8e">
      </video>
    <div className="container py-5" id='content'>
      <div className="row">
        <div className="col-md-4 offset-md-3 border border-1 shadow rounded-3 py-4" style={{margin: "130px auto"}}>
            <h4 className='mb-4'>Login :</h4>
            <form action="">
                <div className='mb-4'>
                    <label htmlFor="">Email :</label>
                    <input type="text" name="Email" id="email" className='form-control' placeholder='Enter Email' />
                </div>
                <div className='mb-4'>
                    <label htmlFor="">Password :</label>
                    <input type="password" name="password" id="password" className='form-control' placeholder='Enter Password'/>
                </div>
                <button className='btn btn-success form-control' onClick={() => userLogin()} >Submit</button>
                {/* <Button variant='success' size='xl' className='form-control'>Submit</Button> */}
            </form>
        </div>  
      </div>
    </div>
</>
  )
}

export default Login
