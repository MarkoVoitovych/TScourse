"use strict";

let age: number = 50;
let names: string = "Max";
let toggle: boolean = true;
let empty: null = null;
let notInitialized: undefined = undefined;
let callback = (a: number): number => {
  return 100 + a;
};

let anything: any = -20;
anything = "Text";
anything = {};

let some: unknown;
some = "Text";

let str: string;
if (typeof some === "string") {
  str = some;
}

let person: [string, number] = ["Max", 21];

enum Load {
  LOADING,
  READY,
}

const page = {
  load: Load.READY,
};
if (page.load === Load.LOADING) {
  console.log("page loading");
}
if (page.load === Load.READY) {
  console.log("page ready");
}

let optional: string | number = 23;
optional = "44";

let state: "enable" | "disable";

function showMessage(message: string): void {
  console.log(message);
}

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

let customError = (): never => {
  throw new Error("Error");
};

type Page = {
  title: string;
  likes: number;
  accounts: string[];
  status: "open" | "close";
  details?: {
    createAt: Date;
    updateAt: Date;
  };
};

const page1: Page = {
  title: "The awesome page",
  likes: 100,
  accounts: ["Max", "Anton", "Nikita"],
  status: "open",
  details: {
    createAt: new Date("2021-01-01"),
    updateAt: new Date("2021-05-01"),
  },
};

const page2: Page = {
  title: "Python or Js",
  likes: 5,
  accounts: ["Alex"],
  status: "close",
};
