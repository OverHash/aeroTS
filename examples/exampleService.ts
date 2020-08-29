import Aero from 'internal/Aero/Aero';

export = class exampleService extends Aero.Service {
	protected static Start(): void {
		print('exampleService.ts started!');

		// access exampleModule
		this.Modules.exampleModule.foo('hello!');
	}

	protected static Init(): void {
		print('Initiated from exampleService.ts!');
	}
};
