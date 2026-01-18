// union
let subs: number | string = "1M";

let apiResponseStatus: "pending" | "success" | "error" = "pending";

let airLineSeat: "aisle" | "middle" | "window" = "middle";

// any

let orders = ["12", "40", "35", "20"];
let currentOrder;

for (const order of orders) {
	if (order === "35") {
		currentOrder = order;
	}
}

console.log(currentOrder);
