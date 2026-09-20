import {
  afterEach, beforeEach, expect, test, vi,
} from 'vitest';

import TrafficLight from '../js/class/TrafficLight.js';

let trafficLight;

beforeEach(() => {
  vi.useFakeTimers();
  trafficLight = new TrafficLight('east');
});

afterEach(() => {
  vi.useRealTimers();
});

test('ランプが3つ生成される', () => {
  expect(trafficLight.container.children.length).toBe(3);
});

test('生成直後は赤が点灯している', () => {
  expect(trafficLight.container.children[0].style.backgroundColor).toBe('red');
});

test('方角に応じた位置スタイルが当たる', () => {
  expect(trafficLight.container.style.left).toBe('100%');
  expect(trafficLight.container.style.top).toBe('50%');
});

test('changeLamp()で指定した色だけ点灯する', () => {
  trafficLight.changeLamp('green');
  expect(trafficLight.container.children[2].style.backgroundColor).toBe('green');
});

test('changeLamp()で指定以外の色は消灯する', () => {
  trafficLight.changeLamp('green');
  expect(trafficLight.container.children[0].style.backgroundColor).toBe('gray');
  expect(trafficLight.container.children[1].style.backgroundColor).toBe('gray');
});

test('changeLamp()を続けて呼ぶと前の色が消える', () => {
  trafficLight.changeLamp('red');
  trafficLight.changeLamp('green');
  expect(trafficLight.container.children[0].style.backgroundColor).toBe('gray');
});

test('start()直後は緑が点灯する', () => {
  trafficLight.start();
  expect(trafficLight.container.children[2].style.backgroundColor).toBe('green');
});

test('2秒後に黄が点灯する', () => {
  trafficLight.start();
  vi.advanceTimersByTime(2000);
  expect(trafficLight.container.children[1].style.backgroundColor).toBe('yellow');
});

test('4秒後に赤が点灯する', () => {
  trafficLight.start();
  vi.advanceTimersByTime(4000);
  expect(trafficLight.container.children[0].style.backgroundColor).toBe('red');
});

test('完了時にfinishイベントが発火する', () => {
  let fired = false;
  trafficLight.addEventListener('finish', () => {
    fired = true;
  });
  trafficLight.start();
  vi.advanceTimersByTime(4000);
  expect(fired).toBe(true);
});
