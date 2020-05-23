declare class Maid {
	/**
	 * Creates a new Maid instance.
	 * @example
	 * const maid = new Maid();
	 */
	constructor();

	/**
	 * Stores a task.
	 * When the maid's `DoCleaning` or `Destroy` method is invoked, these tasks will be cleaned up.
	 * Events will be disconnected, instances will be destroyed, and functions will be called.
	 * @example
	 * maid.GiveTask(myModel);
	 * maid.GiveTask(workspace.ChildAdded.Connect(obj => {}));
	 * maid.GiveTask(() => {});
	 * @param task The task to give to the maid. Can be an event connection, instance, table with a `Destoy` method, or a function.
	 * @returns The index of the task (please note this will need to be subtracted by one when used, as indexes start at 0 in roblox-ts)
	 */
	GiveTask(task: any): number;

	/**
	 * Stores a promise.
	 * If the maid is cleaned up and the promise is not completed, the promise will be cancelled.
	 * @param promise 
	 */
	GivePromise<T>(promise: T): T;

	/**
	 * Cleans up all the tasks. Event connections will be disconnected, instances will be destroyed, and functions will be called.
	 * @example
	 * maid.DoCleaning();
	 */
	DoCleaning(): void;

	/**
	 * Alias for DoCleaning
	 * @example
	 * maid.Destroy();
	 */
	Destroy(): void;
}

export = Maid;