import Aero = require("internal/Aero/Aero");

export = class test extends Aero.Controller {
	constructor() {
		super();
	}

	Start() {
		print('started!');
	}
}