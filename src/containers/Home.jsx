import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Featured from '../components//featured-products';
import '../components/featured.css';
import '../components/banner.css';
// import carousel1 from '../components/images/carousel1'


function Home() {
  return (
    <>
    <div className="banner"></div>
    <div className="vivo_ads my-5">
      <a href="https://www.vivo.com/pk/activity/v20series" target="_blank" rel="noopener noreferrer"><img src="/images/vivo.jpg" alt="" className="img-fluid"/></a>
      
    </div>
      <Featured />
    </>
  )
}

export default Home;
