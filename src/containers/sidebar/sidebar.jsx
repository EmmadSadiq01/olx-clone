import React from 'react';
import '../../components/banner.css';
import Mobile_products from '../../components/mobile_products';




class Sidebar extends React.Component {
    constructor(){
        super()
        this.state={
            show:false,
            show1:false
        }
    }
    render() {

        return (
            <>
                <div className="vivo_ads my-5">
                    <a href="https://www.vivo.com/pk/activity/v20series" target="_blank" rel="noopener noreferrer"><img src="/images/vivo.jpg" alt="" className="img-fluid" /></a>

                </div>
                <div className="row my-5">
                    <div className="col-lg-3">
                        <div className="sidebar mt-5">
                            <div className="item">
                                <h3>Filter</h3>
                            </div>
                            <div className="item">
                                <div className="option" id="option1" onClick={()=>{this.setState({show: !this.state.show})}}>
                                    <h3>Categories</h3>
                                    <span><i className="fas fa-sort-up down" id="rotate"></i></span>
                                </div>
                                {!this.state.show?
                                <small id="none">Mobile Phone</small>:
                                null}
                               {this.state.show?
                                <div className="item-list" id="show">
                                    <ul className="caty">
                                        <li>
                                            <p>All Categorie</p>
                                        </li>
                                        <li>
                                            <p>Mobile</p>
                                            <ul className="sub-cat">
                                                <li>Tablets</li>
                                                <li>Accesories</li>
                                                <li>Mobile Phones</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                :
                                null
                                }
                            </div>

                            <div className="item">
                                <div className="option" id="option2" onClick={()=>{this.setState({show2: !this.state.show2})}}>
                                    <h3>Location</h3>
                                    <span><i className="fas fa-sort-up" id="rotate1"></i></span>
                                </div>
                                {!this.state.show2?
                                <small id="none1">Karachi</small>:null}
                                 {this.state.show2?
                                <div className="item-list" id="show1">
                                    <ul className="caty">
                                        <li>
                                            <p>All Categorie</p>
                                        </li>
                                        <li>
                                            <p>Mobile</p>
                                            <ul className="sub-cat">
                                                <li>Tablets</li>
                                                <li>Accesories</li>
                                                <li>Mobile Phones</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>:null
                                }
                            </div>
                            <div className="item">
                                <div className="option">
                                    <h3>Make</h3>
                                    <span><i class="fas fa-sort-up"></i></span>
                                </div>
                            </div>
                            <div className="item">
                                <div className="option">
                                    <h3>Price</h3>
                                    <span><i class="fas fa-sort-up"></i></span>
                                </div>
                            </div>
                            <div className="item">
                                <div className="option">
                                    <h3>Condition</h3>
                                    <span><i class="fas fa-sort-up"></i></span>
                                </div>
                            </div>

                        </div>


                    </div>
                    <div className="col-lg-9">
                        <Mobile_products/>
                    </div>

                </div>


            </>
        )
    }
}


export default Sidebar;

