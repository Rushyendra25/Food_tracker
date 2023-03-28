import React from 'react'
import './Footer.css'

function Footer() {
  return (
 <div className=" p-4 pb-5 bg-dark footer d-flex justify-content-around "  >
        <div  className="d-flex flex-column p-3">
            <a href="#" style={{textDecoration:"none",color:"grey"}}> About us</a>
            <a href="#" style={{textDecoration:"none",color:"grey"}}> Careers</a>
            <a href="#" style={{textDecoration:"none",color:"grey"}}> Feedback</a>
        </div>
        <div className="d-flex flex-column p-3">
            <a href="#" style={{textDecoration:"none",color:"grey"}}> Disclaimer</a>
            <a href="#" style={{textDecoration:"none",color:"grey"}}> Sitemap</a>
            <a href="#" style={{textDecoration:"none",color:"grey"}}> Research</a>
        </div>
        <div className="d-flex flex-column p-3">
            <a href="#" style={{textDecoration:"none",color:"grey"}}> Helpline</a>
            <a href="#" style={{textDecoration:"none",color:"grey"}}> Blog</a>

            <a href="#" style={{textDecoration:"none",color:"grey"}}> Services</a>
        </div>
    </div> 
  )
}

export default Footer