"use strict";
var age = 50;
var names = "Max";
var toggle = true;
var empty = null;
var notInitialized = undefined;
var callback = function (a) {
    return 100 + a;
};
var anything = -20;
anything = "Text";
anything = {};
var some;
some = "Text";
var str;
if (typeof some === "string") {
    str = some;
}
var person = ["Max", 21];
var Load;
(function (Load) {
    Load[Load["LOADING"] = 0] = "LOADING";
    Load[Load["READY"] = 1] = "READY";
})(Load || (Load = {}));
var page = {
    load: Load.READY,
};
if (page.load === Load.LOADING) {
    console.log("page loading");
}
if (page.load === Load.READY) {
    console.log("page ready");
}
var optional = 23;
optional = "44";
var state;
function showMessage(message) {
    console.log(message);
}
function calc(num1, num2) {
    return num1 + num2;
}
var customError = function () {
    throw new Error("Error");
};
var page1 = {
    title: "The awesome page",
    likes: 100,
    accounts: ["Max", "Anton", "Nikita"],
    status: "open",
    details: {
        createAt: new Date("2021-01-01"),
        updateAt: new Date("2021-05-01"),
    },
};
var page2 = {
    title: "Python or Js",
    likes: 5,
    accounts: ["Alex"],
    status: "close",
};
