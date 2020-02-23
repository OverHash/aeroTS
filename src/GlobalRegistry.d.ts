import Date from "Shared/Date";
import Event from "Shared/Event";
import Thread from "Shared/Thread";
import Base64 from "Shared/Base64";
import TableUtil from "Shared/TableUtil";
import ListenerList from "Shared/ListenerList";

// import modules here, e.g.

// import mySharedModule = require('Shared/mySharedModule');

// import myService = require('Server/Services/myService');
// import myServerModule = require('Server/Modules/myServerModule');

// import myController = require('Client/Controllers/myController');
// import myClientModule = require('Client/Modules/myClientModule');


declare global {
	// put all shared stuff here
	interface shared {
		// module: moduleDefinition
		// e.g. module2: module2;
		Date: typeof Date;
		Event: typeof Event;
		Thread: typeof Thread;
		Base64: typeof Base64;
		TableUtil: typeof TableUtil;
		ListenerList: typeof ListenerList;
	}

	// put all server stuff here
	interface server {
		services: {
			// service: serviceDefinition
			// e.g. myService: myService;
		},


		modules: {
			// module: moduleDefinition
			// e.g. myServerModule: myServerModule
		}
	}

	// put all client stuff here
	interface client {
		controllers: {
			// controller: controllerDefinition
			// e.g. myController: myController
		},

		modules: {
			// module: moduleDefinition
			// e.g. myClientModule: myClientModule
		}
	}
}