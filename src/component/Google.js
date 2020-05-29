import React from 'react';



class Google extends React.Component {
    constructor () {
        super()
        this.state = {
          isHidden: true
        }
    }
    
    render() {
      let propertyData = this.props.propertyData;
      
      return (
        <section className="video" id="video">
            <div className="row">
              <div className="col-lg-6 d-flex align-items-center">
                  <iframe 
                      title={propertyData.display_address}
                      width="100%" 
                      height="700" 
                      src="https://my.matterport.com/show/?m=73DLYMztq9s" f
                      rameborder="0" allowfullscreen allow="vr">
                  </iframe>
              </div>
              <div className="col-lg-6 d-flex align-items-center">
                  <iframe width="100%" title={propertyData.display_address} height="700" src={"https://www.youtube.com/embed/"+propertyData.google.youtube}  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
            </div>
            <iframe id="map"
                title={propertyData.display_address}
                src={propertyData.google.maps}
                width="100%"
                height="550"
                allowFullScreen>
            </iframe>
        </section>
      );
    }
  }
  
export default Google;
