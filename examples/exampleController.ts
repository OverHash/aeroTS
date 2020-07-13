import Aero from "internal/Aero/Aero";

export = class exampleController extends Aero.Controller {
	static Start() {
		print('exampleController.ts started!');
	}

	static Init() {
		print('Initiated from exampleController.ts!');
	}

	static foo(str: string) {
		print('Someone sent a message!\n' + str);
	}
}