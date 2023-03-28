import React from 'react'
import './Home.css'
import {useNavigate} from 'react-router-dom'
import {Carousel} from 'react-bootstrap'

function Home() {
  let navigate=useNavigate();
  return (
   <div className='home text-center'>
    <Carousel className='m-5'>

      <Carousel.Item interval={1500}>
        <img
          className="d-block"
          
          src="https://www.yesnatural.sg/image/cache/catalog/Banner/Side%20Top-1200x835.jpg"
          alt="First slide"
          width={"100%"} height={"500px"}/>
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img
          className="d-block"
          
          src="https://thumbs.dreamstime.com/b/healthy-lifestyle-diet-male-nutrition-concept-dieting-week-plan-man-hands-close-up-young-woman-writing-diet-plan-fresh-products-182053027.jpg"
          alt="Second slide"
          width={"100%"} height={"500px"}/>
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img
          className="d-block "
          src="https://media.istockphoto.com/id/1375039697/photo/healthy-fruits-and-vegetables-salad-recipe.jpg?b=1&s=170667a&w=0&k=20&c=YzWsM-BQitBf9og-RKD9AEVtnzQ79yVeso6gzSNaXF4="
          alt="Third slide"
          width={"100%"} height={"500px"}/>

        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img
          className="d-block "
          src="https://www.jssuni.edu.in/jssaher/assets/img/Dept-of-Nutrition-and-Dietetics/dnd-banner.jpg"
          alt="Fourth slide"
        width={"100%"} height={"500px"}/>

        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item >

      
    </Carousel>

   
   
   
         <div className="container">
        <div className="row">
        <div className="col-md-6 mb-5 h-350">
        <img src='https://i.pinimg.com/736x/4f/bf/c4/4fbfc4308b7777532d6fff8bd509b156.jpg' width={"500px"} height={"300px"}></img>
        </div>
        <div className="col-md-6 ">
          <div className="display-4 fs-2 fw-bold mt-5 text-danger">
            Balanced Diet
          </div>
          <p className="fs-5 mt-2 text-white">
          A healthy balanced diet is one that provides the body with all the essential nutrients it needs to function properly. This includes a variety of fruits, vegetables, whole grains, lean proteins, and healthy fats. A balanced diet helps maintain a healthy weight, reduce the risk of chronic diseases such as diabetes, heart disease, and cancer, and promotes overall wellbeing. It is important to avoid excessive amounts of processed foods, added sugars, and saturated and trans fats, as these can contribute to health problems over time.
            
            
             </p>
            <button className="btn btn-primary " onClick={()=>navigate("/login")}>Check Your Diet</button>
            
        </div>
        </div>
        </div>

<div className="container">
    <div className="row mt-5 Card3">
        <div className="col-md-6 mb-5 h-350">
          <img src='https://www.jssuni.edu.in/jssaher/assets/img/Dept-of-Nutrition-and-Dietetics/dnd-banner.jpg' width={"500px"} height={"300px"}></img>
        </div>
        <div className="col-md-6 ">
            
         <div className="display-4 fs-2 fw-bold mt-5 text-danger">Transform your life 
         </div>
           <p className=" mt-2 fs-5 text-white">
           Tracking can help identify areas where there may be deficiencies in the diet or where there may be room for improvement, such as reducing intake of processed foods or increasing consumption of fruits and vegetables. Additionally, tracking can help hold oneself accountable and stay motivated to make healthy choices. While it may take some effort to establish the habit of tracking, it can be a valuable tool in achieving and maintaining a healthy and balanced diet.
           </p>
           <button className="btn btn-primary mb-5 " onClick={()=>{window.scrollTo(0,0) }}>Find out how</button>
        </div>
       
    </div>
 </div>
    </div>
  )
}
export default Home