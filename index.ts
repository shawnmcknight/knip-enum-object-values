import { Fruits } from "./fruits";

const fruitKeys = Object.keys(Fruits);
const fruitValues = Object.values(Fruits);
const fruitEntries = Object.entries(Fruits);
const apple = Fruits.apple; // apple is now used, but orange is not

/*
Unused exported enum members (1)
orange  Fruits  fruits.ts:3:3
 */
