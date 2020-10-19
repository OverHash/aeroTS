declare namespace Aero {
	abstract class Service {
		protected Services: server["services"];
		protected static Services: server["services"];

		protected Modules: server["modules"];
		protected static Modules: server["modules"];

		protected Shared: shared;
		protected static Shared: shared;
	}

	abstract class Controller {
		protected Controllers: client["controllers"];
		protected static Controllers: client["controllers"];

		protected Modules: client["modules"];
		protected static Modules: client["modules"];

		protected Shared: shared;
		protected static Shared: shared;
	}

	abstract class ServerModule {
		protected Services: server["services"];
		protected static Services: server["services"];

		protected Modules: server["modules"];
		protected static Modules: server["modules"];

		protected Shared: shared;
		protected static Shared: shared;
	}

	abstract class ClientModule {
		protected Controllers: client["controllers"];
		protected static Controllers: client["controllers"];

		protected Modules: client["modules"];
		protected static Modules: client["modules"];

		protected Shared: shared;
		protected static Shared: shared;
	}

	abstract class SharedModule {
		protected Shared: shared;
		protected static Shared: shared;
	}
}

export = Aero;
