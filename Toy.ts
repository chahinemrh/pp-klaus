export default class Toy {
    type: string = "";

    constructor() {
    }

    isMoved() {
        console.log("-");
    }

    getType() {
        console.log(` type :  ${this.type}`);
    }
}