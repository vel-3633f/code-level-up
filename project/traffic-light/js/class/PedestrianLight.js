import TrafficLight from './TrafficLight.js';
import { PEDESTRIAN_POSITION_STYLES, TRAFFIC_LIGHT_STYLE } from '../constants.js';
import Lamp from './Lamp.js';

export default class PedestrianLight extends TrafficLight {
  get colors() {
    return ['red', 'green'];
  }

  get sequence() {
    return [
      { color: 'green', duration: 2000 },
      { color: 'green', state: Lamp.STATE.BLINKING, duration: 2000 },
    ];
  }

  createContainerElement(direction, side) {
    const element = document.createElement('div');
    Object.assign(
      element.style,
      TRAFFIC_LIGHT_STYLE,
      PEDESTRIAN_POSITION_STYLES[direction][side],
    );
    return element;
  }
}
