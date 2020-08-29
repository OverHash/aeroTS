import Aero from 'internal/Aero/Aero';

export = class exampleController extends Aero.Controller {
	protected static Start(): void {
		print('exampleController.ts started!');
	}

	protected static Init(): void {
		print('Initiated from exampleController.ts!');
	}

	static foo(str: string): void {
		print('Someone sent a message!\n' + str);
	}
};
