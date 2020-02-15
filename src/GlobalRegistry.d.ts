import { test } from "Server/Services/test";

declare global {
	// put all shared stuff here
	interface shared {

	}

	// put all server stuff here
	interface server {
		services: {

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