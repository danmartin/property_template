import React, {Component} from 'react';
// import {Link} from 'react-router-dom';
import {Fade, Reveal} from 'react-reveal/';

class About extends Component {
    render(){
        let propertyData = this.props.propertyData; 
        var {aClass} = this.props;
        return(
            <section className={`${aClass}`} id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 d-flex align-items-center">
                            <Fade bottom cascade duration={1000}>
                                <div className="about_content">
                                    <h2 className="t_color">{propertyData.display_address}</h2>
                                    <h6>{propertyData.full_address.city}, {propertyData.full_address.state} {propertyData.full_address.zipcode}</h6>
                                    <p>{propertyData.property.blurb}</p>
                                    {/* <Link to="/"  className="theme_btn active">Hire Me</Link>
                                    <Link to="/" className="theme_btn">Download CV</Link> */}
                                </div>
                            </Fade>
                        </div>
                        <div className="col-lg-5">
                            <div className="about_img">
                                <Reveal effect="fadeInRight" duration={1500}><img src="/images/2sq.jpg" alt=""/></Reveal>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default About;
