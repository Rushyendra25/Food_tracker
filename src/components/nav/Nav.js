import React from 'react'
import './Nav.css'
import {Link, useNavigate} from 'react-router-dom'
import {auth} from '../../firebase-cofig'
import { signOut } from 'firebase/auth'

function Nav(props) {
  let navigate=useNavigate()
  const logout=async ()=>{
    await signOut(auth);
    navigate('/login')
  }
  <style>
@import url('https://fonts.googleapis.com/css2?family=Alegreya+SC:wght@500&display=swap');
</style>
  return (
    <nav className="navbar navbar-expand-md navbar-light">
  <Link className="navbar-brand" to="/"> <img src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/v1479829522/bxpgav8mvdsibvxctd1d.jpg" alt="" width={"100px"} height={"50px"} className="mx-3 " /></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto ">
    <li className="nav-item active">
        <Link className="nav-link mx-3 text-white  navbarlinks"  to="/">Home</Link>
      </li>
      {
         props.user?.email &&
      <li className="nav-item active">
        <Link className="nav-link mx-3 text-white navbarlinks" to="/adddiet">Add your diet</Link>
      </li>

      } 
      {
        props.user?.email &&
        <li className="nav-item active">
        <Link className="nav-link mx-3 text-white navbarlinks" to="/bmi">YOUR BMI</Link>
      </li>
      }

      {
        props.user?.email &&
      <li className="nav-item">
        <Link className="nav-link mx-3 text-white navbarlinks" to="/userList">Diet Analysis</Link>
      </li>
      }
      {
       !props.user?.email &&
      <li className="nav-item active">
        <Link className="nav-link mx-3 text-white navbarlinks"  to="/register">Register</Link>
      </li>
      }
      
      {
      !props.user?.email  &&
     <li className="nav-item active">
       <Link className="nav-link max-3 text-white navbarlinks" to="/login" >Login</Link>
      </li>
     }
      <li className='nav-item text-white'>
      {
        props.user?.email
      }
{
    props.user?.email && <button className='btn btn-light mx-4' onClick={logout}>Log out</button>
}
     </li>
    </ul>
    
  </div>
</nav>
  )
}

export default Nav;