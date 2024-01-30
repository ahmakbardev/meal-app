import React from 'react';
import { BsCupHotFill } from "react-icons/bs";
import potimg from './../Assets/Images/potatoes.webp';
// import './../App.css';

const Home = () => {
  return (
    <>
        <div className="row h-100 py-5">
            <div className="col-lg-6 sticky top-5 left-title">
                <BsCupHotFill className='text-info'/>
                <div className="display-4 fw-bold">The Introduction</div>
            </div>
            <div className="col-lg-6">
                <div className="fs-1 fw-bold">About this website</div>
                <p className="fs-5">Hello, my name is Ahmad Akbar Mubarak and it's meal-app Test Project. This website is Meal API Website. There is a food catalog page, category, meals area, and many more inside it. The website's style was originally created and developed by Ahmad Akbar Mubarak.</p>
                <div className="fs-1 fw-bold">What is Mealapp?</div>
                <p className="fs-5">Mealapp is a frontend website that displays a food's content, including foods category, foods country area, ingredients, and cooking steps with a video. Thanks for watching our my website. Hope you glad. Do what you love and so many reasons to be happy.</p>
            </div>
        </div>
        <div className="row h-100 py-5 justify-content-between">
            <div className="col-lg-5">
                <img src={potimg} className='img-fluid rounded-3' alt="" />
            </div>
            <div className="col-lg-6">
                <div className="display-4 fw-bolder">Did you know?</div>
                <p className="display-6 fw-bold text-info">The potatoes can absorb and reflect Wi-fi signals</p>
                <p className="fs-5">When Boeing wanted to test out its wireless signal on new planes in 2012, they placed giant piles of potatoes on seats. Because of their high water content and chemical makeup, potatoes absorb and reflect radio and wireless signals just like humans do.</p>
                
            </div>
        </div>
    </>
  )
}

export default Home