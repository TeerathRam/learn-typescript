function makeChai(name: string, cups: number) {
	console.log(`Making ${cups} ${name} chai.`);
}

makeChai("Ginger", 10);

const chaiFlavours: string[] = ["Masala", "Ginger"];
const chaiPrice: number[] = [12, 15];
const ratings: Array<number> = [4.5, 4.0];

type Chai = {
  name: string;
  price: number
}

const menu: Array<Chai> = [
  {name: "Ginger", price: 15}
  {name: "Masala", price: 30}
]

const availableStore: readonly string[] = ["Mumbai", "Nagpur"]

// tuple
const table: number[][] = [
  [1, 2, 3],
  [4, 5, 6]
]

let chaiTuple: [string, number]
chaiTuple = ["Masala", 30]

let userInfo: [string, number, boolean]
userInfo = ["XYZ", 25, true]

// readonly tuple
const location: readonly [number, number]  = [1947.44, 46473.10]

//named tuple
const userLocation: [altitude: number, longitude: number] = [2634.33, 173.44]

//enums
enum Cupsize  {
  SMALL,
  LARGE,
  MEDIUM
}

const cupSize = Cupsize.MEDIUM

enum AvailableSize {
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large"
}

function chaiOrder(size:AvailableSize) {
  console.log(size);
}

chaiOrder(AvailableSize.MEDIUM)

