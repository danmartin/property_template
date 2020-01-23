import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Reveal from 'react-reveal/Reveal/';
import WaterWave from 'react-water-wave';
const image = require('../../image/Sail-Away.jpg');

class Banner extends Component {
    render(){
        let jhonData = this.props.jhonData;
        return(
            <section id="home">
                 <WaterWave strength={500} className="banner_area" style={{ width: '100%', height: '100%', backgroundSize: 'cover' }} imageUrl={image}>
                        {({ getRootProps}) => (
                             <div className="container">
                                <div className="banner_content">
                                    <Reveal effect="fadeInUp">
                                        <h5>HELLO</h5>
                                    </Reveal>
                                    <Reveal  effect="fadeInUp" duration={1500}>
                                        <h2 className="wow fadeInLeft animated">I am {jhonData.name}</h2>
                                    </Reveal>
                                    <Reveal effect="fadeInUp" duration={2200}>
                                        <h4 className="wow fadeInUp anoimated">Visual Designer & Front-end Developer</h4>
                                    </Reveal>
                                    <ul className="list_style social_icon">
                                    {
                                        jhonData.socialLinks && jhonData.socialLinks.map(item =>{
                                        return(
                                                <li key={item.name}>
                                                <Link  to={item.url}><i className={item.className}></i></Link> 
                                                </li>
                                                )
                                            }
                                        )
                                    }
                                    </ul>
                                </div>
                            </div>
                            
                        )}
                        
                </WaterWave>
               
            </section>
        );
    }
}

export default Banner;