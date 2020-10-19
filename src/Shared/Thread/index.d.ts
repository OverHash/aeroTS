/**
 * The Thread module allows an alternative to the built-in globals spawn and delay. The built-in globals are known to throttle unexpectedly. The Thread module will provide the expected behavior for spawning and delayed spawning of new threads.
 *
 * Please note that the Lua runtime is single-threaded, and any multi-threading applications are simply utilizing the underlying task scheduler to appear multi-threaded.
 */
declare namespace Thread {
	/**
	 * Spawns the given function on a new thread immediately. Internally, this is done by creating, firing, and destroying a BindableEvent. Due to this process, SpawnNow is not necessarily a well-performant operation, and thus should not be used when performance needs to be optimal.
	 *
	 * ```ts
	 * Thread.SpawnNow(() => {
	 * 		print("Hello from SpawnNow");
	 * })
	 * ```
	 * @param func The function to spawn
	 * @param args Any arguments for the function
	 * @returns None.
	 */
	export function SpawnNow<T extends Array<any>>(func: (...args: T) => void, ...args: T): void;

	/**
	 * Spawns the given function on a new thread. Internally, this is done using RunService's Heartbeat event, which means that the function will be spawned on the next hearbeat step (i.e. next frame).
	 *
	 * ```ts
	 * Thread.Spawn(() => {
	 * 		print("Hello from Spawn");
	 * })
	 * ```
	 * @param func The function to spawn
	 * @param args Any arguments for the function
	 * @returns None.
	 */
	export function Spawn<T extends Array<any>>(func: (...args: T) => void, ...args: T): void;

	/**
	 * Spawns the given function on a new thread after waitTime has elapsed. Internally, this is the same as the above Thread.Spawn function, except for the delayed start.
	 *
	 * Because this function returns the heartbeat connection, the delay can be cancelled by disconnecting the connection.
	 *
	 * ```ts
	 * // Spawn function after 3 seconds:
	 *	Thread.Delay(3, () => {
	 * 		print("Hello from delay");
	 * 	})
	 *
	 * 	// Attempt to spawn after 5 seconds, but cancel it after 1 second:
	 * 	const delayCon = Thread.Delay(5, () => {
	 * 		print("This will never print");
	 * 	})
	 * 	wait(1)
	 * 	delayCon.Disconnect()
	 * ```
	 * @param waitTime The amount of time to delay
	 * @param func The function to spawn
	 * @param args Any arguments to pass for the function
	 * @returns The connection for the delay
	 */
	export function Delay<T extends Array<any>>(
		waitTime: number,
		func: (...args: T) => void,
		...args: T
	): RBXScriptConnection;

	/**
	 * Continuously calls `func` after `time`` seconds on a new thread.
	 *
	 * ```ts
	 * const inc = 0
	 *
	 * Thread.DelayRepeat(3, () => {
	 * 		inc++;
	 * 		print(inc);
	 * })
	 * ```
	 * @param time The time to wait between calls
	 * @param func The function to call
	 * @param args Any arguments to pass to the function
	 */
	export function DelayRepeat<T extends Array<any>>(time: number, func: (...args: T) => void, ...args: T): void;
}

export = Thread;
