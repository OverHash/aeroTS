export = Aero
declare namespace Aero {
	abstract class Service {
		Start(): void;

		Init(): void;

		Services: server["services"];
		static Services: server["services"];

		Modules: server['modules'];
		static Modules: server['modules'];

		Shared: shared;
		static Shared: shared;
	}

	abstract class Controller {
		Start(): void;

		Init(): void;

		Controllers: client['controllers'];
		static Controllers: client['controllers'];

		Modules: client['modules'];
		static Modules: client['modules'];

		Shared: shared;
		static Shared: shared;
	}

	abstract class ServerModule {
		Start?(): void;

		Init?(): void;

		Services: server['services'];
		static Services: server['services'];

		Modules: server['modules'];
		static Modules: server['modules'];

		Shared: shared;
		static Shared: shared;
	}

	abstract class ClientModule {
		Start?(): void;

		Init?(): void;

		Controllers: client['controllers'];
		static Controllers: client['controllers'];

		Modules: client['modules'];
		static Modules: client['modules'];

		Shared: shared;
		static Shared: shared;
	}

	abstract class SharedModule {
		Start?(): void;

		Init?(): void;

		Shared: shared;
		static Shared: shared;
	}
}
