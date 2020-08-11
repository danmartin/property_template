import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';



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
          <Tabs>
            <TabList>
              <Tab>Virtual Tour</Tab>
              <Tab>Video</Tab>
            </TabList>

            <TabPanel>
              <iframe 
                  title={propertyData.display_address}
                  width="100%" 
                  height="800" 
                  src={"https://my.matterport.com/show/?m="+propertyData.google.matterport} f
                  rameborder="0" allowfullscreen allow="vr">
              </iframe>
            </TabPanel>
            <TabPanel>
              <iframe width="100%" title={propertyData.display_address} height="800" src={"https://www.youtube.com/embed/"+propertyData.google.youtube}  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </TabPanel>
          </Tabs>
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
