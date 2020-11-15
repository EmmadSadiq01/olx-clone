import React from 'react';
import Slider from "react-slick";
import { NavLink } from 'react-router-dom'
import Products from '../components/store/reducer';
import Fresh from '../components/store/fresh-product';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



export default class Featured extends React.Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1
    };
    return (

      <section className="my-album">
        <div className="container-fluid mb-5 px-5">
          <div className="featured">
            <div className="title">
              <h3>
                More On Mobile Phone
              </h3>
              <NavLink to="/" className="more">
                More
              </NavLink>
            </div>
            {/* <div className="row justify-content-center"> */}
            <Slider {...settings}>

              {Products.map((item, index) => {
                return (
                  <div className="item-box">
                    <span><i class="fas fa-heart"></i></span>
                    <NavLink to={"/order/" + index}>
                      <div className="card">
                        <img src={item.product_image} alt="" />
                      </div>
                      <div className="text-box">
                        <h2 className="price">Rs {item.product_price}</h2>
                        <h5 className="product-name">{item.product_name}</h5>
                      </div>
                    </NavLink>
                  </div>
                )
              })}

            </Slider>
            {/* </div> */}

          </div>

          <div className="fresh-recomentdation">

            <div className="title">
              <h3>
                Fresh Recomendation
              </h3>

            </div>
            <div className="products">
              <div className="row">
                {Fresh.map((item, index) => {
                  return (
                    <div className="col-lg-3 col-md-3 col-sm-4 col-6 album-box">


                      <div className="item-box">
                        <span><i class="fas fa-heart"></i></span>
                        <NavLink to={"/order/" + index} >
                          <div className="card">
                            <img src={item.product_image} alt="" />
                          </div>
                          <div className="text-box">
                            <h2 className="price">Rs {item.product_price}</h2>
                            <h5 className="product-name">{item.product_name}</h5>
                          </div>
                        </NavLink>
                      </div>
                    </div>
                  )
                })}

              </div>

            </div>
          </div>
        </div>
      </section>
    );
  }
};