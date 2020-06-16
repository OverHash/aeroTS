export = Aero
declare namespace Aero {
	abstract class Service {
		static Start(): void;

		static Init(): void;

		Services: server["services"];
		static Services: server["services"];

		Modules: server['modules'];
		static Modules: server['modules'];

		Shared: shared;
		static Shared: shared;
	}

	abstract class Controller {
		static Start(): void;

		static Init(): void;

		Controllers: client['controllers'];
		static Controllers: client['controllers'];

		Modules: client['modules'];
		static Modules: client['modules'];

		Shared: shared;
		static Shared: shared;
	}

	abstract class ServerModule {
		static Start?(): void;

		static Init?(): void;

		Services: server['services'];
		static Services: server['services'];

		Modules: server['modules'];
		static Modules: server['modules'];

		Shared: shared;
		static Shared: shared;
	}

	abstract class ClientModule {
		static Start?(): void;

		static Init?(): void;

		Controllers: client['controllers'];
		static Controllers: client['controllers'];

		Modules: client['modules'];
		static Modules: client['modules'];

		Shared: shared;
		static Shared: shared;
	}

	abstract class SharedModule {
		static Start?(): void;

		static Init?(): void;

		Shared: shared;
		static Shared: shared;
	}
}
