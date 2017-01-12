import SelfHelp01GetPureWater from '../components/Self-HelpTechnology/Self-Help_01_GetPureWater';
import SelfHelp02LitterOfLight from '../components/Self-HelpTechnology/Self-Help_02_LiterOfLight';
import SelfHelp03LEDPowerHack from '../components/Self-HelpTechnology/Self-Help_03_LEDPowerHack';
import SelfHelp04CookStove from '../components/Self-HelpTechnology/Self-Help_04_CookStove';
import SelfHelp05SolarWaterDisinfection from '../components/Self-HelpTechnology/Self-Help_05_SolarWaterDisinfection';
import SelfHelp06PotCooler from '../components/Self-HelpTechnology/Self-Help_06_PotCooler';

export default function appropriateitems() {
  return [
    {
      id: 1,
      title: 'Get Pure Water',
      img: '/static/images/Self-HelpTechnology/PurifyWater_02.jpg',
      modal: SelfHelp01GetPureWater
    },
    {
      id: 2,
      title: 'A liter of Light',
      img: '/static/images/Self-HelpTechnology/Liter_of_Light_04.jpg',
      modal: SelfHelp02LitterOfLight
    },
    {
      id: 3,
      title: 'LED Power Hack',
      img: '/static/images/Self-HelpTechnology/Liter_of_Light_02.jpg',
      modal: SelfHelp03LEDPowerHack
    },
    {
      id: 4,
      title: 'Cook Stove',
      img: '/static/images/Self-HelpTechnology/institutional_cookstove_main.jpg',
      modal: SelfHelp04CookStove
    },
    {
      id: 5,
      title: 'Solar Water Disinfection',
      img: '/static/images/Self-HelpTechnology/Solar_Water_Disinfection_01.jpg',
      modal: SelfHelp05SolarWaterDisinfection
    },
    {
      id: 6,
      title: 'Pot in Pot Cooler',
      img: '/static/images/Self-HelpTechnology/Pot_in_Pot_Cooler_01.jpg',
      modal: SelfHelp06PotCooler
    },
  ];
}
