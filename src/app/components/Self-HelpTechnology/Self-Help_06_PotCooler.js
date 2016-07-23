import React, { Component } from 'react';

class SelfHelp06PotCooler extends Component {
  render() {
    return (
      <div className="modal.container">
        <div className="self-help_title">
          <img src = "http://vignette1.wikia.nocookie.net/solarcooking/images/c/c2/Pot-in-pot_cooler.jpg" alt="" width="1000" height="300" />
          <h1>Pot in Pot Cooler</h1>
        </div>

        <div className="self-help_01">
          <fieldset className="add-padding">

            <form className="form-group">
              <h3 className="sub-title">Step 1</h3>
              <div className="row">
                <div className="col-md-4">
                  <img src="../app/images/Self-HelpTechnology/Pot_in_Pot_Cooler_01.jpg" />
                </div>
                <div className="col-md-8">
                  <h3>Obtain two large clay or terracotta pots</h3>
                  <p>(One pot must be smaller than the other pot. Check that the smaller pot fits inside the larger and that there is a space around it of at least one centimetre, up to three centimetres.)</p>
                </div>
              </div>
            </form>

            <form className="form-group">
              <h3 className="sub-title">Step 2</h3>
              <div className="row">
                <div className="col-md-8">
                  <h3>Fill in any holes at the base of the pots</h3>
                  <p>(Use clay, large pebbles, cork, a homemade paste - anything suitable to hand to fill the hole. If you leave the holes open, the water will enter the inner pot and will also run out of the larger pot, making the fridge ineffective.)</p>
                  <p>- Putty or duct tape can plug the hole.</p>
                </div>
                <div className="col-md-4">
                  <img src="../app/images/Self-HelpTechnology/Pot_in_Pot_Cooler_02.jpg" />
                </div>
              </div>
            </form>

            <form className="form-group">
              <h3 className="sub-title">Step 3</h3>
              <div className="row">
                <div className="col-md-4">
                  <img src="../app/images/Self-HelpTechnology/Pot_in_Pot_Cooler_01.jpg" />
                </div>
                <div className="col-md-8">
                  <h3>Fill the base of the larger pot with coarse sand.</h3>
                  <p>(One pot must be smaller than the other pot. Check that the smaller pot fits inside the larger and that there is a space around it of at least one centimetre, up to three centimetres.)</p>
                </div>
              </div>
            </form>

          </fieldset>
        </div>
      </div>
    );
  }
}
export default SelfHelp06PotCooler;
