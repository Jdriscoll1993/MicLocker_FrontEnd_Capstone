import React, { Component } from 'react';
import './MicLocker.css';
// import HomeHeader from '../components/layout/HomeHeader'
// import Footer from '../components/layout/HomeFooter'
// import NavBar from '../components/layout/NavBar'
import ApplicationViews from '../components/ApplicationViews'

class MicLocker extends Component {
  render() {
      return (
          <React.Fragment>
              {/* <HomeHeader /> */}
              {/* <NavBar /> */}
              <ApplicationViews />
              {/* <Footer /> */}
          </React.Fragment>
      )
  }
}
export default MicLocker;
