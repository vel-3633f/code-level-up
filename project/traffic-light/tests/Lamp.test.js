import { configMocks, mockAnimationsApi } from 'jsdom-testing-mocks';
import {
  afterAll, afterEach, beforeAll, beforeEach, expect, test,
} from 'vitest';

import Lamp from '../js/class/Lamp.js';

const { STATE } = Lamp;
configMocks({
  afterAll, afterEach, beforeAll, beforeEach,
});
mockAnimationsApi();

test.each([
  { color: 'red' },
  { color: 'green' },
  { color: 'yellow' },
])('生成時に渡した色$colorを保持する', (color) => {
  const lamp = new Lamp(color);

  expect(lamp.color).toBe(color);
});

test('生成時は色は消灯状態である', () => {
  const lamp = new Lamp('red');

  expect(lamp.state).toBe(STATE.OFF);
});

test.each([
  {
    from: STATE.OFF,
    to: STATE.ON,
    expected: '緑で点灯する',
    backgroundColor: 'green',
    animations: 0,
  },
  {
    from: STATE.OFF,
    to: STATE.BLINKING,
    expected: '消灯状態から点滅が始まる',
    backgroundColor: 'gray',
    animations: 1,
  },
  {
    from: STATE.ON,
    to: STATE.OFF,
    expected: '消灯する',
    backgroundColor: 'gray',
    animations: 0,
  },
  {
    from: STATE.ON,
    to: STATE.BLINKING,
    expected: '点灯状態から点滅が始まる',
    backgroundColor: 'gray',
    animations: 1,
  },
  {
    from: STATE.BLINKING,
    to: STATE.ON,
    expected: '点滅が止まって点灯する',
    backgroundColor: 'green',
    animations: 0,
  },
  {
    from: STATE.BLINKING,
    to: STATE.OFF,
    expected: '点滅が止まって消灯する',
    backgroundColor: 'gray',
    animations: 0,
  },
])('$fromから$toになると背景色が$expected', ({
  from, to, backgroundColor, animations,
}) => {
  const lamp = new Lamp('green');

  lamp.changeState(from);
  lamp.changeState(to);

  expect(lamp.state).toBe(to);
  expect(lamp.element.style.backgroundColor).toBe(backgroundColor);
  expect(lamp.element.getAnimations()).toHaveLength(animations);
});

test('同じ状態を繰り返してもアニメーションが増えない', () => {
  const lamp = new Lamp('green');

  lamp.changeState(STATE.BLINKING);
  lamp.changeState(STATE.BLINKING);

  expect(lamp.element.getAnimations()).toHaveLength(1);
});
