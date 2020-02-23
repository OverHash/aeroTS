import Aero = require("internal/Aero/Aero");

export = class test extends Aero.Service {
	Start() {
		print('Started from test.ts!');
	}

	Init() {
		print('Initiated from test.ts!');
	}
}