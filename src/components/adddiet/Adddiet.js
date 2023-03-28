import React from 'react'
import {useState} from 'react'
import {set, useForm} from 'react-hook-form'
import axios from 'axios'
function Adddiet() {
    let [pr,setpr] = useState(0)
    let [r,setr]=useState(0);
    let {register,handleSubmit,formState:{errors}}=useForm();

  let calculate=(userObj)=>{
  let sum = 0 ;
  
  let Lunch={
    "rice"  :121,
    "parota" : 268,
    "chapati":72,
    "salads":15,
    "biryani":368,
    "none":0
  }
  let Breakfast = {
    "idly" : 69,
    "dosa" : 106,
    "bonda":40,
    "mysorebonda":60,
    "punugulu":20,
    "poori":141,
    "vada":97,
    "pulihora":204,
    "oats":154,
    "none":0

    
}
let Snacks = {
  "pizza":180,
  "burger":170,
  "icecream":279,
  "panipoori":100,
  "fruits":150,
  "chips":150,
  "none":0

}
let Dinner={
  "rice" : 10,
  "roti": 120,
  "chapati":72,
  "friedrice":228,
  "none":0
}

  let a = parseInt(userObj.qty2) * Lunch[String(userObj.Lunch)] ;
  sum += a ;
   a  = parseInt(userObj.qty) * Breakfast[String(userObj.Breakfast)];
  sum += a ;
   a = parseInt(userObj.qty3) * Snacks[String(userObj.Snacks)];
  sum += a ;
  a = parseInt(userObj.qty4) * Dinner[String(userObj.Dinner)];
  sum += a ;

  userObj.calories = sum ;
  setpr(sum);
  return userObj;
  }
   
   let submitForm=(userObj)=>{
      console.log(userObj)
            let Newuser = calculate(userObj)
            axios.post("http://localhost:4000/Food",Newuser)
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
            setr(1);
        }  ;
        
         
    return (
    <div className='formbg'>  
    {
    r==1 && <h2 className=' text-center display-5 text-success'>Details Added Successfully</h2>
    }
          
          <div className="row ">

          <div className="col-11 col-sm-8 col-md-6   mx-auto  mt-5">
          <div className="container  rounded w-2 bg-white">
          
           <h1 className=" text-danger opacity-75 display-5">Add your diet details</h1>


          <form onSubmit={handleSubmit(submitForm)} className="mt-5 mb-5 shadow rounded p-5">

          <label htmlFor='date' className='text-black opacity-75 mb-2'>Date</label>
          <br></br>
          <input type={"date"} id='date' className="mb-2" placeholder={"Enter Today's Date"} {...register("date",{required:true})}></input>
          <br></br>
          {errors.date?.type==="required" && <p className="text-danger ">*Date is required</p>}

            <label htmlFor='Breakfast' className='text-black opacity-75'> Breakfast</label>
    
           
            <select {...register("Breakfast",{required:true})} className="form-select " defaultValue={"Idly"} id='Breakfast'>
    
                   <option value="DEFAULT" disabled>Choose dish</option>
                   
                   <option value="idly">Idly</option>
                   <option value="dosa">Dosa</option>
                   <option value="vada">Vada</option>
                   <option value="poori">poori</option>
                   <option value="mysorebonda">Mysore Bonda</option>
                   <option value="punugulu">punugulu</option>
                   <option value="oats">Oats(per serving)</option>
                   <option value="punugulu">punugulu</option>
                   <option value="pulihora">pulihora(per serving)</option>
                   <option value="none">None</option>


            </select>
            {errors.Breakfast?.type==="required" && <p className="text-danger ">*Breakfast details is required</p>}

            <input type="text" className="form-control mb-2 mt-2" id='qty' placeholder='Enter Quantity'
            {...register("qty",{required:true})}/>
            <br></br>
            {errors.qty?.type==="required" && <p className="text-danger ">Should be Greater than zero</p>}
           
            <label htmlFor='Lunch' className='text-black opacity-75'> Lunch</label>
    
            {errors.Lunch?.type==="required" && <p className="text-danger ">*Lunch details is required</p>}

            <select {...register("Lunch",{required:true})} className="form-select " defaultValue={"Rice"} id='Lunch'>

                   <option value="DEFAULT" disabled>Choose dish</option>
                   <option value="rice">Rice(per serving)</option>
                   <option value="chapati">chapati</option>
                   <option value="parota">Parota</option>
                   <option value="salads">Salads</option>
                   <option value="biryani">biryani(per serving)</option>
                   <option value="none">None</option>
            </select>
            <input type="text" className="form-control mb-2 mt-2" id='qty2' placeholder='Enter Quantity'
            {...register("qty2",{required:true,min:0})}/>
            <br></br>
            <label htmlFor='Snacks' className='text-black opacity-75'> Snacks</label>
    
            {errors.Snacks?.type==="required" && <p className="text-danger ">*Snacks details is required</p>}

            <select {...register("Snacks",{required:true})} className="form-select " defaultValue={"Ice Cream"} id='Snacks'>
    
                   <option value="DEFAULT" disabled>Choose dish</option>
                   <option value="icecream">Ice Cream</option>
                   <option value="burger">Burger</option>
                   <option value="pizza">Pizza</option>
                   <option value="panipoori">Pani Poori</option>
                   <option value="fruits">Fruits</option>
                   <option value="chips">chips</option>
                   <option value="none">None</option>
            </select>
            <input type="text" className="form-control mb-2 mt-2" id='qty3' placeholder='Enter Quantity'
            {...register("qty3",{required:true})}/>
            <br></br>
            <label htmlFor='Dinner' className='text-black opacity-75'>Dinner</label>
    
            {errors.Dinner?.type==="required" && <p className="text-danger ">*Dinner details is required</p>}

            <select {...register("Dinner",{required:true})} className="form-select " defaultValue={"Rice"} id='Dinner'>
      
                   <option value="DEFAULT" disabled>Choose dish</option>
                   <option value="rice">Rice(per serving)</option>
                   <option value="chapati">chapati</option>
                   <option value="roti">Roti</option>
                   <option value="friedrice">Fried Rice(per serving)</option>
                   <option value="none">None</option>
            </select>

            <input type="text" className="form-control mb-2 mt-2" id='qty4' placeholder='Enter Quantity'
            {...register("qty4",{required:true})}/>

            <br />
           
            <button type="submit" className="btn btn-danger mt-3">Add</button>
            </form>
            </div>
          </div>  
          </div>

        
        {  r==1 &&   <div className='text-center'>
          <h2>Your Calorie Consumption For The Day is : </h2>
          <h2 className='text-primary'>{pr}</h2>
          {(pr>=2000&&pr<=3000)&& <h4 className='text-success'>Your Daily Limit of Calorie Intake is Reached.Please Maintain This.</h4>}
          {(pr<2000&&pr!=0)&& <h4 className='text-warning'>Your Daily Limit of Calorie Intake is Low.Please Increase Your Energy Consumption</h4>}
          {pr>3000&& <h4 className='text-danger'>Your Daily Limit of Calorie Intake is High.Please Reduce Your Energy Consumption</h4>}
         
         
         
          {

            2000- pr>=0 &&<h2>The Minimum Amount Of Calories Still required to Consume is : {2000-pr}</h2>
          }

          {
            pr-3000>0 && <h2>The Amount Of Calories Consumed is more than required by : {pr-3000}</h2>
          }
          </div>
        }
          </div>
  )
}

export default Adddiet