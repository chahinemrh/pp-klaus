import Toy from './Toy'

export class Pony extends Toy {
    private static _nb: number = 0;
    id: number;
    type: string;

    constructor() {
        super();
        Pony._nb++;
        this.id = Pony._nb;
        this.type = `Pony #${this.id}`
    }
        public ponySence(): void{
            console.log(
                `Pony ${this.id} is singing -->
                'Dou-double poney, j’fais izi money'
                'D’où tu m’connais ? Parle moi en billets violets'
                'Dou-double poney, j’fais izi money \n`
            )
        }
    }
