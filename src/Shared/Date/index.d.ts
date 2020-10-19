/**
 * The Date module allows for easy description of time. It is modeled after the JavaScript Date object.
 */
declare class Date {
	/**
	 * Converts a JSON object into a Date object.
	 *
	 * To save in JSON, you should use `Date.ToJSON`
	 * @param jsonString The saved JSON string
	 */
	static fromJSON(jsonString: string): Date;

	/**
	 * The hour of the day.
	 */
	Hour: number;

	/**
	 * The minute of the day.
	 */
	Minute: number;

	/**
	 * The numeric weekday.
	 */
	Weekday: number;

	/**
	 * The day of the month.
	 */
	Day: number;

	/**
	 * The numeric month.
	 */
	Month: number;

	/**
	 * The year.
	 */
	Year: number;

	/**
	 * The seconds since January 1, 1970.
	 */
	Second: number;

	/**
	 * The milliseconds since January 1, 1970.
	 */
	Millisecond: number;

	/**
	 * The day of the year.
	 */
	Yearday: number;

	/**
	 * Whether or not the date represents daylight saving time.
	 */
	IsDST: boolean;

	/**
	 * Date as of right now
	 */
	constructor();
	/**
	 * Date as of seconds in local time
	 * @param seconds The seconds since epoch time
	 */
	constructor(seconds: number);
	/**
	 * Date as of seconds with optional `useUTC` parameter
	 * @param seconds The seconds since epoch time
	 * @param useUTC To use UTC timezone
	 */
	constructor(seconds: number, useUTC: boolean);

	/**
	 * Converts the Date object to a JSON string to be saved.
	 *
	 * To reconstruct, use `Date.fromJSON`
	 */
	public ToJSON(): string;

	/**
	 * Returns the number of seconds representing the object. This is the most practical method to use for saving/serializing the date, since it has the smallest footprint.
	 */
	public ToSeconds(): number;

	/**
	 * Get the timezone offset in hours.
	 */
	public GetTimezoneHourOffset(): number;

	/**
	 * Format the date string. See the [GNU Date Commands](https://www.cyberciti.biz/faq/linux-unix-formatting-dates-for-display/) for relevant formats.
	 * @param format The string to format by
	 */
	public Format(format: string): string;

	/**
	 * Constructs and returns a new Date object with the time converted to [UTC](https://en.wikipedia.org/wiki/Coordinated_Universal_Time).
	 */
	public ToUTC(): Date;

	/**
	 * Constructs and returns a new Date object with the time converted from UTC time into local time.
	 */
	public ToLocal(): Date;

	/**
	 * Returns the ISO string representation of the date.
	 *
	 * @example
	 * print(date.ToISOString()) // e.g. 2020-01-06T17:08:24.473
	 */
	public ToISOString(): string;

	/**
	 * Returns a string representing the shorthand date.
	 *
	 * @example
	 * print(date.ToDateString()) // e.g. Mon Jan 6 2020
	 */
	public ToDateString(): string;

	/**
	 * Returns a string representing the time.
	 *
	 * @example
	 * print(date.ToTimeString()) // e.g. 17:10:28
	 */
	public ToTimeString(): string;

	/**
	 * Returns a string representing the time and date combined.
	 *
	 * @example
	 * print(date:ToString()) // e.g. Mon Jan 6 2020 17:10:28
	 *
	 * Also works with tostring:
	 * print(tostring(date))
	 */
	public ToString(): string;
}

export = Date;
