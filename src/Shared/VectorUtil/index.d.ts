/**
 * The VectorUtil module provides utility functions for Roblox vectors.
 */
declare namespace VectorUtil {
	/**
	 * Clamps the magnitude of a vector so it is only a certain length.
	 * @param vector The vector to clamp.
	 * @param maxMagnitude The maximum Magnitude the vector can have.
	 * @example
	 * VectorUtil.ClampMagnitude(new Vector3(100, 0, 0), 15) === new Vector3(15, 0, 0);
	 * VectorUtil.ClampMagnitude(new Vector3(10, 0, 0), 20) === new Vector3(10, 0, 0);
	 */
	export function ClampMagnitude(vector: Vector3, maxMagnitude: number): Vector3;

	/**
	 * Finds the angle (in radians) between two vectors.
	 * @param vector1 The first vector to compare.
	 * @param vector2 The second vector to compare.
	 * @example
	 * const v1 = new Vector3(10, 0, 0);
	 * const v2 = new Vector3(0, 10, 0);
	 * AngleBetween(v1, v2) === math.rad(90);
	 */
	export function AngleBetween(vector1: Vector3, vector2: Vector3): number;

	/**
	 * Finds the angle (in radians) between two vectors around the given axis vector.
	 * @param vector1 The first vector to compare.
	 * @param vector2 The second vector to compare.
	 * @param axisVector The axis to compare around
	 * @example
	 * const v1 = new Vector3(10, 0, 0);
	 * const v2 = new Vector3(0, 10, 0);
	 * const axis = new Vector3(0, 1, 0);
	 * AngleBetweenSigned(v1, v2, axis) === math.rad(90);
	 */
	export function AngleBetweenSigned(vector1: Vector3, vector2: Vector3, axisVector: Vector3): number;
}

export = VectorUtil;
