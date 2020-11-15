import React from 'react';
import Fresh from '../components/store/fresh-product';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './order.css'
// import Products from '../components/store/reducer';
// import {useParams} from 'react-router-dom'




export default class Order extends React.Component {
    render() {
        const { match: { params } } = this.props;



        return (
            <>
                <div className="vivo_ads my-5">
                    <a href="https://www.hostgator.com/" target="_blank" rel="noopener noreferrer"><img src="/images/ads.png" alt="" className="img-fluid" /></a>

                </div>
                <div className="row my-5 mx-3">
                    <div className="col-lg-8 col-12">
                        <div className="carousel">
                            <Carousel
                                showIndicators={false}
                                autoPlay
                            >
                                <div>
                                    <img alt="" src={Fresh[params.id].product_image} />
                                </div>
                                <div>
                                    <img alt="" src={Fresh[params.id].product_image} />
                                </div>
                                <div>
                                    <img alt="" src={Fresh[params.id].product_image} />
                                </div>
                                <div>
                                    <img alt="" src={Fresh[params.id].product_image} />
                                </div>
                                <div>
                                    <img alt="" src={Fresh[params.id].product_image} />
                                </div>

                            </Carousel>
                        </div>
                        <div className="product_detail">
                            <h3 >Details</h3>
                            <table>
                                <tr>
                                    <td id="key">make</td>
                                    <td>Toyota</td>
                                    <td id="key">Conditon</td>
                                    <td>10/10</td>
                                </tr>
                                <tr>
                                    <td id="key">year</td>
                                    <td>2020</td>
                                    <td id="key">accesories</td>
                                    <td>All</td>
                                </tr>
                                <tr>
                                    <td id="key">performance</td>
                                    <td>Good</td>
                                    <td id="key">Exchange</td>
                                    <td>No</td>
                                </tr>
                                <tr>
                                    <td id="key">size</td>
                                    <td>Relaible</td>
                                    <td id="key">Price</td>
                                    <td>Fixed</td>
                                </tr>
                                <tr>
                                    <td id="key">capacity</td>
                                    <td>Well</td>
                                    <td id="key">capacity</td>
                                    <td>Well</td>
                                </tr>
                            </table>
                            <hr />
                            <h3 >Description</h3>
                            <p>karachi walo k liya ek behtreen offer sirf 5% profit wo bhi bina kisi izzafi charges k.</p>

                            <p>sirf 20% fisad ki adygi sy banjy garri k malik.</p>

                            <p>No processing fee</p>

                            <p>No Kibor</p>

                            <p>Offer sy faiyda uthna k liya abhi rabta kren..</p>

                            <p>Timing: 10 am to 6pm (Mon to sat)</p>

                            <p>Regards Taha Siddiqui</p>

                            <p>Call/Whatsapp:0308241/2023</p>

                        </div>

                    </div>
                    <div className="description col-lg-4 col-12 ">
                        <div className="about_product">
                            <span id="heart"><i class="fas fa-heart"></i></span>
                            <div className="details">

                                <h3>Rs 470,000 </h3>
                                <h5>Huawei P30 pro</h5>

                                <div className="town_date">
                                    <p>Bahria Town Karachi, Karachi, Sindh</p>
                                    <p>oct 9</p>
                                </div>
                            </div>
                        </div>

                        <div className="about_product">
                            <div className="details">

                                <h3 id="seller">Seller description </h3>
                                <div className="number">
                                    <span id="phone"><i class="fas fa-phone"></i></span>
                                    <p>0341 2725048</p>
                                </div>
                            </div>
                        </div>

                        <div className="about_product">
                            <div className="details">

                                <h3>Posted in </h3>
                                <h5>Bahria Town Karachi, Karachi, Sindh</h5>
                                <img src="/images/map.png" alt="" />
                            </div>
                        </div>

                    </div>

                </div>
            </>
        )
    }
}