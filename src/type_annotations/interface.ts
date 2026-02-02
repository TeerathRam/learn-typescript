type ChaiOrder = {
	type: string;
	suger: number;
	strong: boolean;
};

function makeChai(order: ChaiOrder) {
	console.log(order);
}
function serveChai(order: ChaiOrder) {
	console.log(order);
}

// interface
type TeaRecipe = {
	water: number;
	milk: number;
};

// class MasalaChai implements TeaRecipe {
// 	water = 100;
// 	milk = 50;
// }

interface CupSize {
	size: "small" | "large";
}

class Chai implements CupSize {
	size: "small" | "large" = "small";
}

type BaseChai = { teaLeaves: number };
type Extra = { masala: number };

type MasalaChai = BaseChai & Extra;

const cup: MasalaChai = {
	teaLeaves: 40,
	masala: 50,
};

type User = {
	username: string;
	bio?: string;
};

const user1: User = { username: "xyz" };
const user2: User = { username: "abc", bio: "info" };

type Config = {
	readonly appName: string;
	version: string;
};

const conf: Config = {
	version: "^4.5.2",
	appName: "hello",
};
