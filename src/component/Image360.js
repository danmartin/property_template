import React , {Component} from 'react';
// import {create360Viewer} from '360-image-viewer';
// import {canvasFit} from 'canvas-fit';
// import {Environment} from 'react-360';
// import { Map,GoogleApiWrapper, Marker } from 'google-maps-react';

export class Image360 extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        let propertyData = this.props.propertyData;
        // const image = new Image();
        // image.src = '/images/marianna-360.jpg';
       
        return (
            <section className="360Viewer" id="360">
                
            <img data-id='360' src='/images/marianna-360.jpg'  alt='panoramic' />
            </section>
        );
    }
}
export default Image360;