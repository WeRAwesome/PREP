import React, { Component } from "react";
import SelfHelpS1 from '../components/Self-HelpTechnology/self-help_s1';
//import SelfHelpS2 from '../components/Self-HelpTechnology/self-help_s2';
import SelfHelp01GetPureWater from '../components/Self-HelpTechnology/Self-Help_01_GetPureWater';
import SelfHelp02LiterOfLight from '../components/Self-HelpTechnology/Self-Help_02_LiterOfLight';

class SelfHelpTech extends Component {
  render () {
    return (
      <div>
        <SelfHelpS1 />
        <SelfHelp01GetPureWater />
        <SelfHelp02LiterOfLight />
      </div>
    );
  }
}

export default SelfHelpTech;
