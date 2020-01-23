import React, {Component} from 'react';
class Footer extends Component{
    constructor () {
        super()
        this.state = {
          isHidden: true
        }
    }
    
    render() {
        let propertyData = this.props.propertyData;
      
      return (
        <footer className="position-relative overflow-hidden  text-center" id="footer">
            <div className="row justify-content-md-center mb-5">
                <div className=" col col-12 col-lg-2">
                  <div>
                    <img src="/images/face.jpg" className="img-fluid rounded-circle" alt="Aubrey Martin Real Estate Agent Portland Oregon" />
                  </div>
                  <div className="text-center social mt-3">
                    <a href="https://www.facebook.com/aubreymartinkwsc/" className="facebook" title="Aubrey Martin Facebook"><i className="fab fa-facebook-square"></i></a>
                    <a href="https://twitter.com/aubreymartin76" className="twitter" title="Aubrey Martin Twitter"><i className="fab fa-twitter-square"></i></a>
                    <a href="https://www.instagram.com/aubreymartin76/" className="instagram" title="Aubrey Martin Instagram"><i className="fab fa-instagram"></i></a>
                    <a href="https://www.linkedin.com/in/aubrey-martin-3572b6b8/" className="linkedin" title="Aubrey Martin LinkedIn"><i className="fab fa-linkedin"></i></a>
                  </div>
                </div>
                <div className=" col text-center col-md-7  font-weight-bold pt-3">
                    <div className="row justify-content-md-center">
                        <div className="col col-md-9">
                          <a href="http://aubreymartin.com" title="Aubrey Martin Portland Oregon Real Estate"><img src="/images/watermark.png" className="img-fluid" alt="Aubrey Martin Real Estate Agent Portland Oregon" /></a>
                        </div>
                    </div>
                    <div className="row justify-content-md-center">
                      <div className="col col-md-6">
                      <ul className="contacts text-left list-unstyled">
                        <li><i className="fas fa-globe"></i> <a href="http://aubreymartin.com">http://AubreyMartin.com</a></li>
                        <li><i className="far fa-envelope"></i> <a href={"mailto:"+propertyData.agent.email}>{propertyData.agent.email}</a></li>
                        <li>
                          <span className="d-none d-sm-inline"><i className="fas fa-phone"></i> {propertyData.agent.phone}</span>
                          <span className="d-sm-block d-md-none"><a href={"tel:"+propertyData.agent.phone}><i className="fas fa-phone"></i> {propertyData.agent.phone}</a></span>
                        </li>
                      </ul>
                      </div>
                    </div>
                </div>
            </div>
        </footer>

        
      );
    }
  }
export default Footer;