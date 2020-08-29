import Aero from 'internal/Aero/Aero';

export = class clientTest extends Aero.Controller {
	protected static Start(): void {
		print("Started from test.ts!");
	}

	protected static Init(): void {
		print("Initiated from test.ts!");
	}
};
