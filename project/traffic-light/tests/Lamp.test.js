import { expect, test } from 'vitest';

import Lamp from '../js/class/Lamp.js';

test.each(['red', 'yellow', 'green'])('on()を呼ぶと %s が点灯する', (color) => {
  const lamp = new Lamp(color);
  lamp.on();
  expect(lamp.element.style.backgroundColor).toBe(color);
});

test('off()を呼ぶと、grayに消灯する', () => {
  const lamp = new Lamp('red');
  lamp.off();
  expect(lamp.element.style.backgroundColor).toBe('gray');
});
