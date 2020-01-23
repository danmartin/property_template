import React from 'react';
import Lightbox from './Lightbox';



class Lightbox extends Component {
    constructor () {
        super()
        this.state = {
          isHidden: true
        }
    }
    
    render() {
      
      return (
        <div className="back_splash">
            <div></div>
        </div> 
      );
    }
  }
  
export default Lightbox;


