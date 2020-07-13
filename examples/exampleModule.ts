import Aero from 'internal/Aero/Aero';

export = class exampleModule extends Aero.SharedModule {
	static Start(): void {
		print('exampleModule.ts started!');
	}

	Init(): void {
		print('Initiated from exampleModule.ts!');
	}

	foo(str: string): void {
		print(str);
	}
};
