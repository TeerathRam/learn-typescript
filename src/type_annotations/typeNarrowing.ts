//find data type and return

function getChai(kind: string | number) {
	if (typeof kind === "string") {
		return `Making ${kind} chai ...`;
	}
	return `Chai order ${kind} is ready `;
}

function serveChai(msg?: string) {
	if (msg) {
		return `Serving ${msg}`;
	}
	return `Serving default masala chai. `;
}

function orderChai(size: "small" | "medium" | "large" | number) {
	if (size === "small") {
		return `Serving small cutting chai..`;
	}

	if (size === "medium" || size === "large") {
		return `Make extra chai.`;
	}

	return `chai order ${size}`;
}

class KulhadChai {
	serve() {
		return `Serving Kulhad Chai`;
	}
}
class CuttingChai {
	serve() {
		return `Serving Cutting Chai`;
	}
}

function server(chai: KulhadChai | CuttingChai) {
	if (chai instanceof KulhadChai) {
		return chai.serve();
	}
}

// custom type
type ChaiOrder = {
	type: string;
	suger: number;
};

function isChaiOrder(obj: any): obj is ChaiOrder {
	return (
		typeof obj === "object" &&
		obj !== null &&
		typeof obj.type === "string" &&
		typeof obj.suger === "number"
	);
}

function serveOrder(ord: ChaiOrder | string) {
	if (isChaiOrder(ord)) {
		return `Serving your ${ord.type} chai with ${ord.suger}`;
	}

	return `Serving your ${ord}`;
}

type MasalaChai = { type: "masala"; spicelevel: number };
type GingerChai = { type: "ginger"; strength: number };
type ElachiChai = { type: "elachi"; quantity: number };

type Chai = MasalaChai | GingerChai | ElachiChai;

function vareties(chai: Chai) {
	switch (chai.type) {
		case "elachi":
			return "Elachi Chai";
		case "ginger":
			return "Ginger Chai";
		case "masala":
			return "Masala Chai";
	}
}
