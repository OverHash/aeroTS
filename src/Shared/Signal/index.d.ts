declare class Signal<T extends Array<unknown>> {
	constructor();

	/**
	 * Fire the event with any number of arguments.
	 *
	 * @example
	 * ```ts
	 * signal.Fire("Hello world");
	 * ```
	 * @param args The arguments to fire
	 */
	Fire(...args: T): void;

	/**
	 * Yields until the next time the event is fired, and returns anything that the fired event passed.
	 *
	 * @example
	 * ```ts
	 * const [message] = signal.Wait();
	 * ```
	 */
	Wait(): LuaTuple<T>;

	/**
	 * Connects a function to the event. The function will be called every time the event is fired.
	 *
	 * @example
	 * ```ts
	 * signal.Connect((message) => {
	 * 	print(`Event fired! Got message: ${message}`);
	 * });
	 * ```
	 * @param handler The handler to call everytime the event is fired
	 */
	Connect(handler: (...args: T) => void): RBXScriptConnection;

	/**
	 * Disconnects all connected functions.
	 *
	 * @example
	 * ```ts
	 * signal.DisconnectAll();
	 * ```
	 */
	DisconnectAll(): void;

	/**
	 * Destroys the event, which also disconnects all connections.
	 *
	 * @example
	 * ```ts
	 * signal.Destroy();
	 * ```
	 */
	Destroy(): void;
}

export = Signal;
