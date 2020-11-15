import React from 'react';
// import Select, { components } from 'react-select';
// import { colourOptions, groupedOptions } from '../data';
import { NavLink } from 'react-router-dom'
import {Button} from 'react-bootstrap';
import './header.css';


export default class Header extends React.Component {

  render() {
    return (


      <>
      <nav className="px-5 py-2">
        <div className="logo">
          <NavLink className="nav-link" to="/">
              <img src="/images/logo.png" alt=""/>
          </NavLink>
          
        </div>
        <div className="select-area">

        </div>
        <div className="search-box px-3">
          <div className="wrap">
            <div className="search">
              <input type="text" className="searchTerm" placeholder="What are you looking for?" />
              <button type="submit" className="searchButton">
                <i className="fa fa-search"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="login">
          <div className="login-button">
          <NavLink className="nav-link" to="/">Login</NavLink>
          </div>
        </div>
        <div className="buttons mx-3">
          <button type="button" className="btn btn-outline-success">
          <i class="fas fa-plus"></i> SELL
          </button>
        </div>
      </nav>
      <nav className="navbar navbar-expand-lg navbar-light main-menu">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/mobile-phone">Mobile Phones</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/car">Cars</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">Mototrcycles</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">House</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">TV-Video-Audio</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">Tablets</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">Land & Plots</NavLink>
            </li>


          </ul>
        </div>
      </nav>
      </>
    )
  }
}