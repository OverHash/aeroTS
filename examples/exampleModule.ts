import Aero from 'internal/Aero/Aero';

export = class exampleModule extends Aero.SharedModule {
	protected static Start(): void {
		print('exampleModule.ts started!');
	}

	protected static Init(): void {
		print('Initiated from exampleModule.ts!');
	}

	foo(str: string): void {
		print(str);
	}
};
