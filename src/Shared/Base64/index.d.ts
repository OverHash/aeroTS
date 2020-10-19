declare class Base64 {
	/**
	 * Constructs a new Base64 object.
	 */
	constructor();

	/**
	 * Encodes the string into Base64 format.
	 * @param str The string to encode
	 */
	Encode(str: string): string;

	/**
	 * Decodes the string from Base64 format.
	 * @param str The string to decode
	 */
	Decode(encodedStr: string): string;
}

export = Base64;
