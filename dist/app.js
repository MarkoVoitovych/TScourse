"use strict";
class Key {
    constructor() {
        this.signature = Math.random();
    }
    getSignature() {
        return this.signature;
    }
}
class Person {
    constructor(key, name) {
        this.key = key;
        this.name = name;
    }
    getKey() {
        return this.key;
    }
    getName() {
        return this.name;
    }
}
class House {
    constructor(key) {
        this.key = key;
        this.door = "close";
        this.tenants = [];
        this.key = key;
    }
    comeIn(p) {
        if (this.door === "open") {
            this.tenants.push(p);
            console.log(`${p.getName()}'s inside`);
        }
    }
    getTenants() {
        return this.tenants;
    }
}
class MyHouse extends House {
    constructor(k) {
        super(k);
    }
    openDoor(k) {
        if (k.getSignature() !== this.key.getSignature()) {
            throw new Error("Key to another door");
        }
        return (this.door = "open");
    }
}
const key = new Key();
const bob = new Person(key, "Bob");
const cottege = new MyHouse(key);
cottege.openDoor(bob.getKey());
cottege.comeIn(bob);
console.log(cottege.getTenants());
//# sourceMappingURL=app.js.map