import Base64 from 'Shared/Base64';
import Date from 'Shared/Date';
import Maid from 'Shared/Maid';
import NumberUtil from 'Shared/NumberUtil';
import Signal from 'Shared/Signal';
import TableUtil from 'Shared/TableUtil';
import Thread from 'Shared/Thread';
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
		Base64: typeof Base64;
		Date: typeof Date;
		Maid: typeof Maid;
		NumberUtil: typeof NumberUtil;
		Signal: typeof Signal;
		TableUtil: typeof TableUtil;
		Thread: typeof Thread;
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
