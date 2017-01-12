import React, { Component } from 'react';

class SelfHelp01GetPureWater extends Component {
  render() {
    return (
      <div className="modal.container">
        <div className="self-help_title">
          <img src = "/static/images/Self-HelpTechnology/PurifyWater_main.jpg" alt="" width="1000" height="300" />
          <h1>How to Purify your Water</h1>
        </div>

        <div className="self-help_01">
          <fieldset className="add-padding">
            <form className="form-group">
              <h3 className="sub-title">Step 1: The Filter</h3>
              <div className="row">
                <div className="col-md-8">
                  <br />
                  <p>1) Remove the bottom of a bottle</p>
                  <p>2) Turn the bottle upsidedown (with the cap down down)</p>
                  <p>3) Put the follwing materials in the bottle.
                    <li>pebbles</li>
                    <li>sand</li>
                    <li>a piece of cloth or bandages</li>
                    <li>charcoal</li>
                    <li>a piece of cloth or bandages</li>
                    <li>sand</li>
                    <li>pebbles</li>
                  </p>
                  <p>The cloth or bandages are used to ensure that all the different materials do not mix.</p>
                  <p>The pebbles and sand filter the particules and the dirt out of the water. </p>
                  <p>This filter will not remove any viruses and bacteria from the water so you have to boil the water after it is filtered.</p>
                </div>
              <div className="col-md-4">
                <img src="/static/images/Self-HelpTechnology/PurifyWater_01.jpg" />
                <img src="/static/images/Self-HelpTechnology/PurifyWater_02.jpg" />
              </div>
            </div>
          </form>

          <form className="form-group">
            <h3 className="sub-title">Step 2: How to use your filter</h3>
            <div className="row">
              <div className="col-md-4">
                <img src="/static/images/Self-HelpTechnology/PurifyWater_03.jpg" />
              </div>
              <div className="col-md-7">
                <br />
                <p>Pour the water from the pool or pond in top of your water filter, catch the water at the bottom of the filter in a clean cup.</p>
                <p>It is best to throw away the first bit of water that comes out of your filter it often is cloudy and not that clean.</p>
                <p>If the water that comes out of your filter is clear it is good and you can use it.</p>
                <p>Boil the water at least 1 minute before drinking it, cooking will kill bacteria and viruses that are still present in your water.</p>
              </div>
            </div>
          </form>

          </fieldset>
          </div>
        </div>
    );
  }
}

export default SelfHelp01GetPureWater;
