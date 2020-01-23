import React from 'react';
import {Fade, Reveal} from 'react-reveal/';



class PrimaryInfo extends React.Component {
    constructor () {
        super()
        this.state = {
          isHidden: true
        }
    }
    
    
    render() {

        let propertyData = this.props.propertyData;
      
      return (
        <div className="container mt-5">
            
            <Fade top cascade duration={1000}>
            <div className="row">
                <div className="col-6 col-md-3  text-center overflow-hidden mb-3">
                    <div className="mx-auto py-3 bg-light rounded">
                        <div className="icon-holder">
                            <i className="fas fa-bed"></i>
                        </div>
                        <div className="my-0">
                            <p className="lead">{propertyData.property.bedrooms} Bedrooms</p>
                        </div>
                    </div>
                </div>

                <div className="col-6 col-md-3   px-3 text-center overflow-hidden mb-3">
                    <div className="mx-auto py-3 bg-light rounded">
                        <div className="icon-holder">
                            <i className="fas fa-bath"></i>
                        </div>
                        <div className="my-0">
                            <p className="lead">{propertyData.property.baths} bath</p>
                        </div>
                    </div>
                </div>

                <div className="col-6 col-md-3 text-center overflow-hidden mb-3">
                    <div className="mx-auto py-3 bg-light rounded">
                        <div className="icon-holder">
                            <i className="fas fa-ruler-combined"></i>
                        </div>
                        <div className="my-0">
                            <p className="lead">{propertyData.property.sq_feet} Sq Ft</p>
                        </div>
                    </div>
                </div>

                <div className="col-6 col-md-3 text-center overflow-hidden mb-3">
                    <div className="mx-auto py-3 bg-light rounded">
                        <div className="icon-holder">
                            <i className="fas fa-tree"></i>
                        </div>
                        <div className="my-0">
                            <p className="lead">{propertyData.property.lot_size} sq ft lot</p>
                        </div>
                    </div>
                </div>

            </div>
            </Fade>
                <div className="row  mt-2">

                    <Reveal effect="fadeInLeft" duration={1500}>
                        <div className="col-6 col-md-6  text-center overflow-hidden mb-3npm">
                        <div className="mx-auto py-3 bg-light rounded">
                        <div className="icon-holder">
                            <i className="fas fa-hammer"></i>
                        </div>
                        <div className="my-0">
                            <p className="lead">Built in {propertyData.property.built_in}</p>
                        </div>
                        </div>
                    </div>
                </Reveal>
            <Reveal effect="fadeInRight" duration={1500}>
            <div className="col-6 col-md-6   px-3 text-center overflow-hidden mb-3">
              <div className="mx-auto py-3 bg-light rounded">
              <div className="icon-holder">
              <i className="fas fa-home"></i>
              </div>
              <div className="my-0">
                  <p className="lead">RMLS# {propertyData.property.rmls}</p>
              </div>
              </div>
            </div>

          </Reveal>
          </div>
        </div>
      );
    }
  }
  
export default PrimaryInfo;


