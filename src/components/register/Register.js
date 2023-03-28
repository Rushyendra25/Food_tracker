import React from 'react'
import {useForm} from 'react-hook-form'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../../firebase-cofig'
import {useNavigate,Link} from 'react-router-dom'
import './Register.css'
function Register(props) {
  const navigate=useNavigate();
    let {register,handleSubmit,formState:{errors}}=useForm();
   let submitForm= async(userObj)=>{
            console.log(userObj);
            try{
            const user= await createUserWithEmailAndPassword(auth,userObj.email,userObj.password);
            
             navigate('/createUser');
              
            }catch(err)
            {
              console.log(err.message);
            }

        }  

   
  return (
    <div className='register'  >
    
       <div className="">
 

    <form onSubmit={handleSubmit(submitForm)} className="mt-5 fo shadow  ">
    <h1 className="mb-3 text-danger opacity-75 fw-bold fs-1 display-5 mb-5 ">REGISTER</h1>
    
    <input type="text" className="form-control mb-3 p-3 inp" placeholder="Username" 
      {...register("email",{required:true,minLength:"4"})}/>

      {errors.username?.type==="required" && <p className="text-danger ">*Username is required</p>}
      {errors.username?.type==="minLength" && <p className="text-danger ">*minimum 4 characters are required</p>}
      {errors.username?.type==="maxLength" && <p className="text-danger ">*maximum 8 characters are required</p>}

      <input type="password" className="form-control mb-3 p-3 inp" placeholder="Password" 
      {...register("password",{required:true,minLength:"4"})}/>
      {errors.password?.type==="required" && <p className="text-danger ">*Password is required</p>}
      {errors.password?.type==="minLength" && <p className="text-danger ">*minimum 4 characters are required</p>}
      {errors.password?.type==="maxLength" && <p className="text-danger ">*maximum 8 characters are required</p>}
      
      <div className=''>
      <button type="submit" className="btn btn-danger mt-3 mb-5 ">Register</button>
      </div>
      </form>

       </div>
      </div>
    
  )
}

export default Register;