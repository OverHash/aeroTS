export = Aero
declare namespace Aero {
	abstract class Service {
		Start(): void;

		Init(): void;

		Services: server["services"];

		Modules: server['modules'];

		Shared: shared;
	}

	abstract class Controller {
		Start(): void;

		Init(): void;

		Start(): void;

		Init(): void;

		Controllers: client['controllers'];

		Modules: client['modules'];

		Shared: shared;
	}
}
