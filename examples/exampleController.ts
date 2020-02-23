import Aero = require("internal/Aero/Aero");

export = class exampleController extends Aero.Controller {
	Start() {
		print('exampleController.ts started!');
	}

	Init() {
		print('Initiated from exampleController.ts!');
	}

	foo(str: string) {
		print('Someone sent a message!\n' + str);
	}
}