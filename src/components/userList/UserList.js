import React from 'react'
import { useState,useEffect} from 'react'
import axios from 'axios'
import {useForm} from 'react-hook-form'
import './UserList.css'
function UserList() {
 let [data,setdata]=useState([])
 let {register,handleSubmit,formState:{errors}}=useForm();
  useEffect(()=>{
   axios.get(" http://localhost:4000/Food")
   .then(res=>setdata(res.data))
   .catch(err=>console.log(err))
  },[]) 
  
  return (
    <div className='tab'>
     <table className='table table-bordered table-primary  table-striped table-hover  mt-5 text-center'>
        <thead>
          <tr>
            <th>Date</th>
            <th>Breakfast</th>
            <th>Breakfast Quantity</th>
            <th>Lunch</th>
            <th>Lunch Quantity</th>
            <th>Snacks</th>
            <th>Snacks Quantity</th>
            <th>Dinner</th>
            <th>Dinner Quantity</th>
            <th>Calories Intake</th>
            <th>Calories Remained</th>
          </tr>
        </thead>
        <tbody className='table-group-divider tb'>
          {
            data.map(obj=><tr key={obj.id}>
              <td>{obj.date}</td>
              <td>{obj.Breakfast}</td>
              <td>{obj.qty}</td>
              <td>{obj.Lunch}</td>
              <td>{obj.qty2}</td>
              <td>{obj.Snacks}</td>
              <td>{obj.qty3}</td>
              <td>{obj.Dinner}</td>
              <td>{obj.qty4}</td>
              <td>{obj.calories}</td>
              <td>{2000-obj.calories}</td>
            </tr>
              )
          }
        </tbody>
      </table>

    </div>
  )
}

export default UserList;