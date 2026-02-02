// type assertion

let response: any = "40";
let numericLength: number = (response as string).length;

type Book = { title: string };

let book = '{"name": "who moved my cheese"}';
let bookObj = JSON.parse(book) as Book;

console.log(bookObj.title);

const username = document.querySelector("#username") as HTMLInputElement;

//type any
let value: any;
value = 10;
value = "xyz";
value = 3.4;
value.toUpperCase();

// type unknown
let newValue: unknown;
newValue = 10;
newValue = "Code";
newValue = 3.14;
if (typeof newValue === "string") {
	newValue.toLowerCase();
}

// error handling
try {
} catch (error) {
	if (error instanceof Error) {
		throw error;
	}

	console.log(error);
}

//type never
type Role = "admin" | "user";

function redirect(role: Role): void {
	if (role === "admin") {
		console.log("Redirecting to admin dashboard");
		return;
	}

	if (role === "user") {
		console.log("Redirecting to user dashboard");
		return;
	}
	role;
}

function neverReturn(params: any): never {
	while (true) {}
}
