import {Pony} from './Pony'
import {DragonBall} from './DragonBall';

enum DBHeroes {
    SANGOKU,
    BEJITA,
    BEERUS,
    KAMESENNIN
};

console.log("<-- STEP 1 -->");

const pony1: Pony = new Pony();
const pony2: Pony = new Pony();
const sangoku: DragonBall = new DragonBall(DBHeroes.SANGOKU);

pony1.isMoved();
pony2.isMoved();

sangoku.isMoved();

// Step #2
/*console.log("--- STEP #2 ---")

const majdi: Elf = new Elf("makiboto")
const box: Packaging = new Box()
majdi.pack(box, goku)
box.open()
majdi.pack(box, goku)

const paper: Packaging = new GiftWrap()
majdi.pack(paper, pony)
majdi.pack(paper, pony)

const toy: Toy = majdi.unpack(paper)
console.log(toy === pony)
try {
  majdi.unpack(paper);
} catch (e) {
  console.log(e.message);
}
*/