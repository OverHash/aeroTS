declare class StringBuilder {
	/**
	 * Appends a string onto the build at the end
	 * 
	 * ```ts
	 * const builder = StringUtil.StringBuilder();
	 * 
	 * builder.Append("world");
	 * tostring(builder) === "world";
	 * ```
	 * @param str The string to append
	 * @returns None.
	 */
	Append(str: string): void;

	/**
	 * Prepends a string onto the build at the start
	 *
	 * ```ts
	 * const builder = StringUtil.StringBuilder();
	 *
	 * builder.Append("world");
	 * builder.Prepend("Hello ");
	 * tostring(builder) === "Hello world"
	 * ```
	 * @param str The string to append
	 * @returns None.
	 */
	Prepend(str: string): void;

	/**
	 * Converts a StringBuilder into a string format
	 *
	 * ```ts
	 * const builder = StringUtil.StringBuilder();
	 *
	 * builder.Append("world");
	 * builder.Prepend("Hello ");
	 * builder.ToString() === "Hello world"
	 * ```
	 * @returns The string built from the builder
	 */
	ToString(): string;
}

declare namespace StringUtil {
	/**
	 * Trims whitespace from the start and end of the string.
	 * ```ts
	 * StringUtil.Trim("  hello world  ") === "hello world"
	 * ```
	 * @param str The string to trim
	 * @returns The trimmed string
	 */
	export function Trim(str: string): string;

	/**
	 * Same as `Trim`, but only trims the start of the string.
	 * @param str The string to trim
	 * @returns The trimmed string
	 */
	export function TrimStart(str: string): string;

	/**
	 * Same as `Trim`, but only trims the end of the string.
	 * @param str The string to trim
	 * @returns The trimmed string
	 */
	export function TrimEnd(str: string): string;

	/**
	 * Checks if two strings are equal, but ignores their case.
	 * 
	 * ```ts
	 * StringUtil.RemoveWhitespace("  hello World!\n") === "helloWorld!"
	 * ```       
	 * @param str The first string to compare
	 * @param compare The second string to compare
	 * @returns if the strings are equal with all whitespace removed
	 */
	export function EqualsIgnoreCase(str: string, compare: string): boolean;

	/**
	 * Removes all whitespace from a string.
	 * 
	 * ```ts
	 * StringUtil.RemoveWhitespace("  hello World!\n") === "helloWorld!"
	 * ```
	 * @param str The string to strip of whitespace
	 * @returns the stripped string
	 */
	export function RemoveWhitespace(str: string): string;

	/**
	 * Replaces all whitespace with a single space. This does not trim the string.
	 * 
	 * ```ts
	 * StringUtil.RemoveExcessWhitespace("This     is    a   \n  test") === "This is a test"
	 * ```
	 * @param str The string to remove excessive whitespace from
	 * @returns The string with no excess whitespace
	 */
	export function RemoveExcessWhitespace(str: string): string;

	/**
	 * Checks if a string ends with a certain string.
	 * 
	 * ```ts
	 * StringUtil.EndsWith("Hello world", "rld") === true
	 * ```
	 * @param str The string to check
	 * @param endsWith The ending to scan for
	 * @returns If the string specified ended with the other string
	 */
	export function EndsWith(str: string, endsWith: string): boolean;

	/**
	 * Checks if a string starts with a certain string.
	 *
	 * ```ts
	 * StringUtil.StartsWith("Hello world", "He") === true
	 * ```
	 * @param str The string to check
	 * @param endsWith The start to scan for
	 * @returns If the string specified started  with the other string
	 */
	export function StartsWith(str: string, startsWith: string): boolean;

	/**
	 * Checks if a string contains another string.
	 * 
	 * ```ts
	 * StringUtil.Contains("Hello world", "lo wor") === true
	 * ```
	 * @param str The string to check
	 * @param contains The phrase to check for
	 * @returns If the string contained the phrase
	 */
	export function Contains(str: string, contains: string): boolean;

	/**
	 * Returns a table of all the characters in the string.
	 * 
	 * ```ts
	 * StringUtil.ToCharArray("Hello") // ["H","e","l","l","o"]
	 * ```
	 * @param str The string to put into array
	 * @returns An array of each character
	 */
	export function ToCharArray(str: string): Array<string>;

	/**
	 * Returns a table of all the bytes of each character in the string.
	 * 
	 * ```ts
	 * StringUtil.ToByteArray("Hello") // [72,101,108,108,111]
	 * ```
	 * @param str The string to put into bytes
	 * @returns A byte array of each character
	 */
	export function ToByteArray(str: string): Array<number>;

	/**
	 * Transforms an array of bytes into a string.
	 * 
	 * ```ts
	 * StringUtil.ByteArrayToString([97, 98, 99]) === "abc"
	 * ```
	 * @param bytes The array of bytes to transform
	 * @returns A string created out of the bytes
	 */
	export function ByteArrayToString(bytes: Array<number>): string;

	/**
	 * Returns a string in camelCase.
	 * 
	 * ```tst
	 * StringUtil.ToCamelCase("Hello_world-abc") === "helloWorldAbc"
	 * ```
	 * @param str The string to camelCaseify
	 * @returns The same string, but in camelCase form
	 */
	export function ToCamelCase(str: string): string;

	/**
	 * Returns a string in PascalCase.
	 * 
	 * ```ts
	 * StringUtil.ToPascalCase("Hello_world-abc") === "HelloWorldAbc"
	 * ```
	 * @param str The string to PascalCaseify
	 * @returns The same string, but in PascalCase form
	 */
	export function ToPascalCase(str: string): string;

	/**
	 * Returns a string in snake_case or SNAKE_CASE.
	 * 
	 * ```ts
	 * StringUtil.ToPascalCase("Hello_world-abc") === "hello_world_abc"
	 * StringUtil.ToPascalCase("Hello_world-abc", true) === "HELLO_WORLD_ABC"
	 * ```
	 * @param str The string to snake_caseify
	 * @param upper Whether or not to make it UPPER_SNAKE_CASE or snake_case
	 * @returns The same string, but in snake_case form
	 */
	export function ToSnakeCase(str: string, upper?: boolean): string;

	/**
	 * Returns a string in kebab-case or KEBAB-CASE.
	 * 
	 * ```ts
	 * StringUtil.ToKebabCase("Hello_world-abc") === "hello-world-abc"
	 * StringUtil.ToKebabCase("Hello_world-abc", true) === "HELLO-WORLD-ABC"
	 * ```
	 * @param str The string to kebab-caseify
	 * @param upper Whether or not to make it UPPER-KEBAB-CASE or kebab-case
	 * @returns The same string, but in kebab-case form
	 */
	export function ToKebabCase(str: string, upper?: boolean): string;

	/**
	 * Escapes a string from pattern characters. In other words, it prefixes any special pattern characters with a %. For example, the dollar sign $ would become %$. See the example below.
	 * 
	 * ```ts
	 * StringUtil.Escape("Hello. World$ ^-^") === "Hello%. World%$ %^%-%^"
	 * ```
	 * @param str The string to escape
	 * @returns The string with all special characters escaped
	 */
	export function Escape(str: string): string;

	/**
	 * Creates a StringBuilder object that can be used to build a string. This is useful when a large string needs to be concatenated. Traditional concatenation of a string using ".." can be a performance issue, and thus StringBuilders can be used to store the pieces of the string in a table and then concatenate them all at once.
	 * 
	 * ```ts
	 * const builder = StringUtil.StringBuilder()
	 * 
	 * builder.Append("world")
	 * builder.Prepend("Hello ")
	 * builder.ToString() === "Hello world"
	 * tostring(builder)  === "Hello world"
	 * ```
	 * 
	 * @returns The StringBuilder
	 */
	export function StringBuilder(): StringBuilder;
}

export = StringUtil;