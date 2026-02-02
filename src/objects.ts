const chai = {
	name: "Ginger chai",
	price: 20,
	isHot: true,
};

let tea: {
	name: string;
	price: number;
	isHot: boolean;
};

type Tea = {
	name: string;
	price: number;
	isHot: boolean;
	ingredients: string[];
};

const gingerTea: Tea = {
	name: "Ginger tea",
	price: 40,
	isHot: true,
	ingredients: ["water", "teaLeaves", "ginger", "suger"],
};

type Item = { name: string; quantity: number };
type Address = { street: string; pin: number };

type Order = {
	id: string;
	item: Item[];
	address: Address[];
};

const order: Order = {
	id: "00188310sjdj120",
	item: [
		{ name: "mackbook", quantity: 1 },
		{ name: "monitor", quantity: 2 },
	],
	address: [{ street: "xyz abc", pin: 1039491 }],
};

/*type Chai = {
	name: string;
	price: number;
	isHot: boolean;
};

const updateChai = (update: Partial<Chai>) => {
	console.log("updating chai with", update);
};

updateChai({ price: 25 });
updateChai({ isHot: false });
updateChai({});*/

type ChaiOrder = {
	name?: string;
	quantity?: number;
};

const placeOrder = (chaiOrder: Required<ChaiOrder>) => {
	console.log(chaiOrder);
};

placeOrder({ name: "masala", quantity: 20 });

type Chai = {
	name: string;
	price: number;
	isHot: boolean;
	ingredients: string[];
};

type BaicChaiInfo = Pick<Chai, "name" | "price">;

const chaiInfo: BaicChaiInfo = {
	name: "Lemon Tea",
	price: 20,
};

type ChaiInfo = {
	name: string;
	price: number;
	isHot: boolean;
	recepi: string;
};

type PublicChaiInfo = Omit<BaicChaiInfo, "recepi">;
