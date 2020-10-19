/**
 * The NumberUtil module provides utility functions for Lua numbers.
 */
declare namespace NumberUtil {
	/**
	 * The irrational number e.
	 * @example
	 * NumberUtil.E === 2.7182818284590
	 */
	export const E: number;

	/**
	 * Equal to 2π.
	 * @example
	 * NumberUtil.Tau === 6.2831853071796
	 */
	export const Tau: number;

	/**
	 * Interpolate between two numbers by a certain alpha/percentage. The name "lerp" comes from combining linear interpolation.
	 *
	 * Visually, think of a number line ranging from 'min' to 'max' and then move along that line by 'alpha' percent.
	 * @param min The minimum number to interpolate between.
	 * @param max The maximum number to interpolate between.
	 * @param alpha The alpha/percentage to interpolate between. Usually between 0-1
	 * @example
	 * NumberUtil.Lerp(5, 15, 0.5) === 10
	 * NumberUtil.Lerp(5, 15, 0)   === 5
	 * NumberUtil.Lerp(5, 15, 0.7) === 12
	 * NumberUtil.Lerp(5, 15, 2)   === 25
	 */
	export function Lerp(min: number, max: number, alpha: number): number;

	/**
	 * The same as Lerp, except alpha is clamped between the range of [0, 1].
	 *
	 * This helps avoid the resultant number being out of the input range of [min, max].
	 * @param min The minimum number to interpolate between.
	 * @param max The maximum number to interpolate between.
	 * @param alpha The alpha/percentage to interpolate between.
	 * @example
	 * NumberUtil.LerpClamp(5, 15, 0.5) === 10
	 * NumberUtil.LerpClamp(5, 15, 2)   === 15  // 'alpha' clamped to 1.
	 */
	export function LerpClamp(min: number, max: number, alpha: number): number;

	/**
	 * The inverse of the Lerp function.
	 *
	 * It returns the alpha value between the range of [min, max] given the num.
	 * @param min The minimum number to interpolate between.
	 * @param max The maximum number to interpolate between.
	 * @param num The number between min and max to calculate the alpha of.
	 * @returns The alpha between min and max.
	 * @example
	 * NumberUtil.InverseLerp(5, 15, 10) === 0.5
	 * NumberUtil.InverseLerp(5, 15, 12) === 0.7
	 */
	export function InverseLerp(min: number, max: number, num: number): number;

	/**
	 * Remaps the range of 'num' from its old range of [inMin, inMax] to a new range of [outMin, outMax].
	 *
	 * This is useful when needing to convert a range of inputs to a different output. For instance, remapping gamepad stick input to a larger range controlling a vehicle steering wheel.
	 *
	 * Mathematically, this is done by doing an inverse lerp with n on [inMin, inMax] to get the correct alpha value, and then lerping that alpha value with the range of [outMin, outMax].
	 * @param n The number between inMin and inMax.
	 * @param inMin The original min number to interpolate between.
	 * @param inMax The original max number to interpolate between.
	 * @param outMin The new min number to interpolate between.
	 * @param outMax The new max number to interpolate between.
	 * @example
	 * NumberUtil.Map(0.5, 0, 1, -10, 10) === 0
	 * NumberUtil.Map(1, -1, 1, 0, 5)     === 5
	 */
	export function Map(n: number, inMin: number, inMax: number, outMin: number, outMax: number): number;

	/**
	 * Rounds a number to the nearest whole number.
	 *
	 * Internally, this uses the math.floor and math.ceil Lua math functions to round the number.
	 * @param num The number to round
	 * @example
	 * NumberUtil.Round(1.5)  === 2
	 * NumberUtil.Round(3.2)  === 3
	 * NumberUtil.Round(-0.5) === -1
	 */
	export function Round(num: number): number;

	/**
	 * Rounds a number to the nearest given multiple.
	 *
	 * An example would be locking world positions onto a larger grid.
	 * @param num The number to round
	 * @param multiple The multiple to round to
	 * @example
	 * NumberUtil.RoundTo(3.4, 5) === 5
	 * NumberUtil.RoundTo(12, 5)  === 10
	 */
	export function RoundTo(num: number, multiple: number): number;
}

export = NumberUtil;
