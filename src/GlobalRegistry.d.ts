import Date from 'Shared/Date';
import Maid from 'Shared/Maid';
import Event from 'Shared/Event';
import Thread from 'Shared/Thread';
import Base64 from 'Shared/Base64';
import TableUtil from 'Shared/TableUtil';
import NumberUtil from 'Shared/NumberUtil';
import VectorUtil from 'Shared/VectorUtil';

// import modules here, e.g.

// import mySharedModule = require('Shared/mySharedModule');

// import myService = require('Server/Services/myService');
// import myServerModule = require('Server/Modules/myServerModule');

// import myController = require('Client/Controllers/myController');
// import myClientModule = require('Client/Modules/myClientModule');

declare global {
	// put all shared stuff here
	interface shared {
		// module: typeof moduleImport
		// e.g. module2: typeof module2;
		Date: typeof Date;
		Maid: typeof Maid;
		Event: typeof Event;
		Thread: typeof Thread;
		Base64: typeof Base64;
		TableUtil: typeof TableUtil;
		NumberUtil: typeof NumberUtil;
		VectorUtil: typeof VectorUtil;
	}

	// put all server stuff here
	interface server {
		services: {
			// service: serviceImport
			// e.g. myService: typeof myService;
		};

		modules: {
			// module: moduleImport
			// e.g. myServerModule: typeof myServerModule
		};
	}

	// put all client stuff here
	interface client {
		controllers: {
			// controller: controllerImport
			// e.g. myController: typeof myController
		};

		modules: {
			// module: moduleImport
			// e.g. myClientModule: typeof myClientModule
		};
	}
}
