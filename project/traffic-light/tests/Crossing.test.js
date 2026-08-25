import {
  afterEach, beforeEach, expect, test, vi,
} from 'vitest';

import Crossing from '../js/class/Crossing.js';

let crossing;

beforeEach(() => {
  vi.useFakeTimers();
  document.body.innerHTML = '<div id="crossing"></div>';
  crossing = new Crossing({
    north: true, south: true, west: true, east: true,
  });
});

afterEach(() => {
  vi.useRealTimers();
});

test('信号機が4つ配置される', () => {
  expect(document.getElementById('crossing').children.length).toBe(4);
});

test('生成直後は全方向が赤になっている', () => {
  const trafficLights = document.getElementById('crossing').children;
  expect(trafficLights[0].children[0].style.backgroundColor).toBe('red');
  expect(trafficLights[1].children[0].style.backgroundColor).toBe('red');
  expect(trafficLights[2].children[0].style.backgroundColor).toBe('red');
  expect(trafficLights[3].children[0].style.backgroundColor).toBe('red');
});

test('start()すると南北が緑になる', () => {
  crossing.start();
  const trafficLights = document.getElementById('crossing').children;
  expect(trafficLights[0].children[2].style.backgroundColor).toBe('green');
  expect(trafficLights[1].children[2].style.backgroundColor).toBe('green');
});

test('start()した直後の東西は赤のままである', () => {
  crossing.start();
  const trafficLights = document.getElementById('crossing').children;
  expect(trafficLights[2].children[0].style.backgroundColor).toBe('red');
  expect(trafficLights[3].children[0].style.backgroundColor).toBe('red');
});

test('南北が赤になると東西が緑になる', () => {
  crossing.start();
  vi.advanceTimersByTime(4000);
  const trafficLights = document.getElementById('crossing').children;
  expect(trafficLights[0].children[0].style.backgroundColor).toBe('red');
  expect(trafficLights[2].children[2].style.backgroundColor).toBe('green');
});

test('東西が終わると南北が再び緑になる', () => {
  crossing.start();
  vi.advanceTimersByTime(8000);
  const trafficLights = document.getElementById('crossing').children;
  expect(trafficLights[0].children[2].style.backgroundColor).toBe('green');
  expect(trafficLights[2].children[0].style.backgroundColor).toBe('red');
});
