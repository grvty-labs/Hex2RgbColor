import { hexToRgb, arrayHexToRgb, arrayRgbToHex, yiq_is_light } from './src';

test('Convert hexadecimal string to RgbType', () => {
  expect(hexToRgb('#F00')).toEqual({ r: 255, g: 0, b: 0 });
});

test('Convert array of 3 positions hexadecimal string to array of RgbType', () => {
  const a = ['#f00', '#abc001', '#ba0'];
  expect(arrayHexToRgb(a)).toEqual(
    [{"b": 0, "g": 0, "r": 255},
    {"b": 1, "g": 192, "r": 171},
    {"b": 0, "g": 170, "r": 187}],
  );
});

test('Convert array of hexadecimal string to array of RgbType', () => {
  const a = ['#ff0000', '#abc001', '#bbaa00'];
  expect(arrayHexToRgb(a)).toEqual(
    [{"b": 0, "g": 0, "r": 255},
    {"b": 1, "g": 192, "r": 171},
    {"b": 0, "g": 170, "r": 187}],
  );
});

test('Convert array of RgbType to array of hexadecimal', () => {
  const a = [
    {"b": 0, "g": 0, "r": 255},
    {"b": 1, "g": 192, "r": 171},
    {"b": 0, "g": 170, "r": 187}
  ];
  expect(arrayRgbToHex(a)).toEqual(['#ff0000', '#abc001', '#bbaa00']);
});

test('Check if the color is light', () => {
  const h = '#fff';
  expect(yiq_is_light(h)).toEqual(true);
});

test('Check if the color is dark', () => {
  const h = '#000';
  expect(yiq_is_light(h)).toEqual(false);
});
