import React from 'react'
import {useState} from 'react'
import {set, useForm} from 'react-hook-form'
function Bmi() {
    let {register,handleSubmit,formState:{errors}}=useForm();
    let [bmi,setBmi]=useState(0)

    let submitForm=(userObj)=>{
          
              let W = userObj.Weight;
              let H = userObj.Height;
              let bmis = W/(H*H);
              setBmi(bmis);
              
          } 
  
  return (
    
     
     <div className="row ">

          <div className="col-11 col-sm-8 col-md-6   mx-auto  mt-5">
          <div className="container  rounded w-2 bg-white">
          
           <h1 className=" text-danger opacity-75 display-5">Enter your BMI </h1>


          
        <form onSubmit={handleSubmit(submitForm)} className="mt-5 mb-5 shadow rounded p-5">
        <label htmlFor='Height' className='text-black opacity-75'>Height(in Meters) </label>
        <input type="text" className="form-control mb-3" id='Height' 
        {...register("Height",{required:true})}/>

        {errors.Height?.type==="required" && <p className="text-danger ">*Height is required</p>}

        <label htmlFor='Weight' className='text-black opacity-75'>Weight(in KG) </label>
        <input type="text" className="form-control mb-3" id='Weight' 
        {...register("Weight",{required:true})}/>

        {errors.Weight?.type==="required" && <p className="text-danger ">*Weight is required</p>}
           
            <button type="submit"  className="btn btn-danger mt-3">Calculate</button>
            </form>
          
            </div>
          </div>  
          <div className='text-center'>
            <h2>Your BMI is : </h2>
          <h5 className='text-danger'>{bmi}</h5>
            <h2>You Come Under : </h2>
            {bmi<18.5 && <h5 className='text-danger'>UnderWeight</h5>}
            {(bmi>18.5 && bmi<24.9 )&& <h5 className='text-danger'>Healthy Weight</h5>}
            {(bmi<29.9 && bmi>25) && <h5 className='text-danger'>OverWeight</h5>}
            {bmi>30 && <h5 className='text-danger'>Obesity</h5>}
            </div> 
          </div>
        
      
)
        }
export default Bmi;