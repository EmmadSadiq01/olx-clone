import React from 'react';
import './footer.css'


export default class Footer extends React.Component{
  render(){
    return(
      <>
        
        <section className="footer">
        <div className="container">
            <div className="row">
                <div className="box col-lg-3 col-md-3 col-sm-6 col-6">
                    <div className="products">
                        <h3>
                            PRODUCTS
                        </h3>
                        <ul>
                            <li><a href="">SAMSUNG</a></li>
                            <li><a href="">HUAWEU</a></li>
                            <li><a href="">VIVO</a></li>
                            <li><a href="">REALME</a></li>
                            <li><a href="">NOKIA</a></li>
                            <li><a href="">REALME</a></li>
                            <li><a href="">TECHNO</a></li>
                            <li><a href="">MOTOROLA</a></li>
                        </ul>
                    </div>

                </div>
                <div className="box col-lg-3 col-md-3 col-sm-6 col-6">

             
                    <div className="help">
                        <h3>
                            HELP
                        </h3>
                        <ul>
                            <li> <a href="">Payments Information</a> </li>
                            <li> <a href="">Shipping Information</a> </li>
                            <li> <a href="">FAQ</a> </li>
                            <li> <a href="">Telemart Outlets</a> </li>
                            <li> <a href="">Telemart franchise programs</a> </li>
                        </ul>
                    </div>
                </div>
                <div className="box col-lg-3 col-md-3 col-sm-6 col-6">
                    <div className="policy">
                        <h3>
                            POLICY
                        </h3>
                        <ul>
                            <li><a href="">Return Policy</a> </li>
                            <li><a href="">Terms & Conditions</a> </li>
                            <li><a href="">Privacy</a> </li>
                            <li><a href="">Warranty</a> </li>
                            <li><a href="">Price Beating</a> </li>
                        </ul>
                    </div>
                </div>

                <div className="box col-lg-3 col-md-3 col-sm-6 col-6">
                    <div className="social">
                        <h3 id="social">
                            SOCIAL
                        </h3>
                        <span className="text-center"><a href=""><i className="fab fa-facebook-f"></i></a></span>
                        <span className="text-center"><a href=""><i className="fab fa-instagram"></i></a></span>
                        <span className="text-center"><a href=""><i className="fab fa-twitter"></i></a></span>
                    </div>
  
                </div>

            </div>

        </div>
    </section>

      </>
    )
  }
}