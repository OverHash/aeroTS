import Aero = require("internal/Aero/Aero");

export default class test extends Aero.Service {
	protected static Start(): void {
		print("Started from test.ts!");
	}

	protected static Init(): void {
		print("Initiated from test.ts!");
	}
}
