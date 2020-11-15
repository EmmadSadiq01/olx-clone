import React from 'react';
import { NavLink } from 'react-router-dom'
import Fresh from'../components/store/fresh-product';


class Mobile_products extends React.Component {
    render(){
    return (
        <div>
            <div className="products">
                            <div className="row">
                                {Fresh.map((item, index) => {
                                    return (
                                        <div className="col-lg-3 col-md-3 col-sm-4 col-6 album-box">


                                            <div className="item-box">
                                                <span><i class="fas fa-heart"></i></span>
                                                <NavLink to="/order">
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

    )
                            }
}

export default Mobile_products;