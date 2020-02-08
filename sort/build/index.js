"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var NumbersCollection_1 = require("./NumbersCollection");
var CharactersCollection_1 = require("./CharactersCollection");
var LinkedList_1 = require("./LinkedList");
var numbersCollection = new NumbersCollection_1.NumbersCollection([-10, 4, 0, 3, -4]);
var charactersCollection = new CharactersCollection_1.CharactersCollection('ZZaZhbYC');
var sorter = new Sorter_1.Sorter(numbersCollection);
var stringSorter = new Sorter_1.Sorter(charactersCollection);
sorter.sort();
stringSorter.sort();
// console.log(numbersCollection.data)
// console.log(charactersCollection.data)
var linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
var sorterList = new Sorter_1.Sorter(linkedList);
sorterList.sort();
linkedList.print();
