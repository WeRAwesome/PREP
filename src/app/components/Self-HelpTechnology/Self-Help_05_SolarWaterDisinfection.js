import React, { Component } from 'react';

class SelfHelp05SolarWaterDisinfection extends Component {
  render() {
    return (
      <div className="modal.container">
        <div className="self-help_title">
          <img src = "https://www.empowering-people-network.siemens-stiftung.org/fileadmin/_processed_/csm_65_WADI_03_0c02a65e9f.jpg" alt="" width="1000" height="300" />
          <h1>SODIS (Solar Water Disinfection)</h1>
        </div>

        <div className="self-help_01 video-container">
          <div className="video-youtube">
            <iframe width="560" height="315" className="embed-responsive-item" src="https://www.youtube.com/embed/Avur7NeMAJg" frameborder="0" allowfullscreen></iframe>
          </div>
        </div>

        <div className="self-help_01">
          <fieldset className="add-padding">

            <form className="form-group">
              <div className="row">
                <div className="col-md-6">
                  <img src="../app/images/Self-HelpTechnology/Solar_Water_Disinfection_01.jpg" />
                </div>
                <div className="col-md-6">
                  <img src="../app/images/Self-HelpTechnology/Solar_Water_Disinfection_02.jpg" />
                </div>
              </div>
            </form>

            <form className="form-group">
              <img src="../app/images/Self-HelpTechnology/Liter_of_Light_06.jpg" />
            </form>

          </fieldset>
        </div>
      </div>
    )
  }
}
export default SelfHelp05SolarWaterDisinfection;
