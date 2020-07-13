import Aero from "internal/Aero/Aero";

export = class exampleModule extends Aero.SharedModule {
	static Start() {
		print('exampleModule.ts started!');
	}

	Init() {
		print('Initiated from exampleModule.ts!');
	}

	foo(str: string) {
		print(str);
	}
}