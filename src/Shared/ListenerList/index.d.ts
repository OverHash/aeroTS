/**
 * The ListenerList allows developers to keep a list of connections that can all be disconnected at the same time. This is useful when creating custom objects that need to be destroyed and cleaned up.
 */
declare class ListenerList {
	/**
	 * Creates a new ListenerList instance.
	 */
	constructor();

	/**
	 * Adds a connection to the ListenerList
	 * ```ts
	 * ListenerList:Connect(Workspace.Changed, property => {
	 * 	print("Workspace property " + property + " changed!");
	 * })
	 * ```
	 * @param event The event to connec to
	 * @param func The function to connect to. All parameters are the same as event
	 * @returns The connection
	 */
	Connect<T>(event: RBXScriptSignal<T>, func: (...args: FunctionArguments<T>) => void): RBXScriptConnection;

	/** The `BindToRenderStep` function binds a custom function to be called at a specific time during the render step. There are three main arguments for BindToRenderStep: `name`, `priority`, and `what function to call`.
	 *
	 * As it is linked to the client's rendering process, BindToRenderStep can only be called on the client.
	 *
	 * Name
	 *
	 * ----------
	 *
	 * The `name` parameter is a label for the binding.
	 *
	 * ```lua
	 * local function functionToBind()
	 * 
	 * end
	 *
	 * -- Bind the function above to the binding named "tempBinding"
	 * ListenerList:BindToRenderStep("tempBinding", 1, functionToBind)
	 * ```
	 *
	 * Priority
	 *
	 * ----------
	 *
	 * The `priority` of the binding is an integer, and determines when during the render step to call the custom function. The lower this number, the sooner the custom function will be called. If two bindings have the same priority the Roblox engine will randomly pick one to run first. The default Roblox control scripts run with these specific priorities:
	 *
	 *  - Player Input: 100
	 *
	 *  - Camera Controls: 200
	 *
	 * For convenience, the [Enum.RenderPriority](https://developer.roblox.com/search#stq=RenderPriority) enum can be used to determine the integer value to set a binding. For example, to make a binding right before the default camera update, simply subtract 1 from the camera priority level.
	 *
	 * > **Note:** When using Enum.RenderPriority, remember to use ***InlineCode.Value*** at the end of the desired enum. BindToRenderStep will not work if just the enum on its own is used.
	 *
	 * ```lua
	 * local function beforeCamera(delta)
	 * 	-- Code in here will run before the default Roblox camera script
	 * end
	 *
	 * ListenerList:BindToRenderStep("Before camera", Enum.RenderPriority.Camera.Value - 1, beforeCamera)
	 * ```
	 *
	 * Custom Function and Delta Time
	 *
	 * ----------
	 *
	 * The last argument of BindToRenderStep is the `custom function` to call. This function will be passed one parameter called deltaTime. ***DeltaTime*** shows how much time passed between the beginning of the previous render step and the beginning of the current render step.
	 *
	 * > **Note:** All rendering updates will wait until the code in the render step finishes. Make sure that any code called by BindToRenderStep runs quickly and efficiently. If code in BindToRenderStep takes too long, then the game visuals will be choppy.
	 * @param name The **name** parameter is a label for the binding
	 * @param priority The *priority* of the binding is an integer, and determines when during the render step to call the custom function. The lower this number, the sooner the custom function will be called. If two bindings have the same priority the Roblox engine will randomly pick one to run first. The default Roblox control scripts run with these specific priorities:
	 *  - Player Input: 100
	 *  - Camera Controls: 200
	 * For convenience, the '''RenderPriority''' enum can be used to determine the integer value to set a binding. For example, to make a binding right before the default camera update, simply subtract 1 from the camera priority level.
	 * @param function The custom function being bound.
	 * @returns None.
	 */
	BindToRenderStep(name: string, priority: number, func: (deltaTime: number) => void): void;

	/** BindAction will bind an action to user input given an action handling function. The action handler function will be called when some input matches the provided user input enums.
	 * 
	 * The method behaves like a stack: if two actions are bound to the same user input, only the most recent action handler will be called.  When UnbindAction is called, the action handler is removed from the stack. If an action handler returns `Enum.ContextActionResult.Pass`, an input will call to the next most recently bound action handler.
	 * @param name The **name** parameter is a label for the binding
	 * @param func The function to connect to when an event happens
	 * @param createTouchButton Whether to create a mobile touch button
	 * @param inputTypes The inputs that invoke the binded function
	 * @returns None.
	 */
	BindAction(
		name: string,
		func: (actionName: string, state: Enum.UserInputState, inputObject: InputObject) => void,
		createTouchButton: boolean,
		...inputTypes: Array<Enum.KeyCode | Enum.PlayerActions | Enum.UserInputType>
	): void;

	/** Binds function to fire when specified inputTypes occur. Allows the priority of the bound action to be specified.
	 * 
	 * If there are multiple actions bound to one of the _inputTypes_, the priority of this action will determine if it will be passed first.Binds function to fire when specified inputTypes occur. Allows the priority of the bound action to be specified.
	 * @param name: The **name** parameter is a label for the binding
	 * @param func The function to connect to when an event happens
	 * @param createTouchButton Whether to create a mobile touch button
	 * @param priorityLevel The priority the binded function should run at
	 * @param inputTypes The inputs that invoke the binded function
	 * @returns None.
	 */
	BindActionAtPriority(
		name: string,
		func: (actionName: string, state: Enum.UserInputState, inputObject: InputObject) => void,
		createTouchButton: boolean,
		priorityLevel: number,
		...inputTypes: Array<Enum.KeyCode | Enum.PlayerActions | Enum.UserInputType>
	): void;

	/**
	 * Disconnect all events, and unbind both RenderStep and Action bindings.
	 * 
	 * ```ts
	 * listenerList.DisconnectAll()
	 * ```
	 * 
	 * @returns None.
	 */
	DisconnectAll(): void;

	/**
	 * Only disconnect events in the list.
	 */
	DisconnectEvents(): void;

	/**
	 * Only unbind any bound RenderSteps.
	 */
	DisconnectRenderSteps(): void;

	/**
	 * Only unbind any bound actions.
	 */
	DisconnectActions(): void;
}

export = ListenerList;