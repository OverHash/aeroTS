import test = require("Server/Services/test");

declare global {
	// put all shared stuff here
	interface shared {

	}

	// put all server stuff here
	interface server {
		services: {
			test: test
		},


		modules: {

		}
	}

	// put all client stuff here
	interface client {
		controllers: {

		},

		modules: {

		}
	}
}