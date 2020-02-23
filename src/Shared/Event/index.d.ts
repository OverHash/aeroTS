/**
 * Allows the creation of custom events.
 */
declare class Event {
	/**
	 * Creates a new Event object.
	 */
	constructor();

	/**
	 * Fire the event with any number of arguments.
	 * @param args The arguments to fire
	 */
	Fire<T>(...args: T[]): void;

	/**
	 * Yields until the next time the event is fired, and returns anything that the fired event passed.
	 */
	Wait<T>(): T;

	/**
	 * Connects a function to the event. The function will be called every time the event is fired.
	 * @param functionHandler The function to call whenever the event is fired
	 */
	Connect(functionHandler: Function): RBXScriptConnection;

	/**
	 * Disconnects all connected functions.
	 */
	DisconnectAll(): void;

	/**
	 * Destroys the event, which also disconnects all connections.
	 */
	Destroy(): void;
}

export = Event;