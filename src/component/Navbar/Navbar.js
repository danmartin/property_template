import React, {Component} from 'react';
import Sticky from 'react-stickynode';
import {Link} from 'react-scroll';

class Navbar extends Component{
    render(){
        var {mClass} = this.props;
        let propertyData = this.props.propertyData;
        return (
            <Sticky top={0} innerZ={9999} activeClass="navbar_fixed">
                <nav className={`navbar navbar-expand-lg navbar-light ${mClass}`}>
                    <div className="container customer_container">
                        {/* <a className="navbar-brand logo_h" href="index.html"><img src={require('../../image/logo2.png')} alt=""/><img src={require('../../image/logo.png')} alt=""/></a> */}
                        <div className="menu-address ">
                            <span className="property-title">{propertyData.full_address.street}</span>
                            <span className="property-subtitle">{propertyData.full_address.city}, {propertyData.full_address.state} {propertyData.full_address.zipcode}</span>
                        </div>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
                            <ul className="nav navbar-nav m-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" activeClass="active" to="home" spy={true} smooth={true} offset={0} duration={500}>Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" activeClass="active" to="about" spy={true} smooth={true} offset={-86} duration={500}>
                                        Amenities
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" activeClass="active" to="gallery" spy={true} smooth={true} offset={-86} duration={500}>
                                        Gallery
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" activeClass="active" to="video" spy={true} smooth={true} offset={-86} duration={500}>
                                        Video
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" activeClass="active" to="map" spy={true} smooth={true} offset={-86} duration={500}>
                                        Map
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" activeClass="active" to="footer" spy={true} smooth={true} offset={-86} duration={500}>
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </Sticky>
        );
    }
}

export default Navbar;