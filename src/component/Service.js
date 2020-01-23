import React, {Component} from 'react';
// import Sectiontitle from '../component/Banner/Sectiontitle';
import Fade from 'react-reveal/Fade';


var image_maker = function (count) {
    let r_array = [];
        for (let i = 1; i <= count; i++) {
            let t_object =  {};
            t_object.id = i;
            t_object.thumb = '/images/thumbs/image-' + i + '.jpg';
            t_object.image = '/images/image-' + i + '.jpg';
            r_array.push(t_object);
        }
        return r_array;
}


class Service extends Component{
    constructor(props) {
        super(props);
        console.log(props);
        this.state = { 
            images: image_maker(props.propertyData.image_count),
            show: false 
        };
    }

    
     
    toggleModal = (id) => {
        this.setState({
            image_id: id,
            show: !this.state.show,
            image: this.state.images[(id -1)]
        });
    }
    previousImage = (id) => {
        if (id > 1) {
            this.setState({
                image_id: id - 1,
                show: true,
                image: this.state.images[(id - 2)]
            });
        }
        
    }

    nextImage = (id) => {
        if (id < this.state.images.length) {
            this.setState({
                image_id: id + 1,
                show: true,
                image: this.state.images[(id)]
            });
        }
        
    }

    render(){
        

        let propertyData = this.props.propertyData;
        var {wClass} = this.props
        return(
            <section className={`${wClass}`} id="service">
                <div className="container">
                    {/* <Sectiontitle Title="What I'm Doing" TitleP="I love what I do. I take great pride in what I do."/> */}
                    <Fade bottom cascade duration={1000}>
                    <div className="row">
                        { image_maker(propertyData.image_count).map(({id, thumb, image}) => 
                            <figure key={id} className="col-lg-4 col-sm-6"  data-wow-delay="0.1s">
                                <img data-id={id} src={thumb} className="rounded mx-auto d-block img-fluid"  alt={propertyData.display_address} onClick={() => {this.toggleModal(id)}}/>
                            </figure>
                        ) } 
                        {this.state.show ? (
                            <div className="overlay overlay-effect">
                                {this.state.image_id > 1 ? (<a href="#foo" className="left-arrow" onClick={() => {this.previousImage(this.state.image_id)}}><i class="fas fa-angle-left"></i></a>) :null}
                                {this.state.image_id < this.state.images.length ? (<a href="#foo" className="right-arrow" onClick={() => {this.nextImage(this.state.image_id)}}><i class="fas fa-angle-right"></i></a>) :null}
                                <button type="button" className="close"  onClick={() => {this.toggleModal(0)}}>Close</button>
                                <div className="helper">
                                    <img data-id={this.state.image_id} src={this.state.image.image}  alt={propertyData.display_address} />
                                </div>
                            </div>
                        ) : null}
                    </div> 
                        {/* <div className="row">
                            {
                                jhonData.service && jhonData.service.map(item =>{
                                return(
                                        <div className="col-lg-4 col-sm-6" key={item.id}>
                                            <div className="work_item wow fadeInUp" data-wow-delay="0.1s">
                                                <i className={item.iconName}></i>
                                                <h2 className="t_color">{item.serviceTitle}</h2>
                                                <p>{item.sDetails}</p>
                                            </div>
                                        </div>
                                        )
                                    }
                                )
                            }
                        </div> */}
                    </Fade>
                </div>
            </section>
        )
    }
}

export default Service;