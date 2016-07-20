import React, { Component } from "react";
import SelfHelpS1 from '../components/Self-HelpTechnology/self-help_s1';
import SelfHelpS2 from '../components/Self-HelpTechnology/self-help_s2';

class SelfHelpTech extends Component {
  render () {
    return (
      <div>
        <SelfHelpS1 />
        <SelfHelpS2 />
        <a href="/selfhelp#spytop" class="selfhelp"><span class="glyphicon glyphicon-chevron-up"></span></a>
      </div>
    );
  }
}

export default SelfHelpTech;
