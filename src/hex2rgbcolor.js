// @flow
/**
* @name               Hex2RgbColor
* @descripton         Javascript plugin that allows conversions between RGB and Hexadecimal
*
* @author             Yamil Díaz Aguirre
* @author-email       yamilquery@gmail.com
*
* @licens             MIT License - http://www.opensource.org/licenses/mit-license.php
*/

type RgbType = {
  r: number,
  g: number,
  b: number,
};

/**
 * Remove the character # from hexadecimal
 * @param {string} h Hexadecimal
 * @return {string} Hexadecimal without # character
 */
const cutHex = (h: string): string => ((h.charAt(0) === '#') ? h.substring(1, 7) : h);

/**
 * Convert a hexadecimal of red color into component
 * @param {string} h Hexadecimal color of 3 positiones
 * @return {number} Component color
 */
const hexToR = (h: string): number => parseInt((h).substring(0, 2), 16);

/**
 * Convert a hexadecimal of green color into component
 * @param {string} h Hexadecimal color of 3 positiones
 * @return {number} Component color
 */
const hexToG = (h: string): number => parseInt((h).substring(2, 4), 16);

/**
 * Convert a hexadecimal of blue color into component
 * @param {string} h Hexadecimal color of 3 positiones
 * @return {number} Component color
 */
const hexToB = (h: string): number => parseInt((h).substring(4, 6), 16);

/**
 * Convert a hexadecimal of 3 positions to one of 6 positions
 * @param {string} h Hexadecimal color of 3 positiones
 * @return {string} Hexadecimal color of 6 positiones
 */
const hex3To6 = (h: string): string => {
  const hex = cutHex(h);
  return hex.length === 3
    ? `${hex.charAt(0)}${hex.charAt(0)}${hex.charAt(1)}${hex.charAt(1)}${hex.charAt(2)}${hex.charAt(2)}`
    : hex;
};

/**
 * Component to hexadecimal
 * @param {number} c Component color
 * @return {string} Hex color
 */
const componentToHex = (c: number): string => {
  const hex = c.toString(16);
  return hex.length === 1 ? `0${hex}` : hex;
};

/**
 * Rgb to hexadecimal
 * @param {number} r Red color
 * @param {number} g Green color
 * @param {number} b Blue color
 * @return {string} Hex color
 */
const rgbToHex = (r, g, b): string => `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`;

/**
 * Hexadecimal to RgbType
 * @param {string} h Hexadecimal color
 * @return {RgbType} RgbType color
 */
export const hexToRgb = (h: string): RgbType => ({
  r: hexToR(hex3To6(h)),
  g: hexToG(hex3To6(h)),
  b: hexToB(hex3To6(h)),
});

/**
 * Array of Rgb to Hexadecimal
 * @param {RgbType[]} a Array of RgbType
 * @return {string[]} Array of Hex colors
 */
export const arrayRgbToHex = (a: RgbType[]): string[] => a.map(({ r, g, b }) => rgbToHex(r, g, b));

/**
 * Array of hex to array of RgbType
 * @param {string[]} a Array of RgbType
 * @return {string} Hex color
 */
export const arrayHexToRgb = (a: string[]): RgbType[] => a.map((h: string) => hexToRgb(h));
export type { RgbType };
