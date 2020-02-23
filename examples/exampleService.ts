import Aero = require("internal/Aero/Aero");

export = class exampleService extends Aero.Service {
	Start() {
		print('exampleService.ts started!');

		// access exampleModule
		this.Modules.exampleModule.foo('hello!');
	}

	Init() {
		print('Initiated from exampleService.ts!');
	}
}