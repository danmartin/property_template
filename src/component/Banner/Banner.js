import React, {Component} from 'react';

class Banner extends Component {
    render(){
        let propertyData = this.props.propertyData;
        return(
            <section id="home">
                <header strength={500} className="masthead banner_area">
                    <div className="container h-100">
                        <div className="row h-100">
                            <div className="col-4 h-100 text-center">
                            </div>
                            <div className="col-8 h-100">
                                <div className="banner_details text-right">
                                    <h1  className="font-weight-bold">{propertyData.property.listing_price}</h1>
                                    <ul className="list-unstyled font-weight-light shadow">
                                        <li className="p-1">{propertyData.property.bedrooms} Bedrooms</li>
                                        <li className="p-1">{propertyData.property.baths} Bathrooms</li>
                                        <li className="p-1">{propertyData.property.sq_feet} Sq Feet</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
               
            </section>
        );
    }
}

export default Banner;