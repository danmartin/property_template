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
            <iframe width="100%" title={propertyData.display_address} height="685" src={"https://www.youtube.com/embed/"+propertyData.google.youtube}  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
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


